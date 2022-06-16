/**
 * @param {string} str
 * @returns {boolean}
 */
function esPalindromo(str) {
  /*
    Escriba un programa que reciba una palabra de tipo string y determine si es un palindromo o no:

    Condiciones:
      + Desarrollar este programa usando recursividad

    Entradas:
      + Parámetro str de tipo string
    Retorno:
      * Un boolean indicando si es o no un palindromo
  */
 if(str.length === 1){
  return true;
 }
 return str.at(0) === str.at(-1) && esPalindromo(str.slice(1,-1));

}

export { esPalindromo };
