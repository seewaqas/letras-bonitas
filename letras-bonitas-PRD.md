# PRD — Letras Bonitas (Spanish Fancy-Text Generator Website)

**Version:** 1.0 — Project introduction (first draft for Cursor development)
**Date:** 2026-10-13
**Author:** Research compiled for Waqas Azeem
**Status:** This document is the *first introduction* to the project. It contains the maximum detail gathered from a hands-on teardown of the current top 10 Google results for the niche. Frontend is specified in full. Backend decisions are deliberately left open for Cursor — see Section 8.

---

## 1. Project overview

### 1.1 What we are building
A Spanish-language website whose core is a **"letras bonitas" generator**: the user types normal text once, the tool instantly renders it in dozens of decorative Unicode styles, and the user copies any style with one click to paste it into Instagram, WhatsApp, TikTok, Facebook, Free Fire, etc.

### 1.2 Target audience (observed from competitors)
- Spanish-speaking social media users (Spain + Latin America) styling bios, names, posts, stories, WhatsApp statuses.
- Gamers (especially Free Fire / PUBG) creating stylish nicknames.
- Students / casual users making titles, invitations, classroom decorations.
- A secondary "para imprimir / moldes" (printable letter templates) intent exists in this SERP (Pinterest, Canva) — it is a *separate* intent and is **out of scope for v1** (see Section 10).

