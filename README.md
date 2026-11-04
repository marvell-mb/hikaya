# Hikaya — Design System

**Hikaya** (حكاية, “história” em árabe) é uma marca brasileira de roupas e acessórios importados, com forte ligação com a dança do ventre e a estética do Oriente Médio e do Norte da África: saias de chiffon, lenços de quadril com moedas, tops bordados, véus, cintos. A venda acontece online (loja própria e marketplaces) e a marca se apoia em embalagem (sacola creme, etiqueta em forma de janela, adesivo verde).

Superfícies cobertas aqui:
- **Identidade** — logo (4 versões × 6 cores), roseta, padrão geométrico, elementos gráficos.
- **Loja online** — UI kit em `ui_kits/loja/` (composição de referência — ver ressalva abaixo).

## Fontes recebidas
- Codebase local `Design System Hikaya/` (somente leitura): `tokens/`, `components/brand`, `components/core`, `guidelines/` (cards de fundamentos), `logo/svg` + `logo/png`, `assets/marks`, `assets/pattern`, `screenshots/` (rodadas de exploração de marca e aplicações: sacola, etiqueta, adesivo), `uploads/referência-omar.jpeg` (referência inicial de logo com arco mourisco).
- Arquivos de fonte enviados: Alegreya Sans (14 estilos) e Cinzel (6 estáticos + variável) → `fonts/`.
- Nenhum Figma, nenhum site em produção, nenhum deck.

## Índice
- `styles.css` — ponto de entrada (só `@import`).
- `tokens/` — `fonts.css` (@font-face), `colors.css`, `typography.css`, `spacing.css` (espaços, raios, bordas, sombras, motion).
- `fonts/` — TTFs de Cinzel e Alegreya Sans.
- `logo/svg`, `logo/png` — `hikaya-{vertical|horizontal|roseta|nome}-{cores|negativo|mono-verde|mono-dourado|mono-creme|mono-preto}`.
- `assets/marks/` — estrela, pétala, janela, janela-contorno. `assets/pattern/` — tiles 96px do padrão (verde, creme, versões transparentes). `assets/reference/` — referência original de logo.
- `guidelines/` — cards de fundamentos (Brand, Colors, Type, Spacing).
- `components/brand/`, `components/core/` — componentes React.
- `ui_kits/loja/` — loja online clicável.
- `SKILL.md` — uso como Agent Skill.
- `thumbnail.html` — tile do design system.

## Components
- **Logo** (`components/brand`) — logo oficial a partir dos SVGs; versão + cor.
- **Pattern** (`components/brand`) — fundo com padrão estrela + pétala, tom verde ou creme.
- **ArchFrame** (`components/brand`) — moldura em janela mourisca (topo semicircular) para fotos.
- **Button** (`components/core`) — primary, secondary, gold, ghost; sm/md/lg.
- **Badge** (`components/core`) — novo, promocao, frete, esgotado, neutro.
- **Price** (`components/core`) — preço em R$ formato brasileiro, com “de/por” e parcelamento.

Intentional additions: nenhuma no nível de componente. No UI kit, `Icon` (wrapper local para Lucide) existe só dentro de `ui_kits/loja/Chrome.jsx`.

---

## CONTENT FUNDAMENTALS
- **Idioma:** português do Brasil. Palavras árabes aparecem só como detalhe (حكاية, جمال “beleza”, رقص “dança”), sempre em Amiri e `dir="rtl"`.
- **Tom:** caloroso, sensorial, contido. Descreve tecido, movimento e uso — não exagera. “Saia em chiffon com moedas douradas, feita para girar.”
- **Pessoa:** fala com a cliente como **você** (“Você pode trocar em até 7 dias.”), nunca em terceira pessoa burocrática (“O cliente deverá solicitar a troca.”). A marca raramente fala em “eu”/“nós”.
- **Frases curtas e práticas:** “Leve do ensaio ao palco. Lavar à mão.” · “Nova coleção chega sexta.”
- **Sem superlativos vazios:** não “A melhor loja de dança do Brasil”, não “Produto de alta qualidade premium”, não “Mega promoção imperdível relâmpago”.
- **Caixa:** títulos e nomes de coleção em Cinzel, sempre CAIXA ALTA (via `text-transform`). Rótulos/badges em caixa alta com tracking (NOVO · FRETE GRÁTIS). Texto corrido em caixa normal. Nada de CAPS LOCK em frases.
- **Pontuação:** sem “!!!”. Separador preferido: ponto médio “·”.
- **Emoji:** não usar. ✓/✕ só em material interno de diretrizes.
- **Nomes de produto:** tipo + nome próprio de origem árabe/persa — Saia Zahra, Top Amira, Véu Noor.
- **Números:** R$ 289 · 3x de R$ 96,33 sem juros · Modelo veste P · 1,68 m.
- Lema: **“Toda peça conta uma história.”**

## VISUAL FOUNDATIONS
- **Cores:** três cores de marca — Verde Hikaya `#00402C`, Dourado `#C29647`, Creme `#F6EEDC` — mais tinta esverdeada (`#1F2A24`) para texto. Página em creme claro `#FBF7EE`, superfícies em creme `#F6EEDC`. Dourado é destaque raro (CTA gold, regras finas, ícones de roseta), nunca texto corrido sobre creme. Dourado queimado `#7A6A4A` para rótulos/legendas. Vermelho `#B03A2E` só para erro/“não fazer”.
- **Tipografia:** Cinzel 700 (display, caixa alta, tracking 0.02em) para títulos; Alegreya Sans (400/500/700) para tudo o mais, incluindo botões; Amiri só para palavras árabes; IBM Plex Mono só em documentação técnica. Escala: 56 / 48 / 32 / 24 / 20 / 17 (body) / 15 / 14 / 13.
- **Espaçamento:** 4 · 8 · 12 · 16 · 20 · 28 · 40 · 56 · 72 · 96. Layouts generosos, seções com 72px verticais.
- **Formas:** retângulos são **retos** (raio 0) — botões, badges, cards, inputs. A única curva da marca é o **arco da janela mourisca** (topo semicircular, `--radius-arch`), usado em molduras de foto e etiquetas. Círculos só para selos/ícone (roseta em disco verde). Raio de app icon 8/26px.
- **Fundos:** liso verde, liso creme, ou o **padrão geométrico** (estrela de 8 pontas em contorno + pétalas) sempre **um tom acima** do fundo (`#0E5640` sobre verde, `#E7DABD` sobre creme). Sem gradientes. Logo nunca direto sobre o padrão — sempre numa área lisa (placa verde/creme).
- **Imagem:** foto principal de marketplace em branco puro, produto inteiro, ~85% do quadro, sem texto ou selo. Secundária: fundo creme, moldura em janela, detalhes de tecido e bordado. Lifestyle: peça em uso, girando, luz natural **quente**, pele real, nunca filtro frio.
- **Bordas:** hairline 1px `#E6DCC6` para divisórias e contorno de foto; 1.5px no botão secondary e seleções; regra dourada fina sob o logotipo.
- **Sombras:** praticamente inexistentes na UI. `--shadow-hairline` (inset 1px) para foto. Sombras reais (`--shadow-object`) só em mockups de objeto físico (sacola, etiqueta).
- **Cards:** sem sombra e sem raio; foto em hairline + texto abaixo. Badge sobreposto no canto superior esquerdo.
- **Hover:** primary escurece para `#2E5446`; gold para `#B0863B`; secondary/ghost ganham fundo creme. Links: verde → dourado. Nome de produto sublinha com dourado.
- **Press/disabled:** sem shrink; disabled = opacidade 0.45, cursor not-allowed.
- **Motion:** discreto — `cubic-bezier(0.22,0.61,0.36,1)`, 150ms (hover) / 240ms (painéis). Só fades e transições de cor; sem bounces.
- **Transparência/blur:** só no scrim de drawer (tinta 45%). Sem glassmorphism.
- **Layout:** largura máxima ~1200px, header fixo no topo com logo horizontal centralizado, barra de aviso verde acima.

## ICONOGRAPHY
- Conjunto: **Lucide** via CDN (`lucide@0.460.0`), traço **1.5**, cor verde (`--fg-brand`) ou dourado. Ícones comuns: truck (frete), refresh-ccw (troca), ruler (medidas), shirt, hand (lavar à mão), gift, package, heart, shield-check, message-circle, sparkles, star, music, credit-card, shopping-bag, search.
- Sem fonte de ícones própria, sem PNGs de ícone. Elementos de marca (`assets/marks/` — estrela, pétala, janela; roseta em `logo/svg/`) funcionam como “ícones de destaque” em discos verdes, não como UI.
- Sem emoji. Unicode só para ✓/✕ em diretrizes e “·” como separador.

## Ressalvas
- O UI kit da loja **não é recriação de um site existente** (nenhum foi fornecido); é uma composição dos tokens e componentes da marca com a voz documentada. Fotos são placeholders.
- Amiri e IBM Plex Mono vêm do Google Fonts (não foram enviados como arquivos).
