// ── Ejercicio C4: Cajero Automático ─────────────────────────────
// Se usa un ciclo while que se repite mientras haya saldo.
// Un condicional verifica si el retiro es posible antes
// de descontar del saldo.

let saldo = 1000000; // Saldo inicial
let resultado = "=== Cajero Automático ===\n";
resultado += "Saldo inicial: $" + saldo.toLocaleString() + "\n";
resultado += "─".repeat(34) + "\n";

// Simulación de retiros solicitados
const retiros = [300000, 200000, 400000, 250000, 100000];
let i = 0;

// Ciclo while: continúa mientras haya saldo mayor a 0
while (saldo > 0 && i < retiros.length) {
  let monto = retiros[i];
  resultado += "\nRetiro solicitado: $" + monto.toLocaleString() + "\n";

  // Condicional: verificar si el monto es posible
  if (monto <= saldo) {
    saldo -= monto;
    resultado += "  ✓ Retiro exitoso\n";
    resultado += "  Saldo restante: $" + saldo.toLocaleString() + "\n";
  } else {
    resultado += "  ✗ Saldo insuficiente\n";
    resultado += "  Saldo disponible: $" + saldo.toLocaleString() + "\n";
  }

  i++;
}

resultado += "\n" + "─".repeat(34);
resultado += "\nSaldo final: $" + saldo.toLocaleString();
return resultado;