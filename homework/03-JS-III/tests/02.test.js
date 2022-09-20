import { assertEquals, assertInstanceOf } from "asserts";
import { getStudents, insertStudent } from "../db.js";

const students = getStudents();

Deno.test("insertStudent()", async (t) => {
  await t.step("Inserta un estudiante al array de estudiantes", () => {
    insertStudent({ firstName: "Santiago", lastName: "Aguilar" });
    assertEquals(students.length, 1);
  });

  await t.step("El estudiante debe tener un (id)", () => {
    assertEquals(students[0].id, 1);
  });

  await t.step("El estudiante debe tener un nombre (firstName)", () => {
    assertEquals(typeof students[0].firstName, "string");
    assertEquals(students[0].firstName, "Santiago");
  });

  await t.step("El estudiante debe tener un apellido (lastName)", () => {
    assertEquals(typeof students[0].lastName, "string");
    assertEquals(students[0].lastName, "Aguilar");
  });

  await t.step("El estudiante debe tener un array vacio de (languages)", () => {
    assertInstanceOf(students[0].languages, Array);
    assertEquals(students[0].languages.length, 0);
  });
});
