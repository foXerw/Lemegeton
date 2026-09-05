const assert = require("node:assert");
const data = require("../js/data.js");

const RANKS = new Set(["King", "Duke", "Prince", "Marquis", "Earl", "Knight", "President"]);

assert.ok(Array.isArray(data.DEMONS), "DEMONS must be an array");
assert.strictEqual(data.DEMONS.length, 72, "must contain exactly 72 demons");

const seen = new Set();
for (const d of data.DEMONS) {
  assert.ok(Number.isInteger(d.no) && d.no >= 1 && d.no <= 72, `no out of range: ${d.no}`);
  assert.ok(!seen.has(d.no), `duplicate no: ${d.no}`);
  seen.add(d.no);
  for (const key of ["name", "zhName", "powers", "powersEn", "desc", "descEn"]) {
    assert.strictEqual(typeof d[key], "string", `field ${key} must be string (no ${d.no})`);
    assert.ok(d[key].trim().length > 0, `field ${key} must be non-empty (no ${d.no})`);
  }
  assert.ok(Array.isArray(d.altNames), `altNames must be array (no ${d.no})`);
  assert.ok(Array.isArray(d.rankEn) && d.rankEn.length >= 1, `rankEn must be non-empty array (no ${d.no})`);
  assert.ok(Array.isArray(d.rankZh) && d.rankZh.length === d.rankEn.length, `rankZh must align with rankEn (no ${d.no})`);
  for (const r of d.rankEn) assert.ok(RANKS.has(r), `invalid rank ${r} (no ${d.no})`);
}

for (const b of data.BOOKS) {
  for (const key of ["key", "titleEn", "titleZh", "summary", "summaryEn"]) {
    assert.strictEqual(typeof b[key], "string", `book field ${key} must be string`);
    assert.ok(b[key].trim().length > 0, `book field ${key} must be non-empty`);
  }
}

assert.ok(Array.isArray(data.ANGELS), "ANGELS must be an array");
assert.strictEqual(data.ANGELS.length, 72, "must contain exactly 72 angels");
const seenAngels = new Set();
for (const a of data.ANGELS) {
  assert.ok(Number.isInteger(a.no) && a.no >= 1 && a.no <= 72, `angel no out of range: ${a.no}`);
  assert.ok(!seenAngels.has(a.no), `duplicate angel no: ${a.no}`);
  seenAngels.add(a.no);
  for (const key of ["name", "zhName", "attribute", "attributeEn"]) {
    assert.strictEqual(typeof a[key], "string", `angel field ${key} must be string (no ${a.no})`);
    assert.ok(a[key].trim().length > 0, `angel field ${key} must be non-empty (no ${a.no})`);
  }
}

console.log("OK: 72 demons + 5 books + 72 angels validated");
