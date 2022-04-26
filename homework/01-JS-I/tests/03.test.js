import { assertEquals } from "asserts";
import { centimetrosAPulgadas } from "../03.js";

Deno.test("Centímetros a pulgadas", () => {
  const pulgadas1 = centimetrosAPulgadas(45);
  const pulgadas2 = centimetrosAPulgadas(19);
  const pulgadas3 = centimetrosAPulgadas(32);

  assertEquals(pulgadas1?.toFixed(2), "17.72");
  assertEquals(pulgadas2?.toFixed(2), "7.48");
  assertEquals(pulgadas3?.toFixed(2), "12.60");
});
