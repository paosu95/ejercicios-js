import { assertEquals } from "asserts";
import { calcularPromedio } from "../02.js";

Deno.test("Promedio de notas", () => {
  const promedio1 = calcularPromedio([55, 71, 46, 87]);
  const promedio2 = calcularPromedio([14, 58, 63, 20]);
  const promedio3 = calcularPromedio([98, 23, 11, 59]);

  assertEquals(promedio1, 64.75);
  assertEquals(promedio2, 38.75);
  assertEquals(promedio3, 47.75);
});
