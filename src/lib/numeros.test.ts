import assert from "node:assert/strict";
import test from "node:test";
import { numeroALetras, parseNumero } from "./numeros.ts";

test("spells common Spanish numbers", () => {
  const cases: Array<[number, string]> = [
    [0, "cero"],
    [1, "uno"],
    [15, "quince"],
    [16, "dieciséis"],
    [21, "veintiuno"],
    [22, "veintidós"],
    [26, "veintiséis"],
    [30, "treinta"],
    [31, "treinta y uno"],
    [100, "cien"],
    [101, "ciento uno"],
    [200, "doscientos"],
    [1000, "mil"],
    [1001, "mil uno"],
    [1100, "mil cien"],
    [2000, "dos mil"],
    [21000, "veintiún mil"],
    [21001, "veintiún mil uno"],
    [22000, "veintidós mil"],
    [31000, "treinta y un mil"],
    [101000, "ciento un mil"],
    [999999, "novecientos noventa y nueve mil novecientos noventa y nueve"],
  ];
  for (const [value, expected] of cases) {
    assert.equal(numeroALetras(value), expected);
  }
});

test("rejects numbers outside the converter range", () => {
  assert.equal(numeroALetras(-1), null);
  assert.equal(numeroALetras(1_000_000), null);
  assert.equal(numeroALetras(1.5), null);
  assert.equal(parseNumero(""), null);
  assert.equal(parseNumero("1e2"), null);
  assert.equal(parseNumero("-3"), null);
  assert.equal(parseNumero("21"), 21);
  assert.equal(parseNumero("000"), 0);
});
