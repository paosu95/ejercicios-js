import { assertEquals } from "asserts";
import { esPalindromo } from "../01.js";

Deno.test("Palindromo", () => {
  const p1 = esPalindromo("bob");
  const p2 = esPalindromo("patricio");
  const p3 = esPalindromo("sometemos");
  const p4 = esPalindromo("arenera");
  const p5 = esPalindromo("santiago");
  const p6 = esPalindromo("pocillo");

  assertEquals(p1, true);
  assertEquals(p2, false);
  assertEquals(p3, true);
  assertEquals(p4, true);
  assertEquals(p5, false);
  assertEquals(p6, false);
});
