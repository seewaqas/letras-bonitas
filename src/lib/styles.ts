import {
  alternateCase,
  applyFrame,
  applyMap,
  applyMarks,
  blankMap,
  fillAlphabet,
  fillDigits,
  mirrorCase,
  reverseGraphemes,
  spaceOut,
  toLeet,
} from "./transform.ts";

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";

export type StyleBadge = "nuevo" | "tendencia";

export type StyleDefinition = {
  id: string;
  name: string;
  categories: readonly string[];
  badge?: StyleBadge;
  apply: (input: string) => string;
};

export const CATEGORIES: readonly { id: string; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "favoritos", label: "Favoritos" },
  { id: "cursiva", label: "Cursiva" },
  { id: "gotica", label: "Gótica" },
  { id: "negrita", label: "Negrita" },
  { id: "chiquitas", label: "Chiquitas" },
  { id: "burbuja", label: "Burbuja" },
  { id: "aesthetic", label: "Aesthetic" },
  { id: "decoradas", label: "Decoradas" },
  { id: "corazones", label: "Corazones" },
  { id: "emojis", label: "Emojis" },
  { id: "simbolos", label: "Símbolos" },
  { id: "juegos", label: "Juegos" },
  { id: "graffiti", label: "Graffiti" },
  { id: "efectos", label: "Efectos" },
];

function withDigits(map: Record<string, string>, start: number): Record<string, string> {
  fillDigits(start, map);
  return map;
}

function joinMaps(...maps: Record<string, string>[]): Record<string, string> {
  const map = blankMap();
  for (const part of maps) {
    for (const [key, value] of Object.entries(part)) map[key] = value;
  }
  return map;
}

const scriptUpperHoles: Record<string, string> = {
  B: "\u212C",
  E: "\u2130",
  F: "\u2131",
  H: "\u210B",
  I: "\u2110",
  L: "\u2112",
  M: "\u2133",
  R: "\u211B",
};

const scriptLowerHoles: Record<string, string> = {
  e: "\u212F",
  g: "\u210A",
  o: "\u2134",
};

const frakturUpperHoles: Record<string, string> = {
  C: "\u212D",
  H: "\u210C",
  I: "\u2111",
  R: "\u211C",
  Z: "\u2128",
};

const doubleUpperHoles: Record<string, string> = {
  C: "\u2102",
  H: "\u210D",
  N: "\u2115",
  P: "\u2119",
  Q: "\u211A",
  R: "\u211D",
  Z: "\u2124",
};

const circledDigits: Record<string, string> = {
  "0": "\u24EA",
  "1": "\u2460",
  "2": "\u2461",
  "3": "\u2462",
  "4": "\u2463",
  "5": "\u2464",
  "6": "\u2465",
  "7": "\u2466",
  "8": "\u2467",
  "9": "\u2468",
};

const smallCaps = blankMap();
const SMALL_PAIRS: readonly [string, string][] = [
  ["a", "ᴀ"],
  ["b", "ʙ"],
  ["c", "ᴄ"],
  ["d", "ᴅ"],
  ["e", "ᴇ"],
  ["f", "ꜰ"],
  ["g", "ɢ"],
  ["h", "ʜ"],
  ["i", "ɪ"],
  ["j", "ᴊ"],
  ["k", "ᴋ"],
  ["l", "ʟ"],
  ["m", "ᴍ"],
  ["n", "ɴ"],
  ["o", "ᴏ"],
  ["p", "ᴘ"],
  ["q", "ǫ"],
  ["r", "ʀ"],
  ["s", "ꜱ"],
  ["t", "ᴛ"],
  ["u", "ᴜ"],
  ["v", "ᴠ"],
  ["w", "ᴡ"],
  ["x", "x"],
  ["y", "ʏ"],
  ["z", "ᴢ"],
];
for (const [letter, glyph] of SMALL_PAIRS) {
  smallCaps[letter] = glyph;
  smallCaps[letter.toUpperCase()] = glyph;
}

