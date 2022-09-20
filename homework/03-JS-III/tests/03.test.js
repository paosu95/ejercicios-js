import { assertObjectMatch, assertThrows } from "asserts";
import { getStudentByID, insertStudent } from "../db.js";

Deno.test("getStudentByID()", async (t) => {
  insertStudent({ firstName: "Gina", lastName: "Suarez" });
  insertStudent({ firstName: "Edilma", lastName: "Rodriguez" });
  insertStudent({ firstName: "Camilo", lastName: "Suarez" });
  insertStudent({ firstName: "Laura", lastName: "Rodriguez" });

  await t.step("Obtiene un estudiante por (id)", () => {
    assertObjectMatch(getStudentByID(2), {
      firstName: "Edilma",
      lastName: "Rodriguez",
    });

    assertObjectMatch(getStudentByID(4), {
      firstName: "Laura",
      lastName: "Rodriguez",
    });
  });

  await t.step("Si un estudiante no existe, lance una excepción", () => {
    assertThrows(
      () => {
        getStudentByID(5);
      },
      Error,
      "Estudiante no encontrado con el id 5",
    );
  });
});
