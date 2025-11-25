function invertirCadena(cadena) {
  // convertimos a array, invertimos, regresamos a string
  return cadena.split("").reverse().join("");
}

if (typeof module !== "undefined") {
  module.exports = invertirCadena;
}