const superscript: Record<string, string> = {
  a: "ᵃ",
  b: "ᵇ",
  c: "ᶜ",
  d: "ᵈ",
  e: "ᵉ",
  f: "ᶠ",
  g: "ᵍ",
  h: "ʰ",
  i: "ⁱ",
  j: "ʲ",
  k: "ᵏ",
  l: "ˡ",
  m: "ᵐ",
  n: "ⁿ",
  o: "ᵒ",
  p: "ᵖ",
  r: "ʳ",
  s: "ˢ",
  t: "ᵗ",
  u: "ᵘ",
  v: "ᵛ",
  w: "ʷ",
  x: "ˣ",
  y: "ʸ",
  z: "ᶻ",
  A: "ᴬ",
  B: "ᴮ",
  D: "ᴰ",
  E: "ᴱ",
  G: "ᴳ",
  H: "ᴴ",
  I: "ᴵ",
  J: "ᴶ",
  K: "ᴷ",
  L: "ᴸ",
  M: "ᴹ",
  N: "ᴺ",
  O: "ᴼ",
  P: "ᴾ",
  R: "ᴿ",
  T: "ᵀ",
  U: "ᵁ",
  V: "ⱽ",
  W: "ᵂ",
  "0": "⁰",
  "1": "¹",
  "2": "²",
  "3": "³",
  "4": "⁴",
  "5": "⁵",
  "6": "⁶",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
};

const subscript: Record<string, string> = {
  a: "ₐ",
  e: "ₑ",
  h: "ₕ",
  i: "ᵢ",
  j: "ⱼ",
  k: "ₖ",
  l: "ₗ",
  m: "ₘ",
  n: "ₙ",
  o: "ₒ",
  p: "ₚ",
  r: "ᵣ",
  s: "ₛ",
  t: "ₜ",
  u: "ᵤ",
  v: "ᵥ",
  x: "ₓ",
  "0": "₀",
  "1": "₁",
  "2": "₂",
  "3": "₃",
  "4": "₄",
  "5": "₅",
  "6": "₆",
  "7": "₇",
  "8": "₈",
  "9": "₉",
};
for (const key of Object.keys(subscript)) {
  if (key.length === 1 && key >= "a" && key <= "z") subscript[key.toUpperCase()] = subscript[key];
}

const flipLower: Record<string, string> = {
  a: "ɐ",
  b: "q",
  c: "ɔ",
  d: "p",
  e: "ǝ",
  f: "ɟ",
  g: "ƃ",
  h: "ɥ",
  i: "ᴉ",
  j: "ɾ",
  k: "ʞ",
  l: "l",
  m: "ɯ",
  n: "u",
  o: "o",
  p: "d",
  q: "b",
  r: "ɹ",
  s: "s",
  t: "ʇ",
  u: "n",
  v: "ʌ",
  w: "ʍ",
  x: "x",
  y: "ʎ",
  z: "z",
  "0": "0",
  "1": "Ɩ",
  "2": "ᄅ",
  "3": "Ɛ",
  "4": "ㄣ",
  "5": "ϛ",
  "6": "9",
  "7": "ㄥ",
  "8": "8",
  "9": "6",
  "(": ")",
  ")": "(",
  "[": "]",
  "]": "[",
  "{": "}",
  "}": "{",
};
const flip = blankMap();
for (const [key, value] of Object.entries(flipLower)) {
  flip[key] = value;
  const upper = key.toLocaleUpperCase("es");
  if (upper !== key) flip[upper] = value;
}

const MAPS = {
  negrita: withDigits(joinMaps(fillAlphabet(0x1d400, UPPER), fillAlphabet(0x1d41a, LOWER)), 0x1d7ce),
  cursiva: joinMaps(
    fillAlphabet(0x1d434, UPPER),
    fillAlphabet(0x1d44e, LOWER, { h: "\u210E" }),
  ),
  negritaCursiva: joinMaps(fillAlphabet(0x1d468, UPPER), fillAlphabet(0x1d482, LOWER)),
  manuscrita: joinMaps(
    fillAlphabet(0x1d49c, UPPER, scriptUpperHoles),
    fillAlphabet(0x1d4b6, LOWER, scriptLowerHoles),
  ),
  manuscritaNegrita: joinMaps(fillAlphabet(0x1d4d0, UPPER), fillAlphabet(0x1d4ea, LOWER)),
  gotica: joinMaps(fillAlphabet(0x1d504, UPPER, frakturUpperHoles), fillAlphabet(0x1d51e, LOWER)),
  goticaNegrita: joinMaps(fillAlphabet(0x1d56c, UPPER), fillAlphabet(0x1d586, LOWER)),
  doble: withDigits(
    joinMaps(fillAlphabet(0x1d538, UPPER, doubleUpperHoles), fillAlphabet(0x1d552, LOWER)),
    0x1d7d8,
  ),
  sans: withDigits(joinMaps(fillAlphabet(0x1d5a0, UPPER), fillAlphabet(0x1d5ba, LOWER)), 0x1d7e2),
  sansNegrita: withDigits(joinMaps(fillAlphabet(0x1d5d4, UPPER), fillAlphabet(0x1d5ee, LOWER)), 0x1d7ec),
  sansCursiva: joinMaps(fillAlphabet(0x1d608, UPPER), fillAlphabet(0x1d622, LOWER)),
  sansNegritaCursiva: joinMaps(fillAlphabet(0x1d63c, UPPER), fillAlphabet(0x1d656, LOWER)),
  mono: withDigits(joinMaps(fillAlphabet(0x1d670, UPPER), fillAlphabet(0x1d68a, LOWER)), 0x1d7f6),
  ancha: withDigits(joinMaps(fillAlphabet(0xff21, UPPER), fillAlphabet(0xff41, LOWER)), 0xff10),
  burbuja: joinMaps(fillAlphabet(0x24b6, UPPER), fillAlphabet(0x24d0, LOWER), circledDigits),
  burbujaNegra: joinMaps(mirrorCase(fillAlphabet(0x1f150, UPPER)), {
    "0": "\u24FF",
    "1": "\u2776",
    "2": "\u2777",
    "3": "\u2778",
    "4": "\u2779",
    "5": "\u277A",
    "6": "\u277B",
    "7": "\u277C",
    "8": "\u277D",
    "9": "\u277E",
  }),
  parentesis: mirrorCase(fillAlphabet(0x1f110, UPPER)),
  cuadrada: mirrorCase(fillAlphabet(0x1f170, UPPER)),
  versalitas: smallCaps,
  superindice: superscript,
  subindice: subscript,
  volteado: flip,
};

type MapKey = keyof typeof MAPS;

function mapStyle(
  id: string,
  name: string,
  key: MapKey,
  categories: string[],
  badge?: StyleBadge,
): StyleDefinition {
  const table = MAPS[key];
  return {
    id,
    name,
    categories,
    badge,
    apply: (input) => applyMap(input, table),
  };
}

function effectStyle(
  id: string,
  name: string,
  categories: string[],
  apply: (input: string) => string,
  badge?: StyleBadge,
): StyleDefinition {
  return { id, name, categories, badge, apply };
}

