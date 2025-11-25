function celsiusAFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

if (typeof module !== "undefined") {
  module.exports = celsiusAFahrenheit;
}
