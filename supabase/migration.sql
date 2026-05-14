-- ============================================
-- MIGRATION: Dashboard Admin Regiweb
-- Execute este arquivo no Supabase SQL Editor
-- ============================================

-- ============================================
-- 1. CRIAÇÃO DAS TABELAS
-- ============================================

-- Tabela de Perfis (extends auth.users)
CREATE TABLE IF NOT EXISTS perfis (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'cliente' CHECK (role IN ('admin', 'cliente')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de Clientes
CREATE TABLE IF NOT EXISTS clientes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  cpf_cnpj TEXT,
  email TEXT,
  telefone TEXT,
  endereco TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de Marcas
CREATE TABLE IF NOT EXISTS marcas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cliente_id UUID NOT NULL REFERENCES clientes(id) ON DELETE CASCADE,
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

CREATE INDEX IF NOT EXISTS idx_clientes_email ON clientes(email);
CREATE INDEX IF NOT EXISTS idx_clientes_cpf_cnpj ON clientes(cpf_cnpj);
CREATE INDEX IF NOT EXISTS idx_marcas_cliente_id ON marcas(cliente_id);
CREATE INDEX IF NOT EXISTS idx_marcas_status ON marcas(status);
CREATE INDEX IF NOT EXISTS idx_perfis_role ON perfis(role);

-- ============================================
-- 3. ROW LEVEL SECURITY (RLS)
-- ============================================

-- Habilitar RLS em todas as tabelas
ALTER TABLE perfis ENABLE ROW LEVEL SECURITY;
ALTER TABLE clientes ENABLE ROW LEVEL SECURITY;
ALTER TABLE marcas ENABLE ROW LEVEL SECURITY;

-- ============================================
-- 4. POLÍTICAS DE ACESSO (RLS Policies)
-- ============================================

-- Perfis: apenas o próprio usuário pode ver/editar seu perfil
CREATE POLICY "Users can view own profile" ON perfis
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON perfis
  FOR UPDATE USING (auth.uid() = id);

-- Administradores podem fazer tudo em todas as tabelas
CREATE POLICY "Admin can do everything on perfis" ON perfis
  FOR ALL USING (
    EXISTS (SELECT 1 FROM perfis WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin can do everything on clientes" ON clientes
  FOR ALL USING (
    EXISTS (SELECT 1 FROM perfis WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin can do everything on marcas" ON marcas
  FOR ALL USING (
    EXISTS (SELECT 1 FROM perfis WHERE id = auth.uid() AND role = 'admin')
  );

-- ============================================
-- 5. TRIGGER PARA CRIAR PERFIL AUTOMATICAMENTE
-- ============================================

-- Função que cria perfil automaticamente após signup
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

-- Trigger para executar a função após inserção em auth.users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- 6. FUNÇÃO PARA ATUALIZAR TIMESTAMP AUTOMÁTICO
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para atualizar updated_at automaticamente
DROP TRIGGER IF EXISTS update_clientes_updated_at ON clientes;
CREATE TRIGGER update_clientes_updated_at
  BEFORE UPDATE ON clientes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS update_marcas_updated_at ON marcas;
CREATE TRIGGER update_marcas_updated_at
  BEFORE UPDATE ON marcas
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================
-- 7. CRIAR USUÁRIO ADMIN PADRÃO (OPCIONAL)
-- ============================================

-- Para criar um usuário admin, você precisa:
-- 1. Ir no Supabase Dashboard > Authentication > Users
-- 2. Criar um usuário com email: admin@regiweb.com.br
-- 3. O trigger automaticamente criará ele como admin

-- Se quiser forçar o role admin manualmente:
-- UPDATE perfis SET role = 'admin' WHERE email = 'admin@regiweb.com.br';

-- ============================================
-- FIM DA MIGRATION
-- ============================================

-- Verificar criação das tabelas
SELECT 
  'perfis' as table_name,
  (SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'perfis') as exists
UNION ALL
SELECT 
  'clientes',
  (SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'clientes')
UNION ALL
SELECT 
  'marcas',
  (SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'marcas');