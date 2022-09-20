import { assertObjectMatch, assertThrows } from "asserts";

import {
  getStudentByID,
  insertLanguagesToStudent,
  insertStudent,
  updateStudent,
} from "../db.js";

Deno.test("insertLanguagesToStudent()", async (t) => {
  insertStudent({ firstName: "Javier", lastName: "Florian" });

  await t.step("Agrega lenguajes a un estudiante por (id)", () => {
    updateStudent({ languages: ["C#", "Scala"] }, 1);
    insertLanguagesToStudent(["Javascript"], 1);

    assertObjectMatch(getStudentByID(1), {
      languages: ["C#", "Scala", "Javascript"],
    });
  });

  await t.step("Si un estudiante no existe, lance una excepción", () => {
    assertThrows(
      () => {
        insertLanguagesToStudent({}, 5);
      },
      Error,
      "Estudiante no encontrado con el id 5",
    );
  });
});
