// ── Ejercicio C5: Competencia de Atletismo ───────────────────────
// Ciclo for externo para los 8 corredores.
// Ciclo for interno para las 4 vueltas de cada corredor.
// Condicional simula si el corredor se cansa (aleatorio).

let resultado = "=== Competencia de Atletismo ===\n";
resultado += "8 corredores · 4 vueltas cada uno\n";
resultado += "─".repeat(36) + "\n";

// Definir qué corredores se cansan y en qué vuelta
const cansancio = {
  3: 2, // Corredor 3 se cansa en vuelta 2
  6: 3, // Corredor 6 se cansa en vuelta 3
};

// Ciclo externo: recorre los 8 corredores
for (let corredor = 1; corredor <= 8; corredor++) {
  resultado += "\nCorredor " + corredor + ": ";
  let completo = true;

  // Ciclo interno: recorre las 4 vueltas
  for (let vuelta = 1; vuelta <= 4; vuelta++) {

    // Condicional: ¿se cansa en esta vuelta?
    if (cansancio[corredor] === vuelta) {
      resultado += "vuelta " + vuelta + " → SE CANSA \n";
      resultado += "           (abandona la carrera)";
      completo = false;
      break; // Interrumpe el ciclo interno
    }
  }

  if (completo) {
    resultado += "completó las 4 vueltas ✓";
  }
  resultado += "\n";
}

resultado += "─".repeat(36);
return resultado;