import assert from "node:assert/strict";
import test from "node:test";
import {
  alternateCase,
  applyMap,
  applyMarks,
  clampInput,
  combiningMarkCount,
  fillAlphabet,
  graphemes,
  reverseGraphemes,
  visibleLength,
} from "./transform.ts";

const SAMPLE_MAP = fillAlphabet(0x1d400, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");

test("keeps emoji as one grapheme when reversing", () => {
  const input = "Hola 😎";
  const reversed = reverseGraphemes(input);
  assert.equal(reversed.startsWith("😎"), true);
  assert.equal(reversed.includes("\uFFFD"), false);
  assert.equal(graphemes(reversed)[0], "😎");
});

test("keeps ñ attached to the transformed letter", () => {
  const styled = applyMap("Niño", {
    ...fillAlphabet(0x1d400, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
    ...fillAlphabet(0x1d41a, "abcdefghijklmnopqrstuvwxyz"),
  });
  assert.notEqual(styled, "Niño");
  assert.equal(styled.normalize("NFD").includes("\u0303"), true);
  assert.equal(styled.includes("\uFFFD"), false);
});

test("passes emoji through a letter map", () => {
  const styled = applyMap("A😎", SAMPLE_MAP);
  assert.equal(styled.endsWith("😎"), true);
  assert.notEqual(styled[0], "A");
});

test("caps combining marks at two per grapheme", () => {
  const styled = applyMarks("Hola", ["\u0336", "\u0338"]);
  for (const grapheme of graphemes(styled)) {
    assert.ok(combiningMarkCount(grapheme) <= 2);
  }
});

test("clamps a huge paste", () => {
  const huge = "a".repeat(800);
  assert.equal(visibleLength(clampInput(huge)), 600);
});

test("alternate case skips spaces", () => {
  assert.equal(alternateCase("ab cd"), "aB cD");
});
