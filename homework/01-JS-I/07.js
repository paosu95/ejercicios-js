/**
 * @param {number} numeroReal
 * @returns {number}
 */
function parteDecimal(numeroReal) {
  /*
    Escriba un programa que reciba un número real y solamente retorne su parte decimal:

    Ejemplo 1:
        numeroReal = 4.5
        retorne -> 0.5

    Ejemplo 2:
        numeroReal = -1.19
        retorne -> 0.19

    Entradas:
      + Parámetro numeroReal de tipo number
    Retorno:
      * Parte decimal de tipo number
  */
 
 numeroReal = Math.abs(numeroReal)
 
 const numeroDecimal = numeroReal - Math.floor(numeroReal);
 return numeroDecimal;

}

export { parteDecimal };