### 1.3 Niche context (Waqas's own research data)
- Keyword "letras bonitas": ~2.74M monthly searches, weakest competitor DR 0 (from Waqas's SEO niche portfolio, final-20 shortlist, 30-Sep-2026). Treat as his data, not re-verified here.

### 1.4 Goal of this PRD
Give Cursor everything needed to start building: what the 10 market leaders do, how their tools behave under real use, and a complete frontend specification. No assumptions are presented as facts — anything not directly observed is marked **NOT VERIFIED** or listed as an **open question**.

### 1.5 Sites analyzed (all visited and hands-on tested 2026-10-13)
| # | Site | Type |
|---|------|------|
| 1 | letrasbonitas.com.es | Full generator site |
| 2 | letrasbonitas.net | Full generator site |
| 3 | tiposletra.com | Full generator site |
| 4 | letrasbonitos.com | Full generator site |
| 5 | letrasparaigs.com | Full generator site |
| 6 | es.piliapp.com/instagram/fonts/ | **Tool page only** (per brief) |
| 7 | coddy.tech/tools/es/fancy-text-generator/cute-fonts | **Tool page only** (per brief) |
| 8 | sletrasbonitas.com | Full generator site |
| 9 | pinterest.com/aliciascreativa/letras-bonitas/ | **Board page only** (per brief) |
| 10 | canva.com/es_co/plantillas/s/letras-bonitas-para-imprimir/ | **Gallery page only** (per brief) |

---

## 2. How the tools work (verified mechanism — 100% confident)

Every generator tested works the same way at its core:

1. **Unicode character substitution.** Each "style" is a fixed mapping from normal characters (A–Z, a–z, 0–9, some punctuation) to visually similar Unicode code points (mathematical alphanumeric symbols, enclosed characters, fullwidth forms, small caps, etc.). This is not a font — it is plain text, which is why it pastes anywhere.
2. **100% client-side generation.** On all 8 generator pages, typing re-renders every output instantly with no page navigation, no spinner, and no observable request. coddy.tech's own structured data states: *"Everything runs locally in your browser."* No account, no API call, no server round-trip is involved in generating or copying styles.
3. **Copy to clipboard.** Clicking a style copies its transformed text via the browser clipboard (the Clipboard API; letrasbonitas.net was observed using a hidden staging textbox as its copy mechanism). Every site gives immediate visual feedback on copy (details in 3.3).
4. **Input → N outputs → 1 click → paste elsewhere.** That 4-step loop is the entire product. Everything else on these sites is differentiation, SEO content, or monetization.

### 2.1 What this means for the build (confident)
- The generator needs **no backend whatsoever** for its core function: a static character-mapping table in JavaScript is sufficient.
- The only "data" is the style map (character → styled character per style) plus style metadata (name, category, badges).
- Anything requiring a server (accounts, saved styles across devices, analytics dashboards) is optional and was **not observed** on any competitor — all favorites/history features observed are device-local.

---

## 3. Common features — observed on most/all generator sites (written once)

### 3.1 The tool itself
- **Single text input**, prominently placed near the top of the page, below the H1/hero. Always the first interactive element.
- **Live re-rendering:** outputs update on every keystroke. **No "generate" button on any of the 8 sites.**
- **Output list:** a vertical list or grid of styled variants of the input text. Each variant is independently copyable.
- **Clear-text control:** an X / "Borrar texto" / "Limpiar" button that empties the input (observed on 6 of 8).
- **Load-more / pagination:** sites with large style libraries do not render all at once — "Cargar más" / "Ver Más Estilos" / "Load More" button, or numbered pagination (letrasbonitas.net: 17 per page).
- **Copy feedback:** every site confirms a successful copy *on the element itself* — never a page reload. Observed variants: badge appearing on the card ("COPIADO", "✔ Copiado !"), toast popup ("¡Copiado!"), tooltip ("Texto copiado"), button text change ("Copiar" → "Copiado"/"Copiado!"), plain text ("Copied!").
- **Default/placeholder text:** input is pre-filled or placeholder-hinted in friendly Spanish, e.g. "Escribe o pegue su texto aquí :)", "Escribe tu texto aquí...", "✏️ Escribe tu :)". Two sites pre-fill a demo word ("letras bonitas", "Letras Bonitas", "Hello world", "Text example...").
- **No character limit** on 7 of 8 sites (a 445-character test string was fully accepted and rendered on letrasbonitas.com.es, letrasbonitas.net, tiposletra.com). **One site enforces a limit:** letrasbonitos.com truncates at **180 characters** with a live counter — the only verified limit in the set.
- **Free, no login, no paywall** on all 8. Several sites state this explicitly ("sin registro", "completamente gratis", "completamente basado en el navegador").

### 3.2 Style inventory (what "styles" means across the market)
Across the 8 generators, the style universe consists of:
- **Unicode alphabet styles** (the bulk): Fraktur/blackletter, script/cursive, bold, italic, bold-italic, monospace, double-struck, sans-serif variants, serif italic, fullwidth, small caps, circled, squared, subscript, superscript, "tiny"/small, upside-down, mirrored, reversed.
- **Effect styles** (combining marks applied over the text): strikethrough/tachado, underline/subrayado, double underline, overline/línea superior, diagonal strikethrough, wavy, dots above/below, "Zalgo"/glitch.
- **Decorated/frame styles** (symbols wrapped around the text): hearts, flowers, stars, sparkles, wings, moon, aesthetic frames, brackets, kaomoji faces.
- **Fun transforms:** Leet (1337), alternating "burlón" (mOcKiNg) case, reversed-word order, "invisible" text.
- **Verified style counts:** 28 (piliapp) · 40 (coddy) · 60 initial / 2000+ claimed (letrasbonitas.com.es) · 17 per page / 100+ (letrasbonitas.net) · 352 in 14 sections (tiposletra.com) · 100 initial / ~300–409 total (letrasbonitos.com) · 88 initial / 1000+ claimed (letrasparaigs.com) · 20 initial + load-more (sletrasbonitas.com).

### 3.3 Emoji handling (tested with "Hola 😎 Mundo" / "🎉")
- Best: emoji passes through **unchanged in every style**, including reversed/mirrored (coddy.tech, sletrasbonitas.com, tiposletra.com).
- Broken on some: reversed/flip styles corrupt emoji into "��"/"�" (letrasbonitas.net's FLIP and mirror styles — surrogate-pair bug; letrasparaigs.com and piliapp in combining-mark/reversed styles).
- **Build implication:** the reversal logic must handle surrogate pairs / grapheme clusters correctly — this is a known, observable competitor bug to avoid.

### 3.4 Differentiation layer (each site adds some of these)
- Style **names** shown on cards (5 of 8 label styles; 3 show only the styled text or numbered cards).
- **Category filters** (chips/buttons): Todos, Instagram, Juegos, Free Fire, Cursiva, Gótica, Aesthetic, Símbolos, Emojis, etc.
- **Style search box** ("Buscar estilos") — only 1 of 8.
- **Favorites** (heart per style, saved on-device — letrasbonitas.com.es footer literally states "Favoritos Guardados Localmente En Tu Dispositivo").
- **Badges**: "🔥 En Tendencia", "NUEVO", "TENDENCIA".
- **Font-size slider** for preview ("Ajustar tamaño de fuente") — only 1 of 8.
- **Dark-mode toggle** — 3 of 8.
- **Share buttons** (WhatsApp, Facebook, X, Telegram, email) — 2 of 8.

### 3.5 SEO content pattern (below the tool — all full sites do this)
Long-form Spanish content under the generator, typically: intro paragraph → "Cómo usar" (3–4 steps) → "Dónde usar" (per platform: Instagram, WhatsApp, TikTok, Facebook, Free Fire) → style-type showcase → alphabet table → tips → FAQ (accordion, 4–6 questions) → conclusion. H1s are keyword-led, e.g. "Letras Bonitas para Copiar y Pegar – Conversor de Fuentes Aesthetic".

### 3.6 Site chrome (common)
- Header: logo/wordmark + nav to sibling tool pages + (sometimes) dark-mode toggle + mobile hamburger.
- Sibling tool pages cross-linked everywhere (each site runs a small network: cursivas, símbolos, aesthetic, Free Fire names, invisible text, etc.).
- Footer: tool links, legal pages (**Política de Privacidad, Política de Cookies, Aviso Legal, Acerca de/Nosotros, Contacto**), copyright with year.
- Monetization: **Google AdSense** present on 7 of 8 (slots: above input, in-content, bottom anchor; density low–moderate). Consent: Google Funding Choices script on 3 (no visible banner during testing). Analytics: gtag on several; Microsoft Clarity on 1.

---
## 4. Per-site unique features (only what is individual to that site)

### 4.1 letrasbonitas.com.es — the most feature-rich
- **Font-size slider** ("Ajustar tamaño de fuente", default 20) — the only slider in the set.
- **"Mezclar estilos" toggle** — mixes styles together (only mix feature observed).
- **31 category filter chips** (horizontal scroll): Todos, Instagram, Juegos, Free Fire, Cursiva, Facebook, Decoradas, Discord, Twitter, TikTok, WhatsApp, Negrita, Chidas, Glitch, Góticas, Pequeña, Graffiti, Squiggle, Caja, Carpintero, Burbuja, Cholas, Raras, Feas, Tristes, Simbólicas, Decoradas con Estrellas, Decoradas con Corazones, Emoticonos, Personalizadas, Alfabeto, Mezcla.
- **"🔥 En Tendencia" labels** on hot styles; "Load More" advertising **2000+ styles** (largest claim).
- Footer cross-links **sister sites** (letrasbonitas.net, letrasbonitas.org, letrasbonitas.com.br) and **5 languages** (EN/PT/RU/ZH/JA) — the only multi-language operator in the set.
- "¿Dónde se pueden utilizar?" content with **tabs** (Redes sociales, Juegos, Arte, Educación, Mensajería, Anuncios).
- Tech: WordPress + Kadence + Rank Math + Perfmatters; Google Ad Manager incl. instream video ad slot; Microsoft Clarity; Ezoic verification meta.

### 4.2 letrasbonitas.net — minimal + history
- **"🕒 Recientes"** — recent-inputs history (only history feature observed).
- **Dark-mode toggle** ("Cambiar modo oscuro").
- **"COMPARTIR ESTE:"** share links above the tool.
- LuniTools-style **English/Portuguese style names** (OLD ENGLISH, MEDIEVAL, LUNI TOOLS FLIP, ESPELHO REVERSO…) — suggests a shared/licensed style dataset.
- Pagination: **17 styles per page** with "Next page".
- Copy mechanism observed in detail: click fills a **hidden staging textbox**, then shows "✔ Copiado !" badge.
- Footer typo "Privacy Poicy" and a Thai friendly link — signs of a multi-language template network.
- Tech: page-source inspection **failed** during research (NOT VERIFIED — stack unknown); AdSense ads observed.

### 4.3 tiposletra.com — the static outlier, biggest verified library
- **Custom static HTML** (index.html + style.css + images/) — the *only* non-WordPress, non-framework site; vanilla inline JS (`copiarTexto`, `toggleFav`, `abrirMenuLateral`, `limpiarCampo`); Font Awesome 6.4.0 via cdnjs.
- **352 variant cards verified** across 14 populated category sections (TIPOS DE LETRAS 30, LETRAS BONITAS 30, ESTILOS DE LETRAS 30, LETRAS DIFERENTES 30, CONVERSOR DE LETRAS 22, LETRAS FANCY 24, LETRAS AESTHETIC 30, LETRAS CURSIVAS 15, LETRAS NEGRITAS 19, LETRAS ELEGANTES 27, LETRAS RARAS 21, LETRAS CON SÍMBOLOS 27, LETRAS DECORADAS 22, LETRAS CON CORAZONES 25). Cards are **numbered, not named**.
- **12 empty H2 sections** (Estrellas, Gamer, Free Fire, PUBG, Instagram, TikTok, Facebook, WhatsApp, Lindas, Nick, Burbuja, Pequeñas) — headings with no cards; likely reserved for future content or a rendering quirk.
- **Scrolling style ticker** preview under the header; **share bar** (Facebook, X, Correo, WhatsApp, Telegram).
- **Sticky input bar** that stays visible while scrolling the long card list.
- Side menu with **26 tool pages**, incl. "Lista de Nombres" (name list) — the widest sibling-tool network observed.
- Schema.org JSON-LD: WebSite, SoftwareApplication, Organization.
- Emoji handling: **perfect** — 🎉 passed through unchanged in all 352 styles including mirrored.

### 4.4 letrasbonitos.com — the most "productized" UX
- **Live character counter** ("N caracteres") + **style counter** ("N de M estilos") — the only counters in the set.
- **180-character limit — VERIFIED** (a 445-char paste was truncated at 180). The only enforced limit among all 10.
- **"Buscar estilos" search box** — the only style search in the set.
- **Category buttons with live counts**: Todos 409, Favoritos 0, Juegos 42, Estéticas 56, Negrita 14, Cursiva 23, Gótica 13, Pequeñas 10, Símbolos 176, Emojis 51, Personalizar 12, Otras 24.
- **NUEVO / TENDENCIA badges** on style cards; per-card **"Copiar {style name}"** buttons (most explicit copy affordance observed).
- **"Personalizar" category** (12 styles) and **"Emojis" category** (51 styles).
- **Alphabet table**: A–Z rendered in 5 styles (NORMAL/CURSIVA/GÓTICA/BURBUJA/CUADRADA).
- 6-question FAQ accordion; ~9 SEO content sections (incl. "¿Por Qué Nuestro Conversor es Diferente?" and "Compatibilidad con Navegadores y Dispositivos").
- AdSense scripts present but **no ad rendered** during the visit (slot unfilled).
- Tech: WordPress + Kadence + Rank Math (FAQPage JSON-LD) + LiteSpeed Cache.

### 4.5 letrasparaigs.com — ad-heavy, decoration-focused
- **Ad slot directly above the input** (highest ad prominence in the set).
- **88 variants** shown initially + "CARGAR MÁS LETRAS" (1000+ styles claimed).
- **Emoji-decorated variant styles** (🦋 ✿ 💗 🌸 🐠 frames) and a **Wingdings** style — the most "decorated" output set.
- Variants are **not labeled** (plain "click to copy" boxes); copy feedback is the word **"Copied!"** (English) at the top of the tool area.
- Header has **dark-mode switch + search toggle**; footer has **social share links**.
- Category pages: Fuentes Aesthetic, Fuente Gothic, Letras cursivas, Letras Tachadas, Letras Para Títulos; plus bio/Free-Fire-name content links.
- Tech: WordPress + Kadence + Rank Math + LiteSpeed; AdSense.

### 4.6 es.piliapp.com/instagram/fonts/ (page only)
- **28 styles**, unlabeled buttons, "Texto copiado" tooltip feedback.
- **7 sibling tools** on the same page: Emoji, Símbolo, Tachado, tinta invisible, Zalgo, Conversor de letras, Espacio en blanco (+ site-wide: Reloj & Temporizador, Ruleta, Juegos).
- **Instagram-specific guidance** in the intro: warns some styles are hard to read / don't render everywhere; advises testing in bio and name.
- **Language selector** (globe); Instagram **non-affiliation disclaimer** in footer ("© 2026 pili.app").
- Single third-party ad iframe near footer — lowest ad density observed.
- Tech: **NOT VERIFIED** (page-source fetch failed twice); no WordPress signals in rendered DOM.

### 4.7 coddy.tech/tools/es/fancy-text-generator/cute-fonts (page only)
- **Next.js (React)** — the only modern-framework build in the set (`__NEXT_DATA__`, `_next` chunks on static.coddy.tech).
- **40 style cards, ALL labeled with Spanish names** — the *only* site that names every style (Corazones, Flores, Destellos, Marco aesthetic, Cursiva manuscrita, Versalitas, Circular, Negrita, … Zalgo, Mixto, Estrellas, Alas, Luna).
- **7 pinned decorative frame cards** ("ESTILOS BONITOS") using text symbols (not color emoji).
- **"Limpiar"** clear button; copy feedback = button text → **"Copiado"**.
- FAQ gives **bio-length advice** (decorative frames consume characters; recommends short frames for 150-char Instagram bios).
- **15 "Más estilos" platform/style pages**: Todos, Cursiva, Discord, Pequeño, Diminuto, Al revés, Raro, Gótica, Inglés antiguo, Bonitas, X/Twitter, Itálica, Burbuja, Instagram, Estética.
- JSON-LD explicitly states **"Everything runs locally in your browser"** — the strongest client-side confirmation in the set.
- Most robust emoji handling (😎 passed through in *all* tested styles).
- Third-party: AdSense, GTM, Facebook pixel, TikTok pixel, Reddit ads, AppsFlyer, **Google Funding Choices** consent.
- No font-size slider, no char counter, no download-as-image.

### 4.8 sletrasbonitas.com — content-heaviest WordPress
- 20 output cards initially, each with its own **"Copiar" button** (→ "Copiado!"), then "cargar más". Variants unlabeled.
- **Grow by Mediavine bookmark widget** (faves.grow.me) — the only "save page" feature observed.
- **JourneyMV ad script** in source but **no visible ads rendered**; UID2 identity script present.
- Longest SEO article: **~13 H2 sections** (usage per platform: Instagram, WhatsApp, Facebook, Free Fire; style guides: graffiti, cursivas, góticas, aesthetic, negrita, **cholas**; alphabet tables; tips; conclusion) + 4-item FAQ accordions.
- Shows **rating 4.8 (120 ratings)** — the only rating display observed.
- Internal category pages: Letra cursiva, Tipos de Letras, Fuentes de letras, letras aesthetic, Letras Grafiti, Letras Cholas.
- Tech: WordPress + Kadence + Rank Math + gtm4wp; wp-content image (`letras-bonitas.webp`).

### 4.9 Pinterest board (page only) — different intent
- Board "Las mejores 170 ideas de Letras Bonitas": **170 pins** of *moldes de letras* (printable letter templates/molds), *modelos de letras*, abecedario molds.
- **No generator, no tool** — pure visual inspiration / printable-template intent.
- Takeaway for us: "letras bonitas para imprimir / moldes" is a large adjacent search intent. It does not compete with a generator on UX, but it tells us the audience also wants printables. (Out of v1 scope.)

### 4.10 Canva templates page (page only) — different intent
- Gallery page for "letras bonitas para imprimir": **12,775+ templates** (banderines/banners, moldes, lettering worksheets, classroom decor), filterable, each opening in Canva's editor; free + Pro templates; download as PDF/PNG for printing.
- **No generator** — a design-tool + template-gallery intent.
- Takeaway for us: validates the printable intent's scale; we will not build an editor to compete with Canva. (Out of v1 scope.)

---

## 5. Complete user interaction — what was tested and how it feels

### 5.1 Core flow (tested on all 8 generator pages with "Hola Mundo 123")
1. **Land** on page → H1 + short hero + input visible without scrolling (all 8).
2. **Type or paste** text → every styled variant re-renders **instantly, per keystroke** (all 8; no button anywhere).
3. **Scan** the variant list → on 5 sites each card shows a **style name**; on 3 sites the user judges by the styled text alone.
4. **(Optional) filter**: tap a category chip (letrasbonitas.com.es, letrasbonitos.com) or use style search (letrasbonitos.com only) or load more (4 sites).
5. **Copy**: click/tap the card, its copy button, or its copy icon → transformed text is on the clipboard. **Copy worked on every tested card (2–3 per site, 20+ total).**
6. **Feedback** appears within ~1 second, always on/near the clicked element (badge, toast, tooltip, or button-text change — see 3.1).
7. **Paste** into Instagram/WhatsApp/etc. (outside our site; all sites explain this in their how-to).

### 5.2 Comfort & convenience notes (observed, not assumed)
- **Zero friction to first value:** no signup, no onboarding, no tutorial modal, no paywall on any site. Fast loads (2–7s). This is the baseline expectation — any login or gate would be a competitive disadvantage.
- **One input, many outputs** is universal — users never re-type per style. Any design requiring per-style input would be worse than every competitor.
- **Copy feedback is load-bearing:** because copying is invisible, every site confirms it immediately and locally. Missing/ambiguous feedback would be the single biggest UX failure.
- **Live update removes a step:** the absence of a "generate" button on all 8 sites means users expect keystroke-level reactivity; any perceptible lag or button would feel broken by comparison.
- **Mobile is claimed, not verified:** letrasbonitas.com.es claims "Interfaz optimizada para móviles"; all themes have responsive breakpoints, but the exact 390px layout was **NOT VERIFIED** in this research (see Section 9).
- **Failure modes observed in competitors (avoid these):**
  - Emoji corruption in reversed/flip styles (letrasbonitas.net: "��"; letrasparaigs.com, piliapp: "�") — surrogate-pair bug in naive string reversal.
  - Unfilled/placeholder ad slots (letrasbonitas.com.es video slot showed "Unable to play media"; letrasbonitos.com empty slot) — ad layout shift risk.
  - Empty content sections (tiposletra.com's 12 vacant H2s) — looks unfinished.
  - English feedback on a Spanish page ("Copied!" on letrasparaigs.com) — language inconsistency.
  - Typo in footer ("Privacy Poicy" on letrasbonitas.net) — trust signal damage.

---
## 6. Frontend specification (fully demonstrated)

### 6.1 Page inventory for v1 (derived from competitor sitemaps)
| Page | Purpose | Competitor precedent |
|------|---------|----------------------|
| `/` (Home) | The generator + full SEO content | All 8 |
| `/letras-cursivas/`, `/letras-goticas/`, `/letras-aesthetic/`, … (style-category pages) | Same generator pre-filtered to one category + category-specific SEO text | tiposletra.com (26 pages), coddy (15), letrasbonitos.com nav |
| `/letras-para-instagram/`, `/letras-para-free-fire/`, `/letras-para-whatsapp/`, … (platform pages) | Same generator + platform-specific usage guide | letrasbonitos.com, letrasparaigs.com |
| `/simbolos/` (symbols page) | Symbol/kaomoji picker (copy-paste) | letrasparaigs.com, piliapp |
| Legal: `/privacidad/`, `/cookies/`, `/aviso-legal/`, `/contacto/`, `/acerca-de/` | Required footer pages | All full sites |
| *Count and slugs are Cursor's decision (Section 8).* |

### 6.2 Homepage wireframe (the layout every leader converges on)
```
┌────────────────────────────────────────────────────────┐
│ TOP BAR  [★ Logo "Letras Bonitas"]  [nav: Herramientas] │
│          [🌙 dark toggle] [☰ mobile]                   │
├────────────────────────────────────────────────────────┤
│ HERO                                                   │
│  H1: Letras Bonitas para Copiar y Pegar                │
│  Sub: Generador de letras bonitas para Insta, FB y más │
│  Tagline: Explora fuentes ilimitadas gratis            │
├────────────────────────────────────────────────────────┤
│ TOOL CARD                                              │
│  ┌──────────────────────────────────────────────────┐  │
│  │ [Escribe tu texto aquí...                  ] [✕] │  │
│  └──────────────────────────────────────────────────┘  │
│  (optional: "N caracteres" counter)                    │
│  [Todos] [Instagram] [Juegos] [Cursiva] [Gótica]…      │ ← category chips
│  (optional: [🔍 Buscar estilos…])                       │
│  ┌──────────────────────────────────────────────────┐  │
│  │ 𝓗𝓸𝓵𝓪 𝓜𝓾𝓷𝓭𝓸 𝟙𝟚𝟛                                  │  │
│  │  Cursiva manuscrita        [Copiar] [♡]            │  │
│  ├──────────────────────────────────────────────────┤  │
│  │ 𝐇𝐨𝐥𝐚 𝐌𝐮𝐧𝐝𝐨 𝟏𝟐𝟑                                    │  │
│  │  Negrita                   [Copiar] [♡]  [NUEVO]  │  │
│  └──────────────────────────────────────────────────┘  │
│  … N cards …                                           │
│  [ Cargar más estilos ]                                │
├────────────────────────────────────────────────────────┤
│ CONTENT (SEO)                                          │
│  ¿Cómo usar el conversor?  (1 Escribe · 2 Elige ·      │
│                             3 Copia · 4 Pega)          │
│  ¿Dónde usarlas? [Redes sociales|Juegos|Mensajería…]   │
│  Tipos de letras bonitas (category showcase)           │
│  Abecedario A–Z en 4–5 estilos (table)                │
│  Preguntas frecuentes (accordion)                      │
├────────────────────────────────────────────────────────┤
│ FOOTER                                                 │
│  Herramientas: [Cursivas] [Góticas] [Símbolos]…         │
│  Legal: Privacidad · Cookies · Aviso Legal · Contacto  │
│  © 2026 Letras Bonitas                                 │
└────────────────────────────────────────────────────────┘
```

### 6.3 Component specifications

**C1 — Text input**
- Single-line on desktop; observed as textarea on tiposletra.com (sticky). Spec: `<input>` or `<textarea rows=1>`, full-width inside tool card, autofocus NOT observed (do not autofocus — Cursor decision).
- Placeholder (Spanish, friendly): "Escribe tu texto aquí..." / "Escribe o pega tu texto aquí :)".
- Clear button (✕ / "Borrar texto" / "Limpiar") appears when input is non-empty; clears input and resets outputs.
- Optional live character counter ("N caracteres") — only letrasbonitos.com has it; include only if a limit is enforced (see C1-open-question in Section 8).
- Behavior: on every `input` event, re-render all visible style cards. No debounce was perceptible on competitors; no submit button.

**C2 — Style card (the core component; repeat N times)**
- Contents: (a) styled output text (large, the hero of the card), (b) style name label (Spanish; 5 of 8 sites show it — recommended, it aids scanning and SEO), (c) copy control — either the whole card is clickable OR a dedicated "Copiar"/"Copiar {nombre}" button OR a copy icon; (d) optional favorite heart (♡/♥); (e) optional badge (NUEVO / TENDENCIA / 🔥 En Tendencia).
- **Copy interaction (mandatory):** click → write transformed string to clipboard → immediate local feedback. Implement ALL of: Clipboard API with fallback for older browsers (letrasbonitas.net's hidden-textbox technique is the observed fallback pattern). Feedback must be on the card itself: button text → "Copiado"/"¡Copiado!", or badge/toast. No page-level alerts.
- **States:** default → hover (desktop) → copied (transient, ~1.5–2s) → back to default. Favorite: off/on (persisted per 6.4).
- Accessibility: the copy control must be a real `<button>` with an accessible label including the style name (e.g. `aria-label="Copiar estilo Negrita"`).

**C3 — Category filter chips**
- Horizontal scrollable row of pill buttons: Todos + categories (Instagram, Juegos, Free Fire, Cursiva, Gótica, Aesthetic, Negrita, Símbolos, Emojis, …). Active chip highlighted. Filters the card grid client-side; counts per category optional (letrasbonitos.com shows them: "Juegos 42").

**C4 — Style search box** (optional, 1 of 8 has it)
- Text input "Buscar estilos…" filtering cards by style name as the user types; show empty-state message when nothing matches.

**C5 — Load more / pagination**
- Button "Cargar más estilos" / "Ver Más Estilos" appending the next batch; OR numbered pagination (17/page on letrasbonitas.net). Initial batch observed: 20–100 cards.

**C6 — Favorites**
- Heart toggle per card; a "Favoritos" view/filter showing saved styles; persisted on-device (localStorage — explicitly claimed by letrasbonitas.com.es). No account.

**C7 — Copy-feedback toast** (if not using per-card feedback)
- Small transient popup near the clicked card: "¡Copiado!" (tiposletra.com, letrasbonitos.com) — auto-dismiss ~1.5s.

**C8 — Font-size slider** (optional, 1 of 8)
- "Ajustar tamaño de fuente" range slider scaling preview text size. Nice-to-have; not market-standard.

**C9 — Dark-mode toggle** (3 of 8)
- 🌙/☀️ toggle in header, persisted (localStorage), respects `prefers-color-scheme` on first visit (Cursor decision).

**C10 — FAQ accordion**
- 4–6 questions, expand/collapse, FAQPage JSON-LD schema (observed on letrasbonitos.com via Rank Math).

**C11 — Alphabet table**
- A–Z rendered in 4–5 signature styles (observed on letrasbonitos.com, sletrasbonitas.com). Static SEO content, copyable cells optional.

**C12 — Header / nav / footer**
- Header: logo/wordmark (styled text, e.g. tiposletra.com renders its logo *in* a fancy style), nav links to sibling tools, dark toggle, hamburger on mobile.
- Footer: two link groups — (1) Herramientas (sibling generators), (2) Legal (Privacidad, Cookies, Aviso Legal, Acerca de, Contacto) — plus © year line. Social share links optional.

### 6.4 UI string table (Spanish — use these exact wordings; they are the market's own)
| Element | String |
|---|---|
| H1 (home) | Letras Bonitas para Copiar y Pegar |
| Hero sub | Generador de letras bonitas para Insta, FB y más |
| Input placeholder | Escribe tu texto aquí... |
| Clear | ✕ / Borrar texto / Limpiar |
| Copy button | Copiar |
| Copy feedback | ¡Copiado! |
| Load more | Cargar más estilos / Ver Más Estilos |
| Category "all" | Todos |
| Favorites | Favoritos |
| Style search | Buscar estilos… |
| How-to title | ¿Cómo usar el conversor? |
| Steps | 1. Escribe tu texto · 2. Elige el estilo · 3. Copia · 4. Pega donde quieras |
| FAQ title | Preguntas frecuentes |

### 6.5 Interaction flows (step-by-step, for implementation)
- **F1 — Generate & copy:** focus input → type (outputs live-update per keystroke) → click card/button → clipboard write → "¡Copiado!" feedback → (user pastes externally).
- **F2 — Filter:** tap chip → grid re-renders to category → copy as F1. "Todos" resets.
- **F3 — Search:** type in "Buscar estilos" → cards filter by name → empty state if none ("No se encontraron estilos").
- **F4 — Favorite:** tap ♡ → fills ♥, persists to localStorage → "Favoritos" chip/filter shows saved → unfavorite removes.
- **F5 — Load more:** tap button → next batch appends (or next page) → button hides/disabled at end.
- **F6 — Clear:** tap ✕ → input emptied → outputs reset to default/placeholder state.

### 6.6 States & edge cases
- Empty input: show default demo text styles (competitors pre-fill e.g. "letras bonitas") OR placeholder cards — Cursor decision; either is market-consistent.
- Unsupported characters: pass through unchanged (observed everywhere for emoji in letter styles).
- Reversed/mirrored styles: **must handle emoji / surrogate pairs correctly** (competitor bug documented in 3.3/5.2).
- Copy failure (permissions denied): show fallback message "Copia manualmente: selecciona el texto" — graceful degradation (no competitor was observed handling this; it is a robustness addition, marked as our proposal, not market-observed).
- No-JS: generator cannot work; show `<noscript>` message + static style examples (our proposal; competitors' behavior NOT VERIFIED).

### 6.7 Responsive & accessibility notes
- Mobile-first: input and cards full-width, chips horizontally scrollable, header collapses to hamburger (all observed).
- **NOT VERIFIED:** exact 390px rendering of any competitor (research limitation — must be tested in build QA).
- Touch targets: copy buttons must be ≥44px (our proposal, standard practice).
- `prefers-reduced-motion` respected for toasts/badges (our proposal).

### 6.8 SEO content specification (what to write under the tool)
Follow the proven structure (all full sites): intro paragraph (what letras bonitas are + Unicode one-liner) → "¿Cómo usar el conversor?" (3–4 steps) → "¿Dónde usarlas?" (Instagram / WhatsApp / TikTok / Facebook / Free Fire subsections) → style-type showcase → alphabet table → tips ("Consejos para elegir el mejor estilo") → FAQ accordion (4–6 Qs: ¿cómo copiar? ¿funcionan en todas las redes? ¿necesito instalar algo? ¿puedo usarlas en nombres de usuario?) → conclusion. FAQPage JSON-LD. Internal links to every sibling tool/category page.

---
## 7. Backend & technical — only what we are 100% confident about

**F1. Generation is fully client-side.** Verified on all 8 generator pages: keystroke-instant re-rendering, no navigation, no spinner, no observable request; coddy.tech's JSON-LD states "Everything runs locally in your browser." **No backend is required for the core tool.**

**F2. No accounts, no server-side user data.** All 8 sites are free with no login/paywall. Favorites/history features are device-local (letrasbonitas.com.es: "Favoritos Guardados Localmente En Tu Dispositivo" = localStorage).

**F3. The "database" is a static character map.** Each style = a mapping table (normal char → styled char) + metadata (name, category). This can ship as a JSON/JS file with the frontend. No runtime database is needed for v1.

**F4. Competitor stacks actually observed (page-source evidence):**
- WordPress + Kadence theme + Rank Math SEO: letrasbonitas.com.es (+Perfmatters), letrasparaigs.com (+LiteSpeed Cache), sletrasbonitas.com (+GTM4WP), letrasbonitos.com (+LiteSpeed Cache). **4 of 8.**
- Custom static HTML + vanilla JS: tiposletra.com (index.html, style.css, inline JS, Font Awesome via cdnjs). **1 of 8.**
- Next.js (React): coddy.tech. **1 of 8.**
- Unknown: letrasbonitas.net (source fetch failed), es.piliapp.com (source fetch failed). **2 of 8 — NOT VERIFIED, do not assume.**
- No `<meta name="generator">` tag was found on any site that was successfully inspected.

**F5. Third parties observed (presence only — IDs never recorded):** Google AdSense (7/8), Google Ad Manager (1/8), Google Funding Choices consent messaging (3/8), Google Tag Manager / gtag (several), Microsoft Clarity (1/8), Facebook/TikTok/Reddit pixels + AppsFlyer (coddy only), JourneyMV + UID2 + Grow/Mediavine (sletrasbonitas.com), Google Fonts (several), Gravatar (2/8).

**F6. What was NOT verified (do not present as fact):** exact mobile 390px layouts; DevTools network-tab captures; server configs; traffic numbers; revenue; the "2000+" and "1000+" style claims (marketing claims — verified rendered counts are in 3.2); letrasbonitas.net's and piliapp's stacks.

---

## 8. Open questions for Cursor (decide freely — these are genuinely undecided)

**Stack & hosting**
- Q1. WordPress (Kadence + Rank Math, like 4 of 8 competitors) vs. static HTML/JS (like tiposletra.com — fastest, cheapest) vs. Next.js (like coddy — best DX for a React dev)? Lay out trade-offs for SEO, speed, and maintenance; recommend one.
- Q2. Hosting choice and deployment pipeline (static host vs. shared WP hosting vs. Vercel-style)? Propose with cost estimate.
- Q3. If WordPress: which caching/SEO plugin stack? If static: build tooling (or hand-written)?

**Style data**
- Q4. How many styles at launch? (Observed market range: 28–409 verified; 1000–2000+ claimed.) Propose a launch number and a data format (single JSON? per-category files?).
- Q5. Style taxonomy: which categories and category slugs for v1? (Candidates from competitors: Instagram, Juegos, Free Fire, Cursiva, Gótica, Aesthetic, Negrita, Símbolos, Emojis, Títulos…)
- Q6. Style-name language: Spanish names (letrasbonitos.com, coddy) vs. English names (letrasbonitas.net's LuniTools set)? Or both?
- Q7. Where to source the character-mapping tables? (Options: hand-built, open datasets, port from observed styles — note: do not copy any site's proprietary extras verbatim; Unicode mappings themselves are facts, not creative expression, but be careful.)

**Features**
- Q8. Character limit: none (7 of 8) vs. 180 with live counter (letrasbonitos.com)? Recommend.
- Q9. Favorites: localStorage (observed) vs. none for v1?
- Q10. Dark mode: include at launch (3 of 8 have it)?
- Q11. Font-size slider (1 of 8), style search (1 of 8), "mix styles" toggle (1 of 8): which, if any, for v1 vs. later?
- Q12. Copy fallback strategy for browsers blocking the Clipboard API (observed pattern: hidden staging textbox)?
- Q13. Empty-input state: pre-filled demo text vs. placeholder cards?
- Q14. Sibling tools for v1: symbols page? invisible-text? Which 2–3 maximize the network effect competitors rely on?

**SEO & content**
- Q15. How many pages at launch (home + how many category/platform pages)? URL slug convention (Spanish slugs? English slugs like Waqas's Arabic site decision)?
- Q16. Schema: which JSON-LD types (FAQPage observed; SoftwareApplication observed on tiposletra.com)?
- Q17. Sitemap, robots, hreflang needs for es-ES vs. es-MX vs. pt (competitors run multilingual/sister sites)?

**Monetization & compliance**
- Q18. Ad placement plan for v1 (above-input slot converts best per letrasparaigs.com but risks UX; in-content/bottom-anchor is the common pattern)? AdSense from day one or after traffic?
- Q19. Consent management: Google Funding Choices (observed on 3/8) vs. lighter banner vs. none until ads go live?
- Q20. Analytics: gtag only, or + Clarity (observed on the richest-featured competitor)?

**Quality gates before "done"**
- Q21. Acceptance checklist proposal: copy works on Chrome/Safari/Firefox mobile+desktop; emoji survives all styles incl. reversed; 390px layout verified (the one thing this research could NOT verify); Lighthouse targets; no-JS fallback present.

---

## 9. Verification log (how each claim was established)
- **Hands-on live testing** (2026-10-13, real Chromium): typed "Hola Mundo 123" + emoji into all 8 generators; clicked 2–3 copy controls per site (20+ total); counted rendered variants; tested a 445-char input for limits (only letrasbonitos.com truncated, at 180).
- **Page-source inspection:** generator meta tags, wp-content paths, theme/plugin slugs, script domains (IDs never recorded).
- **NOT VERIFIED (research limits, must be covered in build QA):** 390px mobile rendering; DevTools network-tab capture; letrasbonitas.net & piliapp stacks; competitors' traffic/revenue; "2000+"/"1000+" marketing claims.
- **Page-only analyses** (per brief — whole site NOT analyzed): Pinterest board, Canva gallery, piliapp tool page, coddy tool page.

## 10. Non-goals for v1 (explicitly out of scope)
- Printable letter templates / moldes (Pinterest + Canva intent) — separate product, separate UX.
- User accounts, cross-device sync, backend APIs for generation.
- Download-as-image, image export (observed on **zero** competitors).
- AI features, login walls, paywalls (observed on **zero** competitors).

## 11. Open questions for Waqas (not for Cursor)
- Domain + hosting: do you already have them for this project (as with the Arabic age site)?
- Monetization priority: AdSense from day one, or traffic-first?
- v1 ambition: single generator page + legal pages, or home + category/platform pages from the start?
- The 10-site set is complete; flag any additional competitor you want torn down the same way.

---

*End of PRD v1.0 — introduction draft. Next step: Waqas reviews, then Cursor works through Section 8 and proposes the stack before writing code.*
