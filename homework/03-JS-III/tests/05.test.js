import { assertThrows } from "asserts";
import { deleteStudent, getStudentByID, insertStudent } from "../db.js";

Deno.test("deleteStudent()", async (t) => {
  insertStudent({ firstName: "Guillermo", lastName: "Aguilar" });
  insertStudent({ firstName: "Inés", lastName: "Hernández" });
  insertStudent({ firstName: "Catalina", lastName: "Aguilar" });
  insertStudent({ firstName: "Helena", lastName: "Hernández" });

  await t.step("Elimina un estudiante por (id)", () => {
    deleteStudent(4);

    assertThrows(
      () => {
        getStudentByID(4);
      },
      Error,
      "Estudiante no encontrado con el id 4",
    );
  });
});
