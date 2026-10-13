import { getStyle, renderStyle } from "../lib/styles.ts";
import { visibleLength } from "../lib/transform.ts";

export const NICK_LIMIT = 12;
export const NICK_PREVIEW = 12;
const PER_CATEGORY = 60;

export type NickName = {
  text: string;
  style: string;
  length: number;
  over: boolean;
};

export type NickCategory = {
  id: string;
  emoji: string;
  short: string;
  title: string;
  blurb: string;
  names: readonly NickName[];
  fits: number;
};

const READABLE = ["negrita", "gotica", "gotica-negrita", "ancha", "versalitas", "mono", "sans-negrita", "doble", "burbuja", "cursiva"];
const MARKS = ["", "ツ", "亗", "★", "々", "♛"];

function styled(word: string, styleId: string, prefix = "", suffix = ""): NickName {
  const style = getStyle(styleId);
  if (!style) throw new Error(`Estilo desconocido: ${styleId}`);
  const text = `${prefix}${renderStyle(style, word)}${suffix}`;
  const length = visibleLength(text);
  return { text, style: style.name, length, over: length > NICK_LIMIT };
}

function fill(words: readonly string[], styleIds: readonly string[], suffixes: readonly string[], limit = PER_CATEGORY): NickName[] {
  const out: NickName[] = [];
  const seen = new Set<string>();
  for (const suffix of suffixes) {
    for (const styleId of styleIds) {
      for (const word of words) {
        if (out.length >= limit) return out;
        const nick = styled(word, styleId, "", suffix);
        if (seen.has(nick.text)) continue;
        seen.add(nick.text);
        out.push(nick);
      }
    }
  }
  return out;
}

function category(
  id: string,
  emoji: string,
  short: string,
  title: string,
  blurb: string,
  names: NickName[],
): NickCategory {
  return { id, emoji, short, title, blurb, names, fits: names.filter((nick) => !nick.over).length };
}

const miedo = ["Sombra", "Niebla", "Cuervo", "Hueso", "Tumba", "Veneno", "Bruma", "Fosa", "Luto", "Cripta", "Ocaso", "Umbral", "Noche", "Duelo", "Mortal", "Silencio", "Abismo", "Espectro"];
const insanos = ["Furia", "Caos", "Rabia", "Ira", "Trueno", "Bestia", "Acero", "Llama", "Fuego", "Rayo", "Lobo", "Titan", "Nova", "Rex", "Storm", "Blaze", "Impacto", "Guerra"];
const cortos = ["Luna", "Nova", "Sol", "Rey", "Pro", "Zen", "Max", "Leo", "Kai", "Neo", "Ash", "Rio", "Fox", "Ace", "Nyx", "Vex"];
const tristes = ["Lluvia", "Gris", "Eco", "Nube", "Solo", "Vacio", "Olvido", "Nadie", "Lejos", "Frio", "Pausa", "Ausente", "Lento", "Hueco", "Bruma", "Eco"];
const chistes = ["Papita", "Taco", "Meme", "Jefe", "Pan", "Queso", "Gato", "Pizza", "Siesta", "Dormido", "Bro", "Nacho", "Churro", "Lento"];
const heroes = ["Gloria", "Honor", "Leon", "Sol", "Rey", "Alma", "Noble", "Bravo", "Campeon", "Escudo", "Llama", "Guia", "Fenix", "Valor"];
const veteranos = ["Viejo", "Rango", "Elite", "Leyenda", "Maestro", "Capitan", "Jefe", "Lobo", "Pro", "Guia", "Senior", "Mentor"];
const animales = ["Lobo", "Zorro", "Tigre", "Leon", "Aguila", "Puma", "Buho", "Halcon", "Oso", "Cuervo", "Jaguar", "Lince", "Cobra", "Pantera"];
const chidos = ["Luna", "Nova", "Fuego", "Rayo", "Sombra", "Lobo", "Neon", "Aura", "Zen", "Flow", "Kiwi", "Vibe", "Pixel", "Onda"];
const clanes = ["Norte", "Sur", "Alfa", "Omega", "Fenix", "Legion", "Guardia", "Tribu", "Nido", "Clan", "Muro", "Torre", "Nexo", "Base"];
const mujer = ["Luna", "Rosa", "Perla", "Cielo", "Dalia", "Iris", "Nina", "Miel", "Aura", "Venus", "Selene", "Coral", "Jade", "Lila", "Vera"];
const hombre = ["Leon", "Rex", "Duke", "Wolf", "King", "Max", "Leo", "Axel", "Bruno", "Enzo", "Gael", "Iker", "Mateo", "Nico"];
const aztecas = ["Quetzal", "Tlaloc", "Xolotl", "Ehecatl", "Mictlan", "Cipactli", "Ocelotl", "Tonatiuh", "Mixcoatl", "Itzli"];

function espacios(): NickName[] {
  const out: NickName[] = [];
  const seen = new Set<string>();
  const push = (nick: NickName) => {
    if (seen.has(nick.text) || out.length >= PER_CATEGORY) return;
    seen.add(nick.text);
    out.push(nick);
  };
  for (const word of [...cortos, ...chidos, "Sombra", "Fuego", "Rayo"]) {
    push(styled(word, "espaciado"));
    push(styled(word, "ancha"));
    const wide = styled(word, "ancha").text;
    const spaced = [...wide].join(" ");
    const length = visibleLength(spaced);
    push({ text: spaced, style: "Ancha espaciada", length, over: length > NICK_LIMIT });
  }
  for (let i = 0; i < cortos.length - 1 && out.length < PER_CATEGORY; i += 1) {
    const left = styled(cortos[i] ?? "Luna", "versalitas").text;
    const right = styled(cortos[i + 1] ?? "Nova", "versalitas").text;
    const text = `${left}\u3164${right}`;
    const length = visibleLength(text);
    push({ text, style: "Espacio invisible", length, over: length > NICK_LIMIT });
  }
  return out;
}

function duos(): NickName[] {
  const pairs: readonly (readonly [string, string])[] = [
    ["Luna", "Sol"],
    ["Fuego", "Agua"],
    ["Rosa", "Leon"],
    ["Nova", "Neo"],
    ["Perla", "Rey"],
    ["Dalia", "Lobo"],
    ["Iris", "Zen"],
    ["Miel", "Max"],
    ["Aura", "Kai"],
    ["Coral", "Ash"],
    ["Jade", "Rio"],
    ["Lila", "Fox"],
    ["Vera", "Ace"],
    ["Nina", "Leo"],
    ["Cielo", "Rayo"],
  ];
  const out: NickName[] = [];
  const seen = new Set<string>();
  for (const styleId of ["gotica", "negrita", "versalitas", "ancha"]) {
    for (const [leftWord, rightWord] of pairs) {
      if (out.length >= PER_CATEGORY) return out;
      const left = styled(leftWord, styleId).text;
      const right = styled(rightWord, styleId).text;
      const text = `${left} × ${right}`;
      if (seen.has(text)) continue;
      seen.add(text);
      const length = visibleLength(text);
      const style = getStyle(styleId);
      out.push({ text, style: style?.name ?? styleId, length, over: length > NICK_LIMIT });
    }
  }
  return out;
}

function raros(): NickName[] {
  return fill(
    ["Raro", "Glitch", "Eco", "Nyx", "Vex", "Zero", "Bug", "Pixel", "Flux", "Nodo", "Hex", "Byte", "Loco", "Twist"],
    ["volteado", "leet", "alternado", "glitch", "invertido", "mono"],
    ["", "ツ", "々"],
  );
}

function verificado(): NickName[] {
  const out: NickName[] = [];
  const seen = new Set<string>();
  const words = ["Luna", "Nova", "Pro", "Rey", "Sol", "Leo", "Max", "Zen", "Kai", "Ace", "Neo", "Ash"];
  for (let i = 0; out.length < PER_CATEGORY && i < 4000; i += 1) {
    const word = words[i % words.length] ?? "Pro";
    const styleId = READABLE[(i * 3) % READABLE.length] ?? "negrita";
    const nick = styled(word, styleId, "✔", "");
    if (seen.has(nick.text)) continue;
    seen.add(nick.text);
    out.push(nick);
  }
  return out;
}

export const NICK_CATEGORIES: readonly NickCategory[] = [
  category("miedo", "😨", "Que den miedo", "Nombres de Free Fire que den miedo", "Nicks cortos y oscuros. El número en rojo pasa de 12 y no cabe en el nombre del jugador.", fill(miedo, ["gotica", "gotica-negrita", "negrita", "versalitas"], MARKS)),
  category("insanos", "👺", "Insanos", "Nombres de Free Fire insanos y fuertes", "Palabras cortas en gótica, negrita y versalitas, con un símbolo solo cuando todavía cabe.", fill(insanos, ["gotica-negrita", "negrita", "ancha", "sans-negrita"], MARKS)),
  category("espacios", "🌌", "Con espacios", "Nombres de Free Fire con espacios", "Letras separadas o un espacio en blanco Hangul (U+3164) entre dos palabras cortas.", espacios()),
  category("tristes", "😔", "Tristes", "Nombres para Free Fire tristes", "Tonos bajos, sin marcos largos.", fill(tristes, ["mono", "versalitas", "cursiva", "negrita"], ["", "ツ", "…"])),
  category("raros", "🥴", "Raros", "Nombres para Free Fire raros", "Volteado, leet y glitch. Si el juego no lo muestra, cambia a gótica.", raros()),
  category("chistosos", "😂", "Chistosos", "Nombres para Free Fire chistosos", "Palabras cotidianas con estilo. Sirven para un nick ligero, no para un clan serio.", fill(chistes, ["burbuja", "negrita", "ancha", "mono"], ["", "ツ", "★"])),
  category("mayuscula", "🔠", "Mayúscula", "Nombres para Free Fire en mayúscula", "La misma palabra en caja alta, en negrita o en ancha.", fill(heroes.map((word) => word.toUpperCase()), ["negrita", "ancha", "sans-negrita", "doble"], ["", "★"])),
  category("heroicos", "⭐", "Heroicos", "Nombres de Free Fire heroicos", "Palabras de rango y de escudo. Las más cortas entran en los 12.", fill(heroes, ["gotica", "negrita", "doble", "ancha"], ["", "★", "♛"])),
  category("veteranos", "🎩", "Veteranos", "Nombres de Free Fire veteranos", "Para quien ya lleva temporadas. Cortos y legibles en la partida.", fill(veteranos, ["gotica-negrita", "negrita", "mono", "versalitas"], ["", "々", "★"])),
  category("verificado", "✔", "Verificado", "Nombres con marca de verificado", "La marca suma un carácter. Úsala con una palabra de 4 a 6 letras.", verificado()),
  category("animales", "🦁", "Animales", "Nombres para Free Fire de animales", "Un animal, un estilo. El símbolo va al final solo si el contador sigue en negro.", fill(animales, ["gotica", "negrita", "burbuja", "ancha"], MARKS)),
  category("chidos", "😎", "Chidos", "Nombres chidos para Free Fire", "Los más fáciles de recordar. Empieza por aquí si no quieres pasarte de 12.", fill(chidos, READABLE, ["", "ツ", "★", "亗"])),
  category("clanes", "🐉", "Clanes", "Nombres para clanes de Free Fire", "Una palabra de equipo. En el clan cabe más que en el nick, pero el contador sigue marcando los 12 del jugador.", fill(clanes, ["gotica-negrita", "negrita", "ancha", "cuadrada"], ["", "★", "♛", "亗"])),
  category("mujer", "🌸", "Mujer", "Nombres para Free Fire de mujer", "Nombres cortos en cursiva, gótica o versalitas.", fill(mujer, ["cursiva", "manuscrita", "gotica", "versalitas", "negrita"], ["", "★", "ツ"])),
  category("duos", "💑", "Dúos", "Nombres para Free Fire dúos", "Dos nicks en una sola copia. Casi todos pasan de 12: copia y parte el texto, o usa cada mitad en un jugador.", duos()),
  category("hombre", "💀", "Hombre", "Nombres para Free Fire de hombre", "Cortos, en gótica o negrita, para que se lean en el lobby.", fill(hombre, ["gotica", "gotica-negrita", "negrita", "ancha"], MARKS)),
  category("aztecas", "🏺", "Aztecas", "Nombres de dioses y mitos para Free Fire", "Nombres de la tradición mexica. Los largos, como Tonatiuh, se pasan del límite: mira el contador.", fill(aztecas, ["gotica", "gotica-negrita", "negrita", "versalitas"], ["", "亗", "★"])),
];

export const NICK_TOTAL = NICK_CATEGORIES.reduce((sum, item) => sum + item.names.length, 0);
