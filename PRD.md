# PRD — Regiweb: Sistema de Registro de Marcas

## Versão 2.0 (Maio/2026)

---

## 1. Visão Geral do Produto

**Regiweb** é uma plataforma SaaS para gestão de registro de marcas no INPI. O sistema combina um site institucional para captação de clientes com uma plataforma completa de acompanhamento de processos, permitindo que escritórios de propriedade intelectual e seus clientes acompanhem cada etapa do registro em tempo real.

**Público-alvo:**
- Escritórios de marcas e propriedade intelectual (admin)
- Empresas e pessoas físicas que desejam registrar suas marcas (clientes)

**Problema que resolve:**
- Processos de registro de marca são complexos, burocráticos e sem transparência
- Clientes não têm visibilidade do andamento do processo
- Escritórios gastam tempo com atualizações manuais e comunicação repetitiva

**A Regra de Ouro (Layout):** O site institucional deve ser um "clone" visual da Rocketseat (estética, grid e animações), mas utilizando obrigatoriamente o conteúdo técnico, a estrutura de tópicos e a hierarquia de links da Consolide Sua Marca.

---

## 2. Objetivos

### Objetivos de Negócio
- Reduzir o tempo de gestão de processos de registro em 40%
- Aumentar a taxa de conversão de leads via site institucional
- Oferecer transparência total aos clientes sobre o andamento dos processos
- Centralizar a comunicação e documentação dos processos

### Objetivos de Produto
- MVP funcional em até 8 semanas
- Zero downtime na plataforma
- Tempo de carregamento < 2s em todas as páginas
- Suporte a dispositivos móveis (mobile-first)

---

## 3. Personas

### Admin (Escritório de Marcas)
- **Perfil:** Funcionário ou proprietário de escritório de registro de marcas
- **Dores:** Perde tempo atualizando clientes manualmente; dificuldade em organizar múltiplos processos; documentos espalhados
- **Necessidades:** Visão geral de todos os processos; gestão de documentos; comunicação automatizada com clientes

### Cliente (Empresa/Pessoa Física)
- **Perfil:** Empresário, empreendedor, inventor ou profissional liberal
- **Dores:** Não sabe em que etapa o processo está; precisa ligar/email para saber atualizações; documentos perdidos
- **Necessidades:** Acompanhamento transparente; notificações automáticas; acesso a documentos do processo

---

## 4. Escopo de Navegação (Site Institucional)

### Páginas Públicas
- Home
- Como Funciona
- Pesquisar Marca
- Sobre
- Blog
- Contato

### Argumentação Principal (Conteúdo Consolide)
- Por que registrar?
- Riscos de não registrar
- Processo em 3 passos
- Diferenciais do escritório
- FAQ com accordion
- Depoimentos

### Footer
Replicar as colunas de links da Consolide (Institucional, Serviços, Ajuda), mas com o design de colunas e cores da Rocketseat.

---

## 5. Funcionalidades por Módulo

### Módulo: Site Institucional (Público)

| Feature | Prioridade | Descrição |
|---------|-----------|-----------|
| Hero section com CTA | P0 | Tela inicial com chamada para registro |
| Seção "Como Funciona" | P0 | 3 etapas do processo explicadas |
| Seção "Por que Registrar" | P0 | Benefícios do registro de marca |
| Seção "Diferenciais" | P0 | Diferenciais competitivos do escritório |
| Depoimentos | P1 | Cards com depoimentos de clientes |
| FAQ com accordion | P0 | Perguntas frequentes sobre registro |
| CTA final com formulário | P0 | Formulário simples de captura de leads |
| Página /sobre | P1 | Sobre a empresa e equipe |
| Página /como-funciona | P1 | Detalhamento do processo de registro |
| Página /contato | P0 | Formulário de contato + WhatsApp |
| Página /blog | P2 | Listagem de artigos (estrutura inicial vazia) |
| Footer institucional | P0 | Links, redes sociais, política de privacidade |

### Módulo: Área Administrativa (Admin)

