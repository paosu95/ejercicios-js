/**
 * @param {number} numero1
 * @param {number} numero2
 * @returns {number}
 */
function sumarRango(numero1, numero2) {
  /*
      Escriba un programa que reciba 2 números (numero1 y numero2) y calcule la suma del rango de estos:

      Ejemplo 1:
        numero1 = 1
        numero2 = 6

        retorne -> 21 porque 1 + 2 + 3 + 4 + 5 + 6 = 21

      Ejemplo 2:
        numero1 = 8
        numero2 = 4

        retorne -> 30 porque 8 + 7 + 6 + 5 + 4 = 30

      Ejemplo 3:
        numero1 = -3
        numero2 = -6

        retorne -> -18 porque -3 + -4 + -5 + -6 = -18

      Ejemplo 4:
        numero1 = -3
        numero2 = 1

        retorne -> -5 porque -3 + -2 + -1 + 0 + 1 = -5

      Condiciones:
        + Desarrollar este programa usando recursividad

      Entradas:
        + Parámetro numero1 de tipo number
        + Parámetro numero2 de tipo number
      Retorno:
        * La suma del rango de tipo number
    */

      if(numero1 < numero2){  // 2       //5        // 2345= 14
        return sumarRango(numero1 + 1, numero2) + numero1;
      }else if(numero1 === numero2){
        return numero1
      }

      if(numero1 > numero2){
        return sumarRango(numero1, numero2 + 1) + numero2;
      }
}

export { sumarRango };
