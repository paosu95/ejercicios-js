/**
 * @param {number} longitud
 * @returns {number}
 */
function centimetrosAPulgadas(longitud) {
  /*
    Escriba un programa que reciba una longitud en centimetros y retorne su valor en pulgadas:

    Una pulgada es igual a 2.54

    Entradas:
      + Parámetro longitud de tipo number
    Retorno:
      * Pulgadas de tipo number
  */
  const nuevaLongitud = longitud / 2.54;
  return nuevaLongitud;
}

export { centimetrosAPulgadas };
