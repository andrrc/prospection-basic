

# Corrigir Responsividade Mobile do Site Completo

## Problemas identificados

O Hero usa inline styles com valores fixos em pixels (64px título, 140px padding, 800px max-width) que não se adaptam a telas pequenas. Botões e stats bar também não escalam.

## Alterações por arquivo

### 1. `src/pages/Index.tsx` — Hero Section
- **Título H1**: 64px fixo → `text-3xl md:text-5xl lg:text-[64px]` (classes Tailwind em vez de inline style)
- **Padding**: 140px/100px fixos → `pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-[140px] lg:pb-[100px]`
- **Badge**: inline style → classes Tailwind com text responsivo
- **Subtítulo**: 17px fixo → `text-sm md:text-base lg:text-[17px]`
- **CTAs**: padding 16px 32px fixo → `px-6 py-3 md:px-8 md:py-4` com `flex-col sm:flex-row` para empilhar no mobile
- **Stats bar**: padding 40px fixo → `px-4 py-4 md:px-10 md:py-5`, `text-xs md:text-sm`
- Converter inline styles para classes Tailwind responsivas onde possível

### 2. `src/components/Navbar.tsx`
- Logos: adicionar `max-w-[120px]` no mobile para não estourar
- Já tem menu hamburger — ok

### 3. `src/components/Footer.tsx`
- Grid já usa `grid-cols-1 md:grid-cols-3` — ok
- Texto de copyright: adicionar `text-center` no mobile

### 4. `src/pages/Contato.tsx`
- Já usa `grid-cols-1 lg:grid-cols-2` — ok

### 5. `src/pages/Sobre.tsx`
- Já usa `grid-cols-1 lg:grid-cols-2` — ok
- Badge TOTAL: reduzir `text-6xl` → `text-4xl md:text-6xl`

### 6. `src/components/PageHero.tsx`
- Título: já usa `text-hero-mobile lg:text-hero` — ok

## Foco principal
A maioria dos problemas está na Hero da Index por usar inline styles com px fixos. A solução é migrar para classes Tailwind responsivas.

