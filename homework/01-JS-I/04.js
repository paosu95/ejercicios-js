/**
 * @param {number} numero
 * @returns {number}
 */
function numeroInvertido(numero) {
  /*
    Escriba un programa que reciba un número y lo retorne invertido:

    Ejemplo:
        Numero:     345
        Invertido:  543

    Entradas:
      + Parámetro numero de tipo number
    Retorno:
      * Número invertido de tipo number
  */
  const nuevoNumero = numero.toString().split("").reverse().join("");
  return Number(nuevoNumero);
}

export { numeroInvertido };
