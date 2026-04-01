# Auditoria de Código — Prospection Site Essencial

**Data:** 2026-04-01
**Projeto:** prospection-aero-hub
**Auditor:** Claude Code (claude-sonnet-4-6)

---

## 1. Visão Geral do Projeto

### Stack utilizada
| Camada | Tecnologia |
|---|---|
| Framework | React 18.3.1 |
| Build tool | Vite 5.4.19 + @vitejs/plugin-react-swc |
| Estilização | Tailwind CSS 3.4.17 |
| Linguagem | TypeScript 5.8.3 |
| UI base | shadcn/ui (componentes em src/components/ui/) |
| Fontes | Syne (heading) + DM Sans (body) via Google Fonts |

### Componentes ativos (renderizados via App.tsx)
| Componente | Arquivo |
|---|---|
| Navbar | src/components/Navbar.tsx |
| HeroSection | src/components/HeroSection.tsx |
| DiferencialSection | src/components/DiferencialSection.tsx |
| ProdutosSection | src/components/ProdutosSection.tsx |
| ProductCard | src/components/ProductCard.tsx |
| MissaoVisaoValoresSection | src/components/MissaoVisaoValoresSection.tsx |
| InstitucionalSection | src/components/InstitucionalSection.tsx |
| ContatoSection | src/components/ContatoSection.tsx |
| ContactForm | src/components/ContactForm.tsx |
| Footer | src/components/Footer.tsx |
| WhatsAppButton | src/components/WhatsAppButton.tsx |
| SectionLabel | src/components/SectionLabel.tsx |

**Total de componentes ativos: 12**
**Total de componentes órfãos: 3** (ScrollToTop, NavLink, PageHero)
**Total de páginas órfãs: 4** (Index, Sobre, Contato, NotFound)

### Dependências instaladas vs usadas
- **dependencies:** 41 pacotes instalados → estimativa de 8 realmente utilizados
- **devDependencies:** 18 pacotes instalados → ~10 realmente utilizados

---

## 2. Componentes e Arquivos Não Utilizados

### Páginas órfãs (src/pages/ — nenhuma é importada em App.tsx)
| Arquivo | Status |
|---|---|
| `src/pages/Index.tsx` | Não referenciado em lugar algum |
| `src/pages/Sobre.tsx` | Não referenciado em lugar algum |
| `src/pages/Contato.tsx` | Não referenciado em lugar algum |
| `src/pages/NotFound.tsx` | Não referenciado em lugar algum |

> Esses arquivos são resquícios de uma arquitetura multi-página anterior. O site atual é one-page e não usa roteamento.

### Componentes órfãos
| Arquivo | Motivo |
|---|---|
| `src/components/ScrollToTop.tsx` | Nunca importado em nenhum arquivo ativo |
| `src/components/NavLink.tsx` | Wrapper de `react-router-dom` nunca importado |
| `src/components/PageHero.tsx` | Usado apenas nas páginas órfãs, nunca no App.tsx |

### Imports não utilizados dentro de arquivos

**`src/pages/Index.tsx`**
- Linha 2: `Play` — importado de lucide-react, nunca usado
- Linha 2: `BadgeCheck` — importado de lucide-react, nunca usado
- Linha 2: `Check` — importado de lucide-react, nunca usado
- Linha 7: `oilImage` — importado de `@/assets/oil_image.webp`, nunca usado

**`src/pages/Contato.tsx`**
- `MessageCircle` — importado de lucide-react, nunca usado no arquivo

**`src/components/HeroSection.tsx`**
- Linha 3: `totalLogo` — importado mas não usado no componente (removido de um layout anterior)

---

## 3. Dependências Órfãs

Comparação entre `package.json` e os imports reais do projeto ativo.

### Pacotes completamente não utilizados (nunca aparecem em nenhum import ativo)

