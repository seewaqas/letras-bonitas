import assert from "node:assert/strict";
import test from "node:test";
import { combiningMarkCount, graphemes } from "./transform.ts";
import { STYLES, renderStyle } from "./styles.ts";

test("ships at least 100 uniquely named styles", () => {
  assert.ok(STYLES.length >= 100);
  const ids = new Set(STYLES.map((style) => style.id));
  const names = new Set(STYLES.map((style) => style.name));
  assert.equal(ids.size, STYLES.length);
  assert.equal(names.size, STYLES.length);
});

test("emoji and ñ survive every style", () => {
  for (const style of STYLES) {
    const emoji = renderStyle(style, "Hola 😎");
    const enie = renderStyle(style, "Niño");
    assert.equal(emoji.includes("\uFFFD"), false, style.id);
    assert.equal(enie.includes("\uFFFD"), false, style.id);
    assert.equal(graphemes(emoji).includes("😎"), true, style.id);
    assert.equal(enie.normalize("NFD").includes("\u0303"), true, style.id);
  }
});

test("glitch never stacks more than two extra marks", () => {
  const glitch = STYLES.find((style) => style.id === "glitch");
  assert.ok(glitch);
  for (const grapheme of graphemes(renderStyle(glitch, "Free Fire"))) {
    assert.ok(combiningMarkCount(grapheme) <= 2);
  }
});

test("fraktur Z uses the letterlike symbol", () => {
  const gotica = STYLES.find((style) => style.id === "gotica");
  assert.ok(gotica);
  assert.equal(renderStyle(gotica, "Z").codePointAt(0), 0x2128);
});

test("gothic and bubble change a Free Fire nick", () => {
  const gotica = STYLES.find((style) => style.id === "gotica");
  const burbuja = STYLES.find((style) => style.id === "burbuja");
  assert.ok(gotica && burbuja);
  assert.notEqual(renderStyle(gotica, "Fuego"), "Fuego");
  assert.notEqual(renderStyle(burbuja, "Fuego"), "Fuego");
  assert.ok(graphemes(renderStyle(burbuja, "Fuego")).length <= 12);
});
