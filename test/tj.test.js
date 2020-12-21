"use strict";

const assert = require("assert");
const CyrillicToTranslit = require("../CyrToLatTranslit");

describe("tj", () => {
  it("matches https://translate.google.com/?sl=tg&tl=en&op=translate", () => {
    const c2t = new CyrillicToTranslit({ preset: "tj" });

    assert.equal(c2t.transform("салом"), "salom");
    assert.equal(c2t.transform("хайр"), "khayr");
    assert.equal(c2t.transform("Раҳмат"), "Rahmat");
    assert.equal(c2t.transform("Ҷава"), "Java");
    assert.equal(c2t.transform("Аҳмад"), "Ahmad");
  });

  it("should transform with punctuations", () => {
    const c2t = new CyrillicToTranslit({ preset: "tj" });

    assert.equal(c2t.transform("Салом Аҳмад","-"), "Salom-Ahmad");
    assert.equal(c2t.transform("Салом Аҳмад","+"), "Salom+Ahmad");
    assert.equal(c2t.transform("Салом Аҳмад","_"), "Salom_Ahmad");
  });

});
