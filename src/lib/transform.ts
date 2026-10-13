/** Pure text transforms. No DOM, no network. Safe to run while rendering and in the browser. */

export const MAX_INPUT_GRAPHEMES = 600;

const segmenter = new Intl.Segmenter("es", { granularity: "grapheme" });

export function graphemes(input: string): string[] {
  return [...segmenter.segment(input)].map((part) => part.segment);
}

export function isEmoji(grapheme: string): boolean {
  return /\p{Extended_Pictographic}/u.test(grapheme);
}

export function clampInput(input: string): string {
  const parts = graphemes(input);
  if (parts.length <= MAX_INPUT_GRAPHEMES) return input;
  return parts.slice(0, MAX_INPUT_GRAPHEMES).join("");
}

export function visibleLength(input: string): number {
  return graphemes(input).length;
}

function isMark(char: string): boolean {
  return /\p{M}/u.test(char);
}

/** Map the base letter and keep Spanish accents attached. Emoji and spaces pass through. */
export function mapGraphemes(input: string, mapChar: (base: string) => string): string {
  return graphemes(input)
    .map((grapheme) => {
      if (isEmoji(grapheme) || /^\s$/u.test(grapheme)) return grapheme;
      const chars = [...grapheme.normalize("NFD")];
      const base = chars[0];
      if (!base || isMark(base)) return grapheme;
      return mapChar(base) + chars.slice(1).join("");
    })
    .join("");
}

export function applyMap(input: string, map: Readonly<Record<string, string>>): string {
  return mapGraphemes(input, (base) => (Object.hasOwn(map, base) ? map[base] : base));
}

export function applyMarks(input: string, marks: readonly string[]): string {
  const safe = marks.slice(0, 2);
  return graphemes(input)
    .map((grapheme, index) => {
      if (isEmoji(grapheme) || /^\s$/u.test(grapheme)) return grapheme;
      if (safe.length === 1) return grapheme + safe[0];
      return grapheme + safe[index % 2] + (index % 5 === 0 ? safe[1] : "");
    })
    .join("");
}

export function applyFrame(input: string, prefix: string, suffix: string): string {
  return `${prefix}${input}${suffix}`;
}

export function reverseGraphemes(input: string): string {
  return graphemes(input).reverse().join("");
}

export function alternateCase(input: string): string {
  let letter = 0;
  return graphemes(input)
    .map((grapheme) => {
      if (!/^\p{L}/u.test(grapheme)) return grapheme;
      const next = letter % 2 === 0 ? grapheme.toLocaleLowerCase("es") : grapheme.toLocaleUpperCase("es");
      letter += 1;
      return next;
    })
    .join("");
}

const LEET: Record<string, string> = Object.assign(Object.create(null) as Record<string, string>, {
  a: "4",
  A: "4",
  e: "3",
  E: "3",
  i: "1",
  I: "1",
  o: "0",
  O: "0",
  s: "5",
  S: "5",
  t: "7",
  T: "7",
});

export function toLeet(input: string): string {
  return mapGraphemes(input, (base) => LEET[base] ?? base).normalize("NFC");
}

export function spaceOut(input: string): string {
  return graphemes(input).join(" ");
}

export function blankMap(): Record<string, string> {
  return Object.create(null) as Record<string, string>;
}

export function isAssigned(codePoint: number): boolean {
  return !/\p{Cn}/u.test(String.fromCodePoint(codePoint));
}

/**
 * Fill A–Z / a–z from a Unicode start. Holes must be passed in `preset`
 * so the index still matches the Unicode chart.
 */
export function fillAlphabet(
  start: number,
  letters: string,
  preset: Record<string, string> = {},
): Record<string, string> {
  const map = blankMap();
  for (const [key, value] of Object.entries(preset)) map[key] = value;
  for (let index = 0; index < letters.length; index += 1) {
    const letter = letters[index];
    if (!letter || Object.hasOwn(map, letter)) continue;
    const codePoint = start + index;
    if (!isAssigned(codePoint)) continue;
    map[letter] = String.fromCodePoint(codePoint);
  }
  return map;
}

export function fillDigits(start: number, into: Record<string, string>): void {
  for (let digit = 0; digit < 10; digit += 1) {
    const codePoint = start + digit;
    if (!isAssigned(codePoint)) continue;
    into[String(digit)] = String.fromCodePoint(codePoint);
  }
}

/** Use the uppercase glyph for both cases when Unicode has no lowercase. */
export function mirrorCase(upper: Record<string, string>): Record<string, string> {
  const map = blankMap();
  for (const [key, value] of Object.entries(upper)) {
    map[key] = value;
    const lower = key.toLocaleLowerCase("es");
    if (!Object.hasOwn(map, lower)) map[lower] = value;
  }
  return map;
}

export function combiningMarkCount(grapheme: string): number {
  return [...grapheme.normalize("NFD")].filter((char) => isMark(char)).length;
}
