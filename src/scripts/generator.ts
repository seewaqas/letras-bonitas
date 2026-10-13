import { clampInput, visibleLength } from "../lib/transform.ts";
import { STYLES, renderStyle } from "../lib/styles.ts";

const FAV_KEY = "lb-favorites";
const PAGE_SIZE = 24;

function readFavs(): Set<string> {
  try {
    const raw = localStorage.getItem(FAV_KEY);
    if (!raw) return new Set();
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((item): item is string => typeof item === "string"));
  } catch {
    return new Set();
  }
}

function writeFavs(favs: Set<string>): void {
  try {
    localStorage.setItem(FAV_KEY, JSON.stringify([...favs]));
  } catch {
    /* Private mode can block storage. The heart still toggles for this visit. */
  }
}

async function writeClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* Fall through to the hidden field. */
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

function selectText(node: HTMLElement): void {
  const range = document.createRange();
  range.selectNodeContents(node);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
}

export function mountGenerator(root: HTMLElement): void {
  const input = root.querySelector<HTMLTextAreaElement>("[data-input]");
  const counter = root.querySelector<HTMLElement>("[data-counter]");
  const list = root.querySelector<HTMLElement>("[data-cards]");
  const empty = root.querySelector<HTMLElement>("[data-empty]");
  const more = root.querySelector<HTMLButtonElement>("[data-more]");
  const search = root.querySelector<HTMLInputElement>("[data-search]");
  if (!input || !counter || !list || !empty || !more || !search) return;

  const limitMax = Number(root.dataset.limitMax ?? "");
  const hasLimit = Number.isFinite(limitMax) && limitMax > 0;
  const styles = new Map(STYLES.map((style) => [style.id, style]));
  const favs = readFavs();
  let category = root.dataset.category || "all";
  let expanded = false;
  let frame = 0;

  const paintFav = (button: HTMLButtonElement, on: boolean): void => {
    button.setAttribute("aria-pressed", on ? "true" : "false");
    button.textContent = on ? "♥" : "♡";
  };

  for (const button of root.querySelectorAll<HTMLButtonElement>("[data-fav]")) {
    const card = button.closest<HTMLElement>("[data-id]");
    paintFav(button, favs.has(card?.dataset.id ?? ""));
  }

  const render = (): void => {
    const text = clampInput(input.value);
    if (text !== input.value) input.value = text;
    const length = visibleLength(text);
    counter.textContent = `${length} caracteres`;
    counter.classList.toggle("is-over", hasLimit && length > limitMax);

    const query = search.value.trim().toLocaleLowerCase("es");
    let shown = 0;
    let matches = 0;

    for (const card of list.querySelectorAll<HTMLElement>("[data-id]")) {
      const id = card.dataset.id ?? "";
      const style = styles.get(id);
      const output = card.querySelector<HTMLElement>("[data-output]");
      if (style && output) output.textContent = renderStyle(style, text);

      const cats = card.dataset.cats ?? "";
      const name = card.dataset.name ?? "";
      const categoryOk =
        category === "all" ||
        (category === "favoritos" ? favs.has(id) : cats.split(" ").includes(category));
      const searchOk = query.length === 0 || name.includes(query);
      const match = categoryOk && searchOk;
      card.hidden = !match;
      card.classList.remove("is-extra");
      if (!match) continue;
      matches += 1;
      if (!expanded && shown >= PAGE_SIZE) card.classList.add("is-extra");
      shown += 1;

      if (hasLimit) {
        const badge = card.querySelector<HTMLElement>("[data-len]");
        const outLen = visibleLength(output?.textContent ?? "");
        if (badge) {
          badge.hidden = false;
          badge.textContent = `${outLen}/${limitMax}`;
          badge.classList.toggle("is-over", outLen > limitMax);
        }
      }
    }

    empty.hidden = matches !== 0;
    more.hidden = expanded || matches <= PAGE_SIZE;
  };

  const schedule = (): void => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(render);
  };

  input.addEventListener("input", schedule);
  search.addEventListener("input", () => {
    expanded = false;
    schedule();
  });

  root.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const chip = target.closest<HTMLButtonElement>("[data-chip]");
    if (chip) {
      category = chip.dataset.chip ?? "all";
      expanded = false;
      for (const button of root.querySelectorAll<HTMLButtonElement>("[data-chip]")) {
        button.setAttribute("aria-pressed", button === chip ? "true" : "false");
      }
      schedule();
      return;
    }

    const phrase = target.closest<HTMLButtonElement>("[data-phrase]");
    if (phrase) {
      input.value = phrase.dataset.phrase ?? "";
      schedule();
      input.focus();
      return;
    }

    if (target.closest("[data-clear]")) {
      input.value = "";
      schedule();
      input.focus();
      return;
    }

    if (target.closest("[data-more]")) {
      expanded = true;
      schedule();
      return;
    }

    const fav = target.closest<HTMLButtonElement>("[data-fav]");
    if (fav) {
      const id = fav.closest<HTMLElement>("[data-id]")?.dataset.id ?? "";
      if (!id) return;
      if (favs.has(id)) favs.delete(id);
      else favs.add(id);
      writeFavs(favs);
      paintFav(fav, favs.has(id));
      if (category === "favoritos") schedule();
      return;
    }

    const copy = target.closest<HTMLButtonElement>("[data-copy]");
    if (!copy) return;
    const output = copy.closest(".card")?.querySelector<HTMLElement>("[data-output]");
    const text = output?.textContent ?? "";
    void writeClipboard(text).then((ok) => {
      const original = "Copiar";
      copy.textContent = ok ? "¡Copiado!" : "Selecciona el texto";
      if (!ok && output) selectText(output);
      window.setTimeout(() => {
        copy.textContent = original;
      }, 1600);
    });
  });

  schedule();
}
