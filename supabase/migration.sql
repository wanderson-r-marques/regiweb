-- ============================================
-- MIGRATION: Regiweb Database
-- Execute no Supabase SQL Editor
-- ============================================

-- ============================================
-- 1. CRIAÇÃO DAS TABELAS
-- ============================================

-- Tabela de Perfis (extends auth.users)
CREATE TABLE IF NOT EXISTS public.perfis (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'cliente' CHECK (role IN ('admin', 'cliente')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de Clientes
CREATE TABLE IF NOT EXISTS public.clientes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  cpf_cnpj TEXT,
  email TEXT,
  telefone TEXT,
  endereco TEXT,
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de Marcas
CREATE TABLE IF NOT EXISTS public.marcas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cliente_id UUID NOT NULL REFERENCES public.clientes(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  classe_ncm TEXT,
  numero_inpi TEXT,
  status TEXT NOT NULL DEFAULT 'pendente' CHECK (status IN ('pendente', 'em_analise', 'deferido', 'indeferido', 'registrado')),
  data_registro DATE,
  descricao TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================
-- 2. ÍNDICES PARA PERFORMANCE
-- ============================================

CREATE INDEX IF NOT EXISTS idx_clientes_email ON public.clientes(email);
CREATE INDEX IF NOT EXISTS idx_clientes_cpf_cnpj ON public.clientes(cpf_cnpj);
CREATE INDEX IF NOT EXISTS idx_clientes_user_id ON public.clientes(user_id);
CREATE INDEX IF NOT EXISTS idx_marcas_cliente_id ON public.marcas(cliente_id);
CREATE INDEX IF NOT EXISTS idx_marcas_status ON public.marcas(status);
CREATE INDEX IF NOT EXISTS idx_perfis_role ON public.perfis(role);

-- ============================================
-- 3. ROW LEVEL SECURITY (RLS)
-- ============================================

ALTER TABLE public.perfis ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.clientes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.marcas ENABLE ROW LEVEL SECURITY;

-- ============================================
-- 4. POLÍTICAS DE ACESSO (RLS Policies)
-- ============================================

-- Perfis: apenas o próprio usuário pode ver/editar
CREATE POLICY "Users can view own profile" ON public.perfis
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.perfis
  FOR UPDATE USING (auth.uid() = id);

-- Administradores podem fazer tudo
CREATE POLICY "Admin can do everything on perfis" ON public.perfis
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.perfis WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin can do everything on clientes" ON public.clientes
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.perfis WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin can do everything on marcas" ON public.marcas
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.perfis WHERE id = auth.uid() AND role = 'admin')
  );

-- Clientes podem ver suas próprias marcas
CREATE POLICY "Clientes can view own marcas" ON public.marcas
  FOR SELECT USING (
    cliente_id IN (SELECT id FROM public.clientes WHERE user_id = auth.uid())
  );

CREATE POLICY "Clientes can insert own marcas" ON public.marcas
  FOR INSERT WITH CHECK (
    cliente_id IN (SELECT id FROM public.clientes WHERE user_id = auth.uid())
  );

CREATE POLICY "Clientes can update own marcas" ON public.marcas
  FOR UPDATE USING (
    cliente_id IN (SELECT id FROM public.clientes WHERE user_id = auth.uid())
  );

-- ============================================
-- 5. TRIGGER PARA CRIAR PERFIL AUTOMATICAMENTE
-- ============================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.perfis (id, email, role)
  VALUES (
    NEW.id,
    NEW.email,
    CASE 
      WHEN NEW.email IN ('admin@regiweb.com.br', 'admin@regiweb.com') THEN 'admin'
      ELSE 'cliente'
    END
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- 6. TRIGGER PARA CRIAR CLIENTE AUTOMATICAMENTE
-- ============================================

CREATE OR REPLACE FUNCTION public.handle_new_cliente()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.clientes (id, nome, email, user_id)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.email,
    NEW.id
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_cliente_created ON public.perfis;
CREATE TRIGGER on_cliente_created
  AFTER INSERT ON public.perfis
  FOR EACH ROW 
  WHEN (NEW.role = 'cliente')
  EXECUTE FUNCTION public.handle_new_cliente();

-- ============================================
-- 7. FUNÇÃO PARA TIMESTAMP AUTOMÁTICO
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_clientes_updated_at ON public.clientes;
CREATE TRIGGER update_clientes_updated_at
  BEFORE UPDATE ON public.clientes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS update_marcas_updated_at ON public.marcas;
CREATE TRIGGER update_marcas_updated_at
  BEFORE UPDATE ON public.marcas
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================
-- FIM DA MIGRATION
-- ============================================