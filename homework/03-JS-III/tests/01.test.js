import { assertEquals, assertInstanceOf } from "asserts";
import { getStudents } from "../db.js";

Deno.test("getStudents()", async (t) => {
  await t.step("Retorna el array de estudiantes", () => {
    const students = getStudents();
    assertEquals(students, []);
    assertInstanceOf(students, Array);
  });
});
