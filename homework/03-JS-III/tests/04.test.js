import { assertObjectMatch, assertThrows } from "asserts";
import { getStudentByID, insertStudent, updateStudent } from "../db.js";

Deno.test("updateStudent()", async (t) => {
  insertStudent({ firstName: "Hector", lastName: "Triana" });
  insertStudent({ firstName: "Deisy", lastName: "Martinez" });
  insertStudent({ firstName: "paul", lastName: "Murcia" });

  await t.step("Actualiza un estudiante por (id)", () => {
    updateStudent({ firstName: "Jean Paul", languages: ["Javascript"] }, 3);

    assertObjectMatch(getStudentByID(3), {
      firstName: "Jean Paul",
      lastName: "Murcia",
      languages: ["Javascript"],
    });
  });

  await t.step("Si un estudiante no existe, lance una excepción", () => {
    assertThrows(
      () => {
        updateStudent({}, 5);
      },
      Error,
      "Estudiante no encontrado con el id 5",
    );
  });
});