| Pacote | Versão | Linha package.json |
|---|---|---|
| `react-router-dom` | ^6.30.1 | 58 — usado apenas nos arquivos órfãos de pages/ |
| `recharts` | ^2.15.4 | 59 |
| `react-resizable-panels` | ^2.1.9 | 57 |
| `next-themes` | ^0.3.0 | 52 |
| `zod` | ^3.25.76 | 64 |
| `react-day-picker` | ^8.10.1 | 54 |
| `input-otp` | ^1.4.2 | 50 |
| `embla-carousel-react` | ^8.6.0 | 49 |
| `cmdk` | ^1.1.1 | 47 |
| `vaul` | ^0.9.9 | 63 |
| `react-hook-form` | ^7.61.1 | 56 — ContactForm usa `useState` diretamente |
| `@hookform/resolvers` | ^3.10.0 | 16 |
| `sonner` | ^1.7.4 | 60 |
| `date-fns` | ^3.6.0 | 48 |

### Pacotes de Radix UI não utilizados (nenhum componente ativo os importa)
`@radix-ui/react-accordion`, `@radix-ui/react-alert-dialog`, `@radix-ui/react-aspect-ratio`, `@radix-ui/react-avatar`, `@radix-ui/react-checkbox`, `@radix-ui/react-collapsible`, `@radix-ui/react-context-menu`, `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-hover-card`, `@radix-ui/react-label`, `@radix-ui/react-menubar`, `@radix-ui/react-navigation-menu`, `@radix-ui/react-popover`, `@radix-ui/react-progress`, `@radix-ui/react-radio-group`, `@radix-ui/react-scroll-area`, `@radix-ui/react-select`, `@radix-ui/react-separator`, `@radix-ui/react-slider`, `@radix-ui/react-switch`, `@radix-ui/react-tabs`, `@radix-ui/react-toast`, `@radix-ui/react-toggle`, `@radix-ui/react-toggle-group`

> Nota: `@radix-ui/react-tooltip` é utilizado via `TooltipProvider` em `App.tsx`. `@radix-ui/react-slot` pode ser dependência interna de shadcn/ui.

### Pacote funcionalmente vestigial

**`@tanstack/react-query` (App.tsx, linha 1)**
Importado, o `QueryClient` é instanciado (linha 13) e o `QueryClientProvider` envolve o app (linha 16), mas **nenhum hook** (`useQuery`, `useMutation`, etc.) é chamado em qualquer componente. A biblioteca está ativa porém sem função real.

### devDependencies sem uso
| Pacote | Versão | Motivo |
|---|---|---|
| `@playwright/test` | ^1.57.0 | Nenhum arquivo de teste Playwright existe |
| `@testing-library/jest-dom` | ^6.6.0 | Nenhum arquivo de teste existe |
| `@testing-library/react` | ^16.0.0 | Nenhum arquivo de teste existe |
| `jsdom` | ^20.0.3 | Nenhum arquivo de teste existe |
| `lovable-tagger` | ^1.1.13 | Ferramenta da plataforma Lovable, não necessária em produção |

---

## 4. Erros de Lógica

### Inconsistência crítica: número de WhatsApp

Há **dois números de WhatsApp diferentes** no projeto:

| Arquivo | Linha | Número |
|---|---|---|
| `src/components/ContactForm.tsx` | 3 | `"5515999999999"` ← placeholder |
| `src/components/WhatsAppButton.tsx` | 1 | `"5515999999999"` ← placeholder |
| `src/components/ProductCard.tsx` | 19 | `"5515996243489"` ← número real |

O formulário de contato e o botão flutuante usam um número placeholder (`5515999999999`), enquanto os cards de produto usam o número real da empresa. **Mensagens enviadas pelo formulário e pelo botão flutuante chegarão ao número errado.**

### Estado e hooks sem problemas detectados

- `Navbar.tsx`: `useState` (mobileOpen, activeSection) e `useEffect` (IntersectionObserver) — implementados corretamente. Array de dependências vazio `[]` é intencional pois o observer é registrado uma única vez.
- `ContactForm.tsx`: `useState` (form, errors) — ambos lidos e atualizados corretamente.