const FRAME_ROWS: readonly [string, string, string, string, string[], StyleBadge?][] = [
  ["corazones", "Corazones", "♡", "♡", ["corazones", "decoradas"]],
  ["corazones-llenos", "Corazones llenos", "♥", "♥", ["corazones", "decoradas"], "tendencia"],
  ["corazones-finos", "Corazones finos", "❥", "❥", ["corazones", "decoradas"]],
  ["corazones-dobles", "Corazones dobles", "♡♡", "♡♡", ["corazones", "decoradas"]],
  ["latidos", "Latidos", "♡♥", "♥♡", ["corazones", "decoradas"]],
  ["corazon-estrella", "Corazón y estrella", "♡", "★", ["corazones", "decoradas"]],
  ["estrellas", "Estrellas", "★", "★", ["simbolos", "decoradas"], "tendencia"],
  ["estrella-hueca", "Estrella hueca", "☆", "☆", ["simbolos", "decoradas"]],
  ["estrellas-dobles", "Estrellas dobles", "★★", "★★", ["simbolos", "decoradas"]],
  ["estrella-punto", "Estrella y punto", "★·", "·★", ["decoradas", "simbolos"]],
  ["destellos", "Destellos", "✦", "✦", ["aesthetic", "simbolos", "decoradas"]],
  ["chispas", "Chispas", "✧", "✧", ["aesthetic", "simbolos"]],
  ["chispas-dobles", "Chispas dobles", "⋆⋆", "⋆⋆", ["aesthetic", "decoradas"]],
  ["brillo", "Brillo", "✧･", "･✧", ["aesthetic", "decoradas"]],
  ["flores", "Flores", "✿", "✿", ["decoradas", "simbolos"], "tendencia"],
  ["flor-suave", "Flor suave", "❀", "❀", ["decoradas"]],
  ["flores-dobles", "Flores dobles", "✿✿", "✿✿", ["decoradas"]],
  ["flor-punto", "Flor y punto", "✿·", "·✿", ["decoradas"]],
  ["jardin", "Jardín", "✿❀", "❀✿", ["decoradas"]],
  ["marco-aesthetic", "Marco aesthetic", "『", "』", ["aesthetic", "decoradas"], "nuevo"],
  ["comillas", "Comillas", "「", "」", ["aesthetic", "simbolos"]],
  ["marco-doble", "Marco doble", "〖", "〗", ["aesthetic", "simbolos"]],
  ["parentesis-dec", "Paréntesis decorados", "【", "】", ["simbolos", "aesthetic"]],
  ["corchetes", "Corchetes", "〔", "〕", ["simbolos"]],
  ["llaves", "Llaves", "❮", "❯", ["simbolos"]],
  ["barras", "Barras", "▌", "▌", ["simbolos"]],
  ["puntos", "Puntos", "•", "•", ["simbolos", "decoradas"]],
  ["punto-medio", "Punto medio", "·", "·", ["simbolos", "chiquitas"]],
  ["luna", "Luna", "☾", "☽", ["aesthetic", "decoradas"]],
  ["alas", "Alas", "༺", "༻", ["aesthetic", "decoradas"]],
  ["alitas", "Alitas", "ʚ", "ɞ", ["aesthetic", "decoradas"]],
  ["corona", "Corona", "♔", "♔", ["decoradas", "simbolos"]],
  ["corona-oscura", "Corona oscura", "♕", "♕", ["decoradas"]],
  ["diamante", "Diamante", "◆", "◆", ["simbolos", "decoradas"]],
  ["rombo", "Rombo hueco", "◇", "◇", ["simbolos"]],
  ["notas", "Notas", "♪", "♪", ["decoradas", "simbolos"]],
  ["musica", "Música", "♫", "♫", ["decoradas"]],
  ["vinilo", "Vinilo", "♩", "♩", ["decoradas"]],
  ["fuego", "Fuego", "🔥", "🔥", ["emojis", "juegos"]],
  ["rayo", "Rayo", "⚡", "⚡", ["emojis", "juegos"]],
  ["mariposa", "Mariposa", "🦋", "🦋", ["emojis", "decoradas"]],
  ["nube", "Nube", "☁", "☁", ["emojis", "decoradas"]],
  ["sol", "Sol", "☀", "☀", ["emojis", "decoradas"]],
  ["nieve", "Nieve", "❄", "❄", ["emojis", "decoradas"]],
  ["trebol", "Trébol", "☘", "☘", ["emojis", "decoradas"]],
  ["luna-llena", "Luna llena", "🌕", "🌕", ["emojis"]],
  ["lazo", "Lazo", "🎀", "🎀", ["emojis", "decoradas"]],
  ["espadas", "Espadas", "⚔", "⚔", ["juegos", "simbolos"]],
  ["insignia", "Insignia", "★", "⚔", ["juegos", "simbolos"]],
  ["flechas", "Flechas", "➳", "➳", ["simbolos", "juegos"]],
  ["infinito", "Infinito", "∞", "∞", ["simbolos"]],
  ["ondas", "Ondas", "～", "～", ["aesthetic"]],
  ["circulos", "Círculos", "◦", "◦", ["simbolos"]],
  ["triangulos", "Triángulos", "▸", "◂", ["simbolos"]],
  ["cruz", "Cruz fina", "✚", "✚", ["simbolos"]],
  ["hexagono", "Hexágono", "⬡", "⬡", ["simbolos"]],
  ["grados", "Grados", "˚", "˚", ["aesthetic", "chiquitas"]],
  ["separador", "Separador", "─", "─", ["simbolos"]],
  ["sombra", "Sombra", "░", "░", ["graffiti", "simbolos"]],
  ["bloque", "Bloque", "▓", "▓", ["graffiti"]],
  ["neon", "Neón", "⊹", "⊹", ["aesthetic", "graffiti"], "nuevo"],
  ["joyas", "Joyas", "❈", "❈", ["decoradas", "simbolos"]],
  ["laurel", "Laurel", "❦", "❦", ["decoradas"]],
  ["carita", "Carita", "˘", "˘", ["aesthetic"]],
  ["guirnalda", "Guirnalda", "✧✿", "✿✧", ["decoradas", "aesthetic"]],
];

const volteadoMap = MAPS.volteado;

