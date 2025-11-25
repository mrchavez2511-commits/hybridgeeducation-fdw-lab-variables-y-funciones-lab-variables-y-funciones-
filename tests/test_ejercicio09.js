function calcularPromedio(a, b, c, d, e) {
  return (a + b + c + d + e) / 5;
}

if (typeof module !== "undefined") {
  module.exports = calcularPromedio;
}
