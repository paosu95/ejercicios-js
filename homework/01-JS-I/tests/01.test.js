import { assertEquals } from "asserts";
import { areaCirculo, perimetroCirculo } from "../01.js";

Deno.test("Área de un círculo", () => {
  const area1 = areaCirculo(5);
  const area2 = areaCirculo(9);
  const area3 = areaCirculo(16);

  assertEquals(area1?.toFixed(2), "78.54");
  assertEquals(area2?.toFixed(2), "254.47");
  assertEquals(area3?.toFixed(2), "804.25");
});

Deno.test("Perímetro de un círculo", () => {
  const perimetro1 = perimetroCirculo(5);
  const perimetro2 = perimetroCirculo(9);
  const perimetro3 = perimetroCirculo(16);

  assertEquals(perimetro1?.toFixed(2), "31.42");
  assertEquals(perimetro2?.toFixed(2), "56.55");
  assertEquals(perimetro3?.toFixed(2), "100.53");
});