| Feature | Prioridade | Descrição |
|---------|-----------|-----------|
| Dashboard com resumo | P0 | Cards com totais, gráfico de status, atividade recente |
| CRUD de clientes | P0 | Tabela paginada com busca, criar, editar, excluir |
| Detalhes do cliente | P0 | Dados do cliente + lista de marcas associadas |
| Kanban de marcas | P0 | Colunas por status com drag-and-drop |
| Tabela de marcas | P0 | Listagem com filtros por status, cliente, data |
| Detalhes da marca | P0 | Informações completas, histórico, documentos, logo |
| Upload de logo | P0 | Preview imediato, armazenamento no Supabase Storage |
| Upload de documentos | P0 | Upload de PDFs, imagens, etc. |
| Histórico de etapas | P0 | Timeline vertical com todas as mudanças |
| Mudança manual de etapa | P0 | Dropdown para alterar status + nota opcional |
| Cadastro de nova marca | P0 | Formulário com seleção de cliente + dados da marca |
| Filtros e busca | P1 | Filtros por status, cliente, período |

### Módulo: Portal do Cliente

| Feature | Prioridade | Descrição |
|---------|-----------|-----------|
| Dashboard do cliente | P0 | Boas-vindas, cards com status das marcas, notificações |
| Detalhes da marca | P0 | Informações, timeline de progresso, documentos |
| Downloads de documentos | P1 | Lista de documentos disponíveis para download |
| Perfil editável | P1 | Dados pessoais e alteração de senha |

### Módulo: Autenticação e Notificações

