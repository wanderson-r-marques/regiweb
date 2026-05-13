# PRD — Regiweb: Site Institucional

## Versão 2.1 (Maio/2026)

> **Escopo atual:** Apenas site institucional (frontend). Sistema de gestão e banco de dados fora do escopo por enquanto.

---

## 1. Visão Geral do Produto

**Regiweb** é um site institucional para captação de clientes para serviços de registro de marcas no INPI. O site serve como vitrine do serviço, focando em passar confiança, modernidade e clareza sobre o processo de registro de marca.

**Público-alvo:**
- Empresas e pessoas físicas que desejam registrar suas marcas
- Empreendedores que precisam proteger sua identidade visual

**Problema que resolve:**
- Falta de informação clara sobre o processo de registro
- Dúvidas sobre por que registrar e quais os riscos
- Necesidade de um site moderno e profissional para gerar confiança

---

## 2. Objetivos

### Objetivos de Negócio
- Gerar leads qualificados para serviços de registro de marca
- Estabelecer autoridade e credibilidade no mercado
- Informar e educar potenciais clientes sobre o processo

### Objetivos de Produto
- Layout indistinguível da Rocketseat (referência visual)
- Conteúdo baseado na Consolide Sua Marca (referência de conteúdo)
- Tempo de carregamento < 2s
- Design responsivo (mobile-first)

---

## 3. Personas

### Público-alvo (Visitor)
- **Perfil:** Empresário, empreendedor, inventor ou profissional liberal
- **Dores:** Não sabe como registrar uma marca; tem medo da burocracia; quer saber se vale a pena
- **Necessidades:** Informação clara; processo explicado de forma simples; confiança no serviço

---

## 4. Escopo de Navegação (Site Institucional)

### Páginas Públicas
- Home
- Como Funciona
- Pesquisar Marca
- Sobre
- Blog
- Contato

### Seções da Home
- Hero com CTA
- Por que registrar? (benefícios)
- Riscos de não registrar
- Processo em 3 passos
- Diferenciais
- FAQ (accordion)
- Depoimentos
- CTA final com formulário de lead
- Footer com links

### Argumentação Principal (Conteúdo Consolide)
- Por que registrar?
- Riscos de não registrar
- Processo em 3 passos

### Footer
Colunas de links: Institucional, Serviços, Ajuda (estilo Rocketseat)

---

## 5. Stack Técnica (Frontend)

| Categoria | Tecnologia |
|-----------|-----------|
| Framework | Next.js 14+ (App Router) |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS |
| Animações | Framer Motion |
| Ícones | lucide-react |
| Hospedagem | Vercel (futuro) |

---

## 6. Design Visual

### Referência Principal
**Rocketseat** (rocketseat.com.br) — tema 100% dark com destaques em roxo.

### Paleta de Cores
- Background: #0a0a0a, #121214, #202024
- Destaque: #8257e6 (roxo), #00b37e (verde)
- Texto: #e1e1e6, #a8a8b3, #7c7c8a
- Bordas: #29292e, #323238

### Tipografia
- Headings: Nunito ou Plus Jakarta Sans (700–800)
- Body: Inter ou Nunito Sans (400–500)

### Elementos de UI
- Navbar com backdrop-blur
- Hero com headlines em gradiente
- Elementos flutuantes com animação
- Cards com glow em hover
- Accordions para FAQ
- Botões com hover effects

### Critérios de Qualidade
O layout deve ser **indistinguível do site da Rocketseat** em termos de espaçamento, cores e ritmo visual.

---

## 7. Fora do Escopo (por enquanto)

- Backend / Banco de dados
- Sistema administrativo (admin)
- Portal do cliente
- Autenticação
- Upload de arquivos
- Integração com INPI
- Pagamento online
- Chat em tempo real
- Aplicativo mobile

---

## 8. Cronograma (Fase 1: Site Institucional)

| Fase | Duração | Entregas |
|------|---------|----------|
| **Setup** | Dia 1-2 | Next.js + Tailwind + estrutura base |
| **Design System** | Dia 3-4 | Componentes, cores, tipografia |
| **Home** | Dia 5-7 | Hero, seções principais |
| **Páginas** | Dia 8-10 | Como Funciona, Pesquisar, Sobre, Blog, Contato |
| **Ajustes** | Dia 11-12 | Animações, responsividade, testes |
| **Deploy** | Dia 13 | Deploy na Vercel |

---

*Documento atualizado em Maio/2026 — Versão 2.1*

*Próxima revisão: ao final da Fase 1.*