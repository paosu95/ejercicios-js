import { assertEquals } from "asserts";
import { numeroInvertido } from "../04.js";

Deno.test("Número invertido", () => {
  const invertido1 = numeroInvertido(345);
  const invertido2 = numeroInvertido(241);
  const invertido3 = numeroInvertido(367);

  assertEquals(invertido1, 543);
  assertEquals(invertido2, 142);
  assertEquals(invertido3, 763);
});
