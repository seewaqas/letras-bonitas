const UNITS = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"] as const;
const TEENS = [
  "diez",
  "once",
  "doce",
  "trece",
  "catorce",
  "quince",
  "dieciséis",
  "diecisiete",
  "dieciocho",
  "diecinueve",
] as const;
const TENS = ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"] as const;
const HUNDREDS = [
  "",
  "ciento",
  "doscientos",
  "trescientos",
  "cuatrocientos",
  "quinientos",
  "seiscientos",
  "setecientos",
  "ochocientos",
  "novecientos",
] as const;
const VEINTI: Record<number, string> = {
  2: "veintidós",
  3: "veintitrés",
  4: "veinticuatro",
  5: "veinticinco",
  6: "veintiséis",
  7: "veintisiete",
  8: "veintiocho",
  9: "veintinueve",
};

export const NUMERO_MAX = 999_999;

function under100(value: number, apocope: boolean): string {
  if (value < 10) {
    if (value === 1 && apocope) return "un";
    return UNITS[value] ?? "";
  }
  if (value < 20) return TEENS[value - 10] ?? "";
  if (value < 30) {
    if (value === 20) return "veinte";
    if (value === 21) return apocope ? "veintiún" : "veintiuno";
    return VEINTI[value - 20] ?? "";
  }
  const ten = TENS[Math.floor(value / 10)] ?? "";
  const unit = value % 10;
  if (unit === 0) return ten;
  if (unit === 1 && apocope) return `${ten} y un`;
  return `${ten} y ${UNITS[unit]}`;
}

function under1000(value: number, apocope: boolean): string {
  if (value === 0) return "";
  if (value === 100) return "cien";
  const hundreds = Math.floor(value / 100);
  const rest = value % 100;
  return [hundreds ? HUNDREDS[hundreds] : "", under100(rest, apocope)].filter(Boolean).join(" ");
}

/** Spells an integer from 0 to 999999 in Spanish. Returns null outside that range. */
export function numeroALetras(value: number): string | null {
  if (!Number.isInteger(value) || value < 0 || value > NUMERO_MAX) return null;
  if (value === 0) return "cero";
  const thousands = Math.floor(value / 1000);
  const rest = value % 1000;
  const parts: string[] = [];
  if (thousands === 1) parts.push("mil");
  else if (thousands > 1) parts.push(`${under1000(thousands, true)} mil`);
  if (rest) parts.push(under1000(rest, false));
  return parts.join(" ");
}

/** Accepts a digit string of up to six characters. Rejects signs, decimals, and empty input. */
export function parseNumero(raw: string): number | null {
  const text = raw.trim();
  if (!/^\d{1,6}$/.test(text)) return null;
  const value = Number(text);
  return value <= NUMERO_MAX ? value : null;
}
