/**
 * @param {number} radio
 * @returns {number}
 */
function areaCirculo(radio) {
  /*
    Escriba un programa que reciba el radio de un círculo y retorne su área:

    Entradas:
      + Parámetro radio de tipo number
    Retorno:
      * Área del radio de tipo number
  */
 const pi = Math.PI;
 return pi * radio * radio;

 

}

/**
 * @param {number} radio
 * @returns {number}
 */
function perimetroCirculo(radio) {
  /*
    Escriba un programa que reciba el radio de un círculo y retorne su perímetro:

    Entradas:
      + Parámetro radio de tipo number
    Retorno:
      * Perímetro del radio de tipo number
  */
 const pi = Math.PI

 return pi *radio *2;
 
}

export { areaCirculo, perimetroCirculo };
