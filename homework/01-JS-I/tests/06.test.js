import { assertEquals } from "asserts";
import { horaFutura } from "../06.js";

Deno.test("Hora futura", () => {
  const mensaje1 = horaFutura(3, 5);
  const mensaje2 = horaFutura(11, 43);
  const mensaje3 = horaFutura(15, 12);

  assertEquals(mensaje1, "En 5 horas, el reloj marcará las 8");
  assertEquals(mensaje2, "En 43 horas, el reloj marcará las 6");
  assertEquals(mensaje3, "En 12 horas, el reloj marcará las 3");
});
