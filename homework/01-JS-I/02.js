/**
 * @param {Array<number>} notas
 * @returns {number}
 */
function calcularPromedio(notas) {
  /*
    Escriba un programa que reciba un array de números llamado 'notas' y retorne su promedio:

    Entradas:
      + Parámetro notas de tipo array<number>
    Retorno:
      * Promedio de tipo number
  */
  const sum = notas.reduce(function (acumulador, elemento) {
    return acumulador + elemento; 
    
  }, 0);
 return sum / notas.length;
}

export { calcularPromedio };
