function flash(button: HTMLButtonElement, ok: boolean): void {
  const original = button.dataset.label ?? button.textContent ?? "";
  button.textContent = ok ? "¡Copiado!" : "Selecciona el texto";
  window.setTimeout(() => {
    button.textContent = original;
  }, 1600);
}

async function copyPlain(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* Use the fallback below. */
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.left = "-9999px";
  document.body.append(area);
  area.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  area.remove();
  return ok;
}

const themeButton = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
themeButton?.addEventListener("click", () => {
  const root = document.documentElement;
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("lb-theme", next);
  } catch {
    /* Ignore storage failures. */
  }
  themeButton.setAttribute("aria-label", next === "dark" ? "Activar modo claro" : "Activar modo oscuro");
});

const navToggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
const nav = document.querySelector<HTMLElement>("[data-nav]");
navToggle?.addEventListener("click", () => {
  const open = nav?.classList.toggle("is-open") ?? false;
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const button = target.closest<HTMLButtonElement>("[data-copy-text]");
  if (!button) return;
  const text = button.dataset.copyText ?? "";
  void copyPlain(text).then((ok) => flash(button, ok));
});
