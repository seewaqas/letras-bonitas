import { numeroALetras, parseNumero } from "../lib/numeros.ts";

async function writeClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* The status line tells the reader to select the words. */
  }
  return false;
}

export function mountNumeros(root: ParentNode = document): void {
  const tool = root.querySelector<HTMLElement>("[data-numeros]");
  if (!tool) return;
  const input = tool.querySelector<HTMLInputElement>("[data-numero]");
  const output = tool.querySelector<HTMLElement>("[data-numero-out]");
  const copy = tool.querySelector<HTMLButtonElement>("[data-numero-copy]");
  const use = tool.querySelector<HTMLButtonElement>("[data-numero-use]");
  const status = tool.querySelector<HTMLElement>("[data-numero-status]");
  if (!input || !output || !copy || !use || !status) return;

  const render = (): string | null => {
    const value = parseNumero(input.value);
    const words = value === null ? null : numeroALetras(value);
    output.textContent = words ?? "Escribe un entero entre 0 y 999999.";
    return words;
  };

  input.addEventListener("input", () => {
    status.textContent = "";
    render();
  });

  copy.addEventListener("click", async () => {
    const words = render();
    if (!words) {
      status.textContent = "Todavía no hay un número válido.";
      return;
    }
    const ok = await writeClipboard(words);
    status.textContent = ok ? "Palabras copiadas." : "Selecciona el texto de arriba y cópialo.";
  });

  use.addEventListener("click", () => {
    const words = render();
    const field = document.querySelector<HTMLTextAreaElement>("[data-generator] [data-input]");
    if (!words || !field) {
      status.textContent = "Primero escribe un número válido.";
      return;
    }
    field.value = words;
    field.dispatchEvent(new Event("input", { bubbles: true }));
    field.focus();
    status.textContent = "Ya está en el conversor de abajo.";
  });
}