### Sem funções declaradas e não chamadas

Nenhuma função local declarada e não chamada foi detectada nos componentes ativos.

---

## 5. Problemas de Roteamento

### Imports de react-router-dom em arquivos órfãos

| Arquivo | Linha | Import |
|---|---|---|
| `src/pages/Index.tsx` | 1 | `import { Link } from "react-router-dom"` |
| `src/pages/NotFound.tsx` | 1 | `import { useLocation } from "react-router-dom"` |
| `src/components/NavLink.tsx` | 1 | `import { NavLink as RouterNavLink } from "react-router-dom"` |
| `src/components/ScrollToTop.tsx` | 2 | `import { useLocation } from "react-router-dom"` |

**Diagnóstico:** Nenhum `BrowserRouter`, `Routes` ou `Route` existe no `App.tsx`. O roteamento não está configurado. Todos os arquivos que usam react-router-dom são arquivos órfãos não renderizados. O site one-page atual não tem e não precisa de react-router-dom.

### Consistência de âncoras e IDs (componentes ativos)

| href | id correspondente | Arquivo do id | Status |
|---|---|---|---|
| `#inicio` | `id="inicio"` | HeroSection.tsx:8 | ✓ |
| `#produtos` | `id="produtos"` | ProdutosSection.tsx:70 | ✓ |
| `#sobre` | `id="sobre"` | MissaoVisaoValoresSection.tsx:23 | ✓ |
| `#contato` | `id="contato"` | ContatoSection.tsx:6 | ✓ |

**IDs existentes sem link de navegação:**
- `id="diferencial"` (DiferencialSection.tsx:14) — sem âncora correspondente no menu
- `id="institucional"` (InstitucionalSection.tsx:7) — sem âncora correspondente no menu

Nenhum problema funcional — as seções existem mas simplesmente não aparecem no menu, o que pode ser intencional.

---

## 6. Formulário de Contato — Validação

**Arquivo:** `src/components/ContactForm.tsx`

### Campos validados antes de enviar (linhas 41–47)
| Campo | Obrigatório no HTML | Validado no JS | Status |
|---|---|---|---|
| Nome (`name`) | Placeholder tem `*` | ✓ `.trim()` verificado | OK |
| Telefone (`phone`) | Placeholder tem `*` | ✓ `.trim()` verificado | OK |
| E-mail (`email`) | Placeholder tem `*`, `type="email"` | ✗ **NÃO validado** | **PROBLEMA** |
| Empresa (`company`) | Opcional | — | OK |
| Produto (`product`) | Opcional | — | OK |
| Mensagem (`message`) | Opcional | — | OK |

**Problema (linha 98–103):** O campo de e-mail usa `placeholder="E-mail *"` (indicando obrigatório) e `type="email"`, mas não está incluído na validação `handleSubmit`. O formulário pode ser enviado sem e-mail ou com e-mail inválido. O `type="email"` do navegador só valida se o formulário não usar `noValidate` — e ele usa (`noValidate` na linha 79).

### encodeURIComponent
- **Linha 68:** `encodeURIComponent(message)` ✓ aplicado corretamente à mensagem completa antes de montar a URL.

### Constante WHATSAPP_NUMBER
- `ContactForm.tsx` linha 3: `const WHATSAPP_NUMBER = "5515999999999"` — declarada como constante, usada na linha 70. ✓ estruturalmente correto.
- `WhatsAppButton.tsx` linha 1: define sua própria constante local com o mesmo número.
- `ProductCard.tsx` linha 19: define variável local com número diferente.

**Recomendação:** Centralizar o número em um único arquivo de configuração/constantes.

---

## 7. Acessibilidade e SEO Básico

### H1 na página
- **Exatamente 1 `<h1>`** nos componentes ativos: `HeroSection.tsx` linha 18. ✓

