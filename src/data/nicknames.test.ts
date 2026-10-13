import assert from "node:assert/strict";
import test from "node:test";
import { NICK_CATEGORIES, NICK_LIMIT, NICK_PREVIEW, NICK_TOTAL } from "./nicknames.ts";

test("el catálogo llega a mil nombres, sesenta por categoría", () => {
  assert.ok(NICK_TOTAL >= 1000);
  assert.equal(NICK_CATEGORIES.length, 17);
  for (const category of NICK_CATEGORIES) {
    assert.equal(category.names.length, 60, category.id);
    const unique = new Set(category.names.map((nick) => nick.text));
    assert.equal(unique.size, 60, category.id);
  }
});

test("cada nombre tiene estilo, largo y una vista previa de doce", () => {
  assert.equal(NICK_PREVIEW, 12);
  const fitting = NICK_CATEGORIES.flatMap((category) => category.names).filter((nick) => !nick.over);
  assert.ok(fitting.length >= 200);
  for (const category of NICK_CATEGORIES) {
    assert.equal(category.fits, category.names.filter((nick) => nick.length <= NICK_LIMIT).length);
    for (const nick of category.names) {
      assert.ok(nick.text.length > 0);
      assert.ok(nick.style.length > 0);
      assert.equal(nick.over, nick.length > NICK_LIMIT);
    }
  }
});
