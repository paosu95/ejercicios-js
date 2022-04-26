import { assertEquals } from "asserts";
import { parteDecimal } from "../07.js";

Deno.test("Parte decimal", () => {
  const decimal1 = parteDecimal(4.5);
  const decimal2 = parteDecimal(-1.19);
  const decimal3 = parteDecimal(8.65);

  assertEquals(decimal1?.toFixed(2), "0.50");
  assertEquals(decimal2?.toFixed(2), "0.19");
  assertEquals(decimal3?.toFixed(2), "0.65");
});
