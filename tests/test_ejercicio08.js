function concatenarCadenas(cadena1, cadena2) {
  return cadena1 + " " + cadena2;
}

if (typeof module !== "undefined") {
  module.exports = concatenarCadenas;
}
