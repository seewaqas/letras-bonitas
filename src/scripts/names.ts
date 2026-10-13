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

export function mountNames(): void {
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const more = target.closest<HTMLButtonElement>("[data-nick-more]");
    if (more) {
      const group = more.closest<HTMLElement>("[data-nick-group]");
      group?.querySelectorAll(".name-card.is-extra").forEach((card) => card.classList.remove("is-extra"));
      const count = group?.querySelector("[data-nick-count]");
      const total = group?.querySelectorAll(".name-card").length ?? 0;
      if (count) count.textContent = `Mostrando ${total} de ${total}`;
      more.hidden = true;
      return;
    }

    const card = target.closest<HTMLButtonElement>("[data-nick]");
    if (!card) return;
    const text = card.dataset.nick ?? "";
    const status = card.querySelector<HTMLElement>("[data-status]");
    void copyPlain(text).then((ok) => {
      if (!status) return;
      status.textContent = ok ? "¡Copiado!" : "Selecciona el texto";
      window.setTimeout(() => {
        status.textContent = "";
      }, 1600);
    });
  });
}