### Atributos `alt` em imagens
Todas as imagens nos componentes ativos possuem `alt` descritivo. ✓

| Arquivo | Linha | alt |
|---|---|---|
| Navbar.tsx | 46 | "Prospection - Distribuidor Total Aeronáutico" |
| Navbar.tsx | 52 | "TotalEnergies" |
| DiferencialSection.tsx | 16 | "Óleo Transparente Decorativo" |
| DiferencialSection.tsx | 29 | "TotalEnergies" |
| ProductCard.tsx | 40 | `{name}` (dinâmico) |
| InstitucionalSection.tsx | 90 | "TotalEnergies" |
| Footer.tsx | 20 | "Prospection" |
| Footer.tsx | 22 | "TotalEnergies" |

### Lang, charset, viewport e meta tags (index.html)
| Atributo | Valor atual | Status |
|---|---|---|
| `<html lang>` | `pt-BR` | ✓ |
| `<meta charset>` | `UTF-8` | ✓ |
| `<meta name="viewport">` | `width=device-width, initial-scale=1.0` | ✓ |
| `<title>` | "Prospection — Distribuidor Autorizado TotalEnergies para o Setor Aeronáutico \| Votorantim SP" | ✓ |
| `<meta name="description">` | Descrição completa com palavras-chave aeronáuticas | ✓ |

---

## 8. Responsividade

### Classes responsivas utilizadas no projeto
`sm:` — breakpoint 640px | `md:` — breakpoint 768px | `lg:` — breakpoint 1024px

### Componentes sem nenhuma classe responsiva (potencial problema mobile)

| Componente | Observação |
|---|---|
| `SectionLabel.tsx` | Apenas classes base. Funciona bem pois é simples (texto + borda). Sem risco de quebra. |
| `WhatsAppButton.tsx` | Botão fixo com tamanho estático (52×52px via inline style). Funciona em mobile pois é posicionamento fixo. Sem risco de quebra. |

### Componentes com responsividade verificada
Todos os demais componentes ativos utilizam classes `md:` e/ou `lg:` para adaptar layout, tipografia e espaçamento. As conversões mais comuns encontradas:

- Grids: `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-3`
- Texto: `text-[24px]` → `md:text-[32px]` → `lg:text-[42px]`
- Padding: valores menores em mobile, `md:px-10 lg:px-8`
- Flex direction: `flex-col` → `md:flex-row`
- Display: `hidden md:block` e `md:hidden` usados corretamente

**Conclusão:** Nenhum componente ativo apresenta risco real de quebra em viewport abaixo de 767px.

---

## 9. Performance

### Imagens sem `loading="lazy"`

**Nenhuma imagem no projeto** possui o atributo `loading="lazy"`. Todas as imagens carregam de forma síncrona, incluindo as que estão abaixo do fold.

| Arquivo | Linha | Imagem | Posição na página | Prioridade |
|---|---|---|---|---|
| Navbar.tsx | 46 | prospection-logo.png | Acima do fold | `loading="eager"` é correto aqui |
| Navbar.tsx | 52 | totalenergies-logo.png | Acima do fold | `loading="eager"` é correto aqui |
| DiferencialSection.tsx | 16 | oil_liquid_drop.png | Abaixo do fold | Deveria ter `loading="lazy"` |
| DiferencialSection.tsx | 29 | totalenergies-logo.png | Abaixo do fold | Deveria ter `loading="lazy"` |
| ProductCard.tsx | 40 | aero_xpd100-removebg-preview.png | Abaixo do fold | Deveria ter `loading="lazy"` |
| InstitucionalSection.tsx | 90 | totalenergies-logo.png | Abaixo do fold | Deveria ter `loading="lazy"` |
| Footer.tsx | 20 | prospection-logo.png | Abaixo do fold | Deveria ter `loading="lazy"` |
| Footer.tsx | 22 | totalenergies-logo.png | Abaixo do fold | Deveria ter `loading="lazy"` |

> As imagens da Navbar estão acima do fold e NÃO devem ter `loading="lazy"` — o restante sim.

### YouTube iframe sem `loading="lazy"`

**`DiferencialSection.tsx`, linha 50:**
O iframe do YouTube carrega imediatamente, fazendo requisições para `youtube.com` mesmo que o usuário nunca role até aquela seção. Adicionar `loading="lazy"` ao iframe reduz o impacto no carregamento inicial.

### Componentes grandes
Nenhum componente individual ultrapassa um tamanho problemático. O arquivo mais extenso é `src/pages/Index.tsx` com ~390 linhas, mas esse arquivo é órfão e não é renderizado.

---

## 10. Resumo Executivo

### Problemas encontrados — classificados por prioridade

| # | Problema | Arquivo(s) | Classificação |
|---|---|---|---|
| 1 | **Número de WhatsApp errado** no formulário de contato e botão flutuante — placeholder `5515999999999` em vez do número real `5515996243489` | ContactForm.tsx:3, WhatsAppButton.tsx:1 | **CRÍTICO** |
| 2 | **E-mail não validado** no formulário apesar de indicado como obrigatório (`*`) e `noValidate` ativo | ContactForm.tsx:79, 41-47 | **IMPORTANTE** |
| 3 | **~14 pacotes npm completamente não utilizados** inflando o node_modules (recharts, react-resizable-panels, next-themes, zod, vaul, cmdk, input-otp, embla-carousel-react, date-fns, sonner, react-hook-form, @hookform/resolvers, react-day-picker, react-router-dom) | package.json | **IMPORTANTE** |
| 4 | **25 pacotes @radix-ui não utilizados** — instalados pelo template shadcn/ui mas nenhum componente ativo os consome | package.json:17-43 | **IMPORTANTE** |
| 5 | **Diretório src/pages/ inteiro é código morto** — 4 arquivos nunca renderizados, acumulando ~1.100 linhas de código e imports react-router-dom | src/pages/*.tsx | **IMPORTANTE** |
| 6 | **3 componentes órfãos** nunca importados (ScrollToTop, NavLink, PageHero) | src/components/ | **IMPORTANTE** |
| 7 | **@tanstack/react-query instalado e inicializado sem uso** — QueryClient e QueryClientProvider sem nenhum hook de query | App.tsx:1,13,16 | **SUGESTÃO** |
| 8 | **6 imagens abaixo do fold sem `loading="lazy"`** impactando o carregamento inicial | DiferencialSection, ProductCard, InstitucionalSection, Footer | **SUGESTÃO** |
| 9 | **iframe YouTube sem `loading="lazy"`** — faz requisições para youtube.com no carregamento inicial mesmo que o usuário não role até a seção | DiferencialSection.tsx:50 | **SUGESTÃO** |
| 10 | **4 pacotes de devDependencies de teste sem uso** (@playwright/test, @testing-library/jest-dom, @testing-library/react, jsdom) — sem nenhum arquivo de teste no projeto | package.json:68-81 | **SUGESTÃO** |
| 11 | **Import `totalLogo` não utilizado** em HeroSection.tsx | HeroSection.tsx:3 | **SUGESTÃO** |
| 12 | **Número de WhatsApp não centralizado** — cada arquivo define sua própria constante local | ContactForm.tsx:3, WhatsAppButton.tsx:1, ProductCard.tsx:19 | **SUGESTÃO** |

### Itens sem problemas detectados
- Hierarquia de cabeçalhos (H1 único, H2 nas seções, H3 nos cards) ✓
- Atributos `alt` em todas as imagens ✓
- `lang`, `charset`, `viewport` no HTML ✓
- `title` e `meta description` configurados ✓
- `encodeURIComponent` aplicado corretamente na mensagem do WhatsApp ✓
- Âncoras do menu com IDs correspondentes ✓
- Responsividade dos componentes ativos ✓
- Nenhuma lógica de estado inválida nos componentes ativos ✓
