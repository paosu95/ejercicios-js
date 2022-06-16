import { assertEquals } from "asserts";
import { sumarRango } from "../02.js";

Deno.test("Sumar Rango", () => {
  const s1 = sumarRango(1, 6);
  const s2 = sumarRango(8, 4);
  const s3 = sumarRango(-3, -6);
  const s4 = sumarRango(-3, 1);
  const s5 = sumarRango(7, 16);

  assertEquals(s1, 21);
  assertEquals(s2, 30);
  assertEquals(s3, -18);
  assertEquals(s4, -5);
  assertEquals(s5, 115);
});
