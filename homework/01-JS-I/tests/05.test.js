import { assertEquals } from "asserts";
import { pitagoras } from "../05.js";

Deno.test("Pitagoras", () => {
  const hipotenusa1 = pitagoras(7, 5);
  const hipotenusa2 = pitagoras(6.1, 18);
  const hipotenusa3 = pitagoras(25.45, 25.45);

  assertEquals(hipotenusa1?.toFixed(2), "8.60");
  assertEquals(hipotenusa2?.toFixed(2), "19.01");
  assertEquals(hipotenusa3?.toFixed(2), "35.99");
});