| Feature | Prioridade | Descrição |
|---------|-----------|-----------|
| Login com email/senha | P0 | Autenticação via Supabase Auth |
| Recuperação de senha | P0 | Fluxo de reset via email |
| Middleware de proteção | P0 | Rotas protegidas (/admin/** e /portal/**) |
| Redirecionamento por role | P0 | Login redireciona baseado no tipo de usuário |
| Email ao mudar status | P1 | Notificação automática ao cliente |
| Email de boas-vindas | P1 | Email automático no cadastro |
| Email de novo documento | P2 | Notificação quando documento é adicionado |

---

## 6. Fluxos Principais

### Fluxo 1: Cadastro de Cliente + Marca
```
Admin acessa /admin/clientes
→ Clica "Novo Cliente"
→ Preenche dados do cliente (nome, documento, email, telefone)
→ Salva → Cliente criado
→ Clica "Adicionar Marca"
→ Preenche nome, descrição, categoria, tipo da marca
→ Faz upload da logo (opcional)
→ Salva → Marca criada com status "pendente"
→ Email de boas-vindas enviado ao cliente (com link de acesso)
```

### Fluxo 2: Mudança de Etapa (via Kanban)
```
Admin acessa /admin/marcas (visão Kanban)
→ Arrasta card de "Pendente" para "Em Análise"
→ Modal de confirmação aparece com campo de nota opcional
→ Confirma → Status atualizado no banco
→ Histórico registrado com data, usuário e nota
→ Email enviado ao cliente notificando a mudança
→ Card aparece na nova coluna
```

### Fluxo 3: Cliente Acompanhando Processo
```
Cliente recebe email com link para portal
→ Faz login em /login
→ Redirecionado para /portal/dashboard
→ Vê cards com suas marcas e status atual
→ Clica em uma marca → /portal/marcas/[id]
→ Vê timeline visual mostrando progresso
→ Faz download de documentos disponíveis
```

---

## 7. Schema do Banco de Dados

### Tabelas e Relacionamentos

```
auth.users (Supabase Auth)
  ↓ (FK: id)
profiles (role, full_name, phone)
  ↓ (FK: profile_id)
clients (company_name, document, email, phone, address)
  ↓ (FK: client_id)
brands (name, description, category, type, status, inpi_process_number, ...)
  ↓ (FK: brand_id)
documents (name, file_url, file_type)
  ↓ (FK: brand_id)
brand_history (from_status, to_status, note)

profiles
  ↓ (FK: user_id)
notifications (title, message, read)
```

### Buckets Storage
- `logos` → imagens de logo das marcas
- `documents` → documentos dos processos

---

## 8. Status do Processo de Marca

| Status | Descrição |
|--------|-----------|
| **Pendente** | Marca cadastrada, aguardando início do processo |
| **Em Análise** | Escritório está revisando a documentação e viabilidade |
| **Protocolada** | Pedido protocolado no INPI com número de processo |
| **Em Exame** | INPI está examinando o pedido |
| **Deferida** | INPI deferiu o pedido (publicação na RPI) |
| **Indeferida** | INPI indeferiu o pedido (cabe recurso) |
| **Registrada** | Certificado emitido, marca registrada por 10 anos |
| **Arquivada** | Processo arquivado (desistência, abandono, etc.) |

### Transições Permitidas
```
Pendente → Em Análise
Em Análise → Protocolada
Protocolada → Em Exame
Em Exame → Deferida | Indeferida
Deferida → Registrada
Indeferida → Em Exame (recurso)
Qualquer → Arquivada
```

---

## 9. Stack Técnica

| Categoria | Tecnologia |
|-----------|-----------|
| Framework | Next.js 14+ (App Router) |
| Linguagem | TypeScript (strict) |
| Estilização | Tailwind CSS + shadcn/ui |
| Animações | Framer Motion |
| Banco de Dados | Supabase (PostgreSQL) |
| Autenticação | Supabase Auth |
| Armazenamento | Supabase Storage |
| ORM/Client | @supabase/supabase-js |
| E-mail | Resend + React Email |
| Drag-and-drop | @dnd-kit/core |
| Formulários | react-hook-form + zod |
| Utilitários | date-fns, lucide-react, clsx, tailwind-merge |

---

## 10. Design Visual

### Referência Principal
**Rocketseat** (rocketseat.com.br) — tema 100% dark com destaques em roxo.

### Paleta de Cores
- Background: #0a0a0a, #121214, #202024
- Destaque: #8257e6 (roxo), #00b37e (verde)
- Texto: #e1e1e6, #a8a8b3, #7c7c8a
- Bordas: #29292e, #323238

### Tipografia
- Headings: Nunito (700–800)
- Body: Nunito Sans (400–500)

### Critérios de Qualidade
O layout deve ser **indistinguível do site da Rocketseat** em termos de espaçamento, cores e ritmo visual. A interface deve passar uma sensação de produto premium e de alta tecnologia.

---

## 11. Fora do Escopo (v1)

- Pagamento online / checkout
- Integração direta com INPI (API)
- Múltiplos escritórios / multi-tenancy
- Relatórios avançados (exportação Excel/PDF de métricas)
- Chat em tempo real entre admin e cliente
- Aplicativo mobile nativo
- Internacionalização (i18n)
- Assinatura digital de documentos

---

## 12. Métricas de Sucesso

### KPIs de Negócio
- **Número de leads capturados via site** ≥ 50/mês no primeiro trimestre
- **Taxa de conversão lead → cliente** ≥ 20%
- **NPS da plataforma** ≥ 75 (com pesquisa enviada após registro)

### KPIs de Produto
- **Tempo de carregamento** < 2s (LCP)
- **Uptime** > 99.5%
- **Tempo médio de mudança de etapa** < 30s (admin)
- **Clientes que acessam o portal** ≥ 60% dos ativos

---

## 13. Cronograma de Implementação

| Fase | Duração | Entregas |
|------|---------|----------|
| **Setup + Database** | Semana 1 | Projeto Next.js configurado, schema Supabase, migrations, RLS |
| **Autenticação + Design System** | Semana 2 | Login, middleware, componentes base, tema Tailwind |
| **Site Institucional** | Semana 3 | Home, páginas públicas, formulário de lead |
| **Admin CRUD** | Semana 4-5 | Dashboard, clientes CRUD, cadastro de marcas |
| **Admin Kanban** | Semana 6 | Kanban com drag-and-drop, mudança de etapa |
| **Portal Cliente** | Semana 7 | Dashboard cliente, timeline, documentos, perfil |
| **E-mails** | Semana 8 | Templates, triggers automáticos |
| **Testes + Ajustes** | Semana 8 | Testes, correções, deploy |

---

*Documento atualizado em Maio/2026. Versão 2.0 — Merge do PRD original com novo conteúdo.*

*Próxima revisão: ao final da Fase 1.*