import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";

describe("Configuracion de test", () => {
    let dom;
  
      // lectura de nuestro html
    beforeAll(async () => {
      dom = await JSDOM.fromFile("home.html", {
        resources: "usable",
        runScripts: "dangerously",
      })
    });

    it("Existe H1", () => {
      let document = dom.window.document;
      let h1 = document.querySelector("h1");

      expect(h1).toBeInTheDocument();
    });

    
})