# Guia de Metadados - Regiweb

## Informações da Empresa
- **Localização:** Fortaleza, Ceará (CE)
- **Preço:** R$ 299 (pagamento único)
- **Mensalidade:** SEM - pagamento único
- **Diferencial:** Menor preço do mercado

## IMPORTANTE: Como adicionar metadados em páginas Client Components

No Next.js App Router, se uma página usa "use client" (Client Component), você **NÃO** pode exportar `metadata` diretamente no `page.tsx`. A solução é criar um arquivo `layout.tsx` na mesma pasta.

### Estrutura Correta:

```
app/
├── layout.tsx          (metadados globais)
├── contato/
│   ├── layout.tsx      (metadados específicos)
│   └── page.tsx        (componente cliente)
```

### Modelo de layout.tsx:

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Título da Página - Regiweb Fortaleza',
  description: 'Descrição com Fortaleza, menor preço, R$ 299, sem mensalidade',
  keywords: 'palavras-chave aqui',
}

export default function NomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
```

## Metadados Globais (layout.tsx)

O arquivo `app/layout.tsx` contém os metadados globais que aparecem em todas as páginas.

**Sempre incluir:**
- Título com "Fortaleza" e "menor valor"
- Description com: localização, preço, sem mensalidade, pagamento único
- Keywords: registro marca, INPI, Fortaleza, Ceará, menor valor, sem mensalidade
- OpenGraph para apps de mensagem e redes sociais

**Exemplo:**
```typescript
export const metadata: Metadata = {
  title: 'Regiweb Fortaleza - Menor Investimento do Mercado | Registro de Marca no INPI',
  description: 'Empresa de Fortaleza-CE. O menor investimento do mercado para registro de marca no INPI. Sem mensalidade, sem taxas ocultas. COBRIMOS ORÇAMENTOS. +2.500 marcas registradas.',
  keywords: 'registro de marca, INPI, registro marca Fortaleza, menor valor registro marca, marca sem mensalidade, pagamento único marca, registro marca Ceará',
  openGraph: {
    title: 'Regiweb Fortaleza - Registro de Marca com Menor Preço do Mercado',
    description: 'Empresa de Fortaleza-CE. O menor preço do mercado para registro de marca no INPI. Pagamento único de R$ 299, sem mensalidade.',
    type: 'website',
    locale: 'pt_BR',
  },
}
```

## Páginas Específicas (criar layout.tsx em cada pasta)

### Contato (contato/layout.tsx)
```typescript
export const metadata: Metadata = {
  title: 'Fale Conosco - Regiweb Fortaleza | Registro de Marca',
  description: 'Entre em contato com a Regiweb de Fortaleza-CE. Menor preço do mercado: R$ 299 pagamento único, sem mensalidade.',
}
```

### Pesquisar Marca (pesquisar-marca/layout.tsx)
```typescript
export const metadata: Metadata = {
  title: 'Pesquisar Marca no INPI - Regiweb Fortaleza',
  description: 'Pesquise se sua marca está disponível no INPI. Regiweb Fortaleza - menor preço: R$ 299 pagamento único, sem mensalidade.',
}
```

### Como Funciona (como-funciona/layout.tsx)
```typescript
export const metadata: Metadata = {
  title: 'Como Funciona o Registro de Marca - Regiweb Fortaleza',
  description: 'Entenda o processo de registro de marca em 6 etapas. Regiweb Fortaleza - R$ 299 pagamento único, sem mensalidade.',
}
```

### Sobre (sobre/layout.tsx)
```typescript
export const metadata: Metadata = {
  title: 'Sobre Nós - Regiweb Fortaleza | Registro de Marcas',
  description: 'Conheça a Regiweb, empresa de Fortaleza-CE. Menor preço do Brasil: R$ 299 pagamento único, sem mensalidade.',
}
```

### Blog (blog/layout.tsx)
```typescript
export const metadata: Metadata = {
  title: 'Blog - Artigos sobre Registro de Marca | Regiweb Fortaleza',
  description: 'Artigos e dicas sobre registro de marcas. Regiweb Fortaleza - menor preço do mercado.',
}
```

## Elementos de Texto para Atualização

### Hero (components/Hero.tsx)
- Badge: "Menor Preço do Brasil | Sem Mensalidade"
- Descrição: Mention "Empresa de Fortaleza-CE" + "menor preço do mercado"
- Card de preço: "Pagamento único | Sem mensalidade | Menor valor"

### Footer (components/Footer.tsx)
- Descrição: "Empresa de Fortaleza-CE"
- Endereço: "Fortaleza, Ceará"

### Differentiators (components/Differentiators.tsx)
- Adicionar item: "Menor Preço do Mercado" - R$ 299 único pagamento
- Subtítulo com "Fortaleza-CE" + "menor preço"

### Páginas Internas
- Atualizar endereços de "São Paulo, SP" para "Fortaleza, Ceará"
- Adicionar menções de preço nos textos

## Regras de Ouro
1. **SEMPRE incluir:** "Fortaleza" ou "Fortaleza-CE" ou "Ceará" nos metadados
2. **NUNCA incluir valores em R$** (não especifique valores em Reais)
3. **Sempre incluir:** "menor investimento do mercado" ou "menor custo do Brasil"
4. **Sempre incluir:** "sem mensalidade" + "sem taxas ocultas"
5. **Sempre incluir:** "COBRIMOS ORÇAMENTOS" como gatilho mental
6. Usar Open Graph para redes sociais e apps de mensagem
7. **Para Client Components:** criar arquivo `layout.tsx` separado com os metadados
8. **CTA:** Usar "Solicite um orçamento e comprove o menor custo do Brasil" em vez de valores