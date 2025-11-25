function obtenerNombre() {
  return "Sergio Chávez"; // pon aquí exactamente como quieras que salga tu nombre
}

// Export para Node (tests)
if (typeof module !== "undefined") {
  module.exports = obtenerNombre;
}
