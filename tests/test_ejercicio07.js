function esPar(numero) {
  return numero % 2 === 0;
}

if (typeof module !== "undefined") {
  module.exports = esPar;
}
