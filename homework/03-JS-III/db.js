/*
      El array (students) va a contener estudiantes con la siguiente estructura:

      {
        id: number;
        firstName: string;
        lastName: string;
        languages: string[];
      }

      La propiedad (id) será de tipo number
      La propiedad (firstName) será de tipo string
      La propiedad (lastName) será de tipo string
      La propiedad (languages) será de tipo string[] o array de strings

      El array (students) se declara como constante y debe mantenerse así.
*/

/**
 * @typedef Student
 * @property {number} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string[]} languages
 */

/** @type {Student[]} */
const students = [];

/** Utilizar este counter para generar los (id) de los estudiantes */
let counter = 1;

/**
 * Retorne el array de estudiantes (students)
 * @returns {Student[]}
 */
export function getStudents() {
}

/**
 * Crear un nuevo estudiante con su respectivo (id) y (languages), luego agregarlo al array de estudiantes (students).
 * Tener en cuenta que el parámetro (student) NO CONTIENE (id) ni (languages).
 * Para el (id) este debe crearse junto con la variable (counter).
 * Para (languages) se debe inicializar como un array vacio []
 * @param {Student} student
 */
export function insertStudent(student) {
}

/**
 * Retorne un estudiante con su respectivo (id).
 * En el caso de no encontrarlo, lanzar una excepción con el mensaje "Estudiante no encontrado con el id ${id}"
 * @param {number} id
 * @returns {Student}
 */
export function getStudentByID(id) {
}

/**
 * Actualice un estudiante (student) con su respectivo (id).
 * El estudiante (student) puede no contener todas sus propiedades, así que actualizarlo de acuerdo a las que se pasen.
 * Por ejemplo si el estudiante tiene (firstName) y (lastName), solo actualizar estas.
 * En el caso de no encontrarlo, lanzar una excepción con el mensaje "Estudiante no encontrado con el id ${id}"
 * @param {Student} student
 * @param {number} id
 */
export function updateStudent({ firstName, lastName, languages }, id) {
}

/**
 * Elimine un estudiante con su respectivo (id).
 * Para esta función no usar Array.prototype.filter, porque (students) es constante.
 * Pistas: Array.prototype.splice y Array.prototype.findIndex pueden ser de utilidad.
 * En el caso de no encontrarlo, lanzar una excepción con el mensaje "Estudiante no encontrado con el id ${id}"
 * @param {number} id
 * @returns {Student}
 */
export function deleteStudent(id) {
}

/**
 * Agregar nuevos lenguajes a un estudiante pasado por (id).
 * En el caso que el estudiante tenga estos lenguajes ["C#", "Java"] y se pase en (languajes) ["Ruby"].
 * Para ese estudiante deben quedar estos lenguajes ["C#", "Java", "Ruby"].
 * En el caso de no encontrarlo, lanzar una excepción con el mensaje "Estudiante no encontrado con el id ${id}"
 * @param {string[]} languages
 * @param {number} id
 */
export function insertLanguagesToStudent(languages, id) {
}
