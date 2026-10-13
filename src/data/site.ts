export const SITE_NAME = "Letras Bonitas";

export const DEFAULT_SAMPLE = "Letras Bonitas";

export type Phrase = {
  label: string;
  text: string;
};

export type TextLimit = {
  label: string;
  max: number;
  hint: string;
};

export const PROFILE_PHRASES: readonly Phrase[] = [
  { label: "Bio corta", text: "Creando días bonitos" },
  { label: "Nombre", text: "Luna" },
  { label: "Caption", text: "Hoy se ve distinto" },
];

export const WHATSAPP_PHRASES: readonly Phrase[] = [
  { label: "Buenos días", text: "Buenos días" },
  { label: "Te amo", text: "Te amo" },
  { label: "Te quiero", text: "Te quiero" },
  { label: "Cumpleaños", text: "Feliz cumpleaños" },
  { label: "Aniversario", text: "Feliz aniversario" },
];

export const FREE_FIRE_PHRASES: readonly Phrase[] = [
  { label: "Fuego", text: "Fuego" },
  { label: "Luna", text: "Luna" },
  { label: "Nova", text: "Nova" },
  { label: "Sombra", text: "Sombra" },
  { label: "Rayo", text: "Rayo" },
  { label: "Lobo", text: "Lobo" },
];

export const TITLE_PHRASES: readonly Phrase[] = [
  { label: "Matemáticas", text: "Matemáticas" },
  { label: "Biología", text: "Biología" },
  { label: "Historia", text: "Historia" },
  { label: "Inglés", text: "Inglés" },
  { label: "Español", text: "Español" },
  { label: "Bienvenidos", text: "Bienvenidos" },
];

export function hrefFor(slug: string): string {
  return `/${slug}/`;
}