export const STYLES: readonly StyleDefinition[] = [
  mapStyle("negrita", "Negrita", "negrita", ["negrita", "juegos"], "tendencia"),
  mapStyle("cursiva", "Cursiva", "cursiva", ["cursiva", "juegos"]),
  mapStyle("negrita-cursiva", "Negrita cursiva", "negritaCursiva", ["cursiva", "negrita"]),
  mapStyle("manuscrita", "Cursiva manuscrita", "manuscrita", ["cursiva", "aesthetic"], "tendencia"),
  mapStyle("manuscrita-negrita", "Manuscrita negrita", "manuscritaNegrita", ["cursiva", "aesthetic", "negrita"]),
  mapStyle("gotica", "Gótica", "gotica", ["gotica", "juegos"], "tendencia"),
  mapStyle("gotica-negrita", "Gótica negrita", "goticaNegrita", ["gotica", "negrita", "juegos"]),
  mapStyle("doble", "Doble trazo", "doble", ["juegos", "simbolos"]),
  mapStyle("sans", "Recta", "sans", ["juegos"]),
  mapStyle("sans-negrita", "Sans negrita", "sansNegrita", ["negrita", "juegos"]),
  mapStyle("sans-cursiva", "Sans cursiva", "sansCursiva", ["cursiva"]),
  mapStyle("sans-negrita-cursiva", "Sans negrita cursiva", "sansNegritaCursiva", ["cursiva", "negrita"]),
  mapStyle("mono", "Monoespaciada", "mono", ["juegos"]),
  mapStyle("ancha", "Ancha", "ancha", ["juegos", "aesthetic"]),
  mapStyle("burbuja", "Burbuja", "burbuja", ["burbuja", "juegos"], "tendencia"),
  mapStyle("burbuja-negra", "Burbuja negra", "burbujaNegra", ["burbuja", "juegos"]),
  mapStyle("parentesis", "Entre paréntesis", "parentesis", ["burbuja", "simbolos"]),
  mapStyle("cuadrada", "Cuadrada", "cuadrada", ["burbuja", "graffiti", "juegos"]),
  mapStyle("versalitas", "Versalitas", "versalitas", ["chiquitas", "aesthetic", "juegos"]),
  mapStyle("superindice", "Superíndice", "superindice", ["chiquitas"]),
  mapStyle("subindice", "Subíndice", "subindice", ["chiquitas"]),
  mapStyle("volteado", "Volteado", "volteado", ["efectos"]),
  effectStyle("tachado", "Tachado", ["efectos"], (input) => applyMarks(input, ["\u0336"])),
  effectStyle("subrayado", "Subrayado", ["efectos"], (input) => applyMarks(input, ["\u0332"])),
  effectStyle("doble-subrayado", "Doble subrayado", ["efectos"], (input) => applyMarks(input, ["\u0333"])),
  effectStyle("linea-superior", "Línea superior", ["efectos"], (input) => applyMarks(input, ["\u0305"])),
  effectStyle("diagonal", "Tachado diagonal", ["efectos"], (input) => applyMarks(input, ["\u0338"])),
  effectStyle("puntos-arriba", "Puntos arriba", ["efectos"], (input) => applyMarks(input, ["\u0307"])),
  effectStyle("onda", "Onda", ["efectos"], (input) => applyMarks(input, ["\u0330"])),
  effectStyle("glitch", "Glitch suave", ["efectos", "graffiti"], (input) => applyMarks(input, ["\u0334", "\u0336"]), "nuevo"),
  effectStyle("alternado", "Alternado", ["efectos"], alternateCase),
  effectStyle("invertido", "Invertido", ["efectos"], reverseGraphemes),
  effectStyle("espejo", "Espejo", ["efectos"], (input) => reverseGraphemes(applyMap(input, volteadoMap))),
  effectStyle("leet", "Leet", ["efectos", "juegos"], toLeet),
  effectStyle("espaciado", "Espaciado", ["efectos", "aesthetic"], spaceOut),
  ...FRAME_ROWS.map(([id, name, prefix, suffix, categories, badge]) =>
    effectStyle(id, name, categories, (input) => applyFrame(input, prefix, suffix), badge),
  ),
];

const byId = new Map(STYLES.map((style) => [style.id, style]));

export function getStyle(id: string): StyleDefinition | undefined {
  return byId.get(id);
}

export function renderStyle(style: StyleDefinition, input: string): string {
  return style.apply(input);
}

export function stylesInCategory(category: string): StyleDefinition[] {
  if (category === "all" || category === "") return [...STYLES];
  return STYLES.filter((style) => style.categories.includes(category));
}

export function countInCategory(category: string): number {
  if (category === "favoritos") return 0;
  return stylesInCategory(category).length;
}

export function categoryLabel(id: string): string {
  return CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
