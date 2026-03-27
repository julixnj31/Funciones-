// ── Ejercicio 3: Cajero Automático ───────────────────────────────

const SALDO_INICIAL = 500000;
let saldo = SALDO_INICIAL;
let resultado = "Saldo inicial: $" + saldo.toLocaleString() + "\n";
resultado += "─".repeat(35) + "\n";

// Simulación de intentos de retiro
const retiros = [100000, 250000, 200000, 50000, 300000];

for (let intento of retiros) {
    resultado += "\nIntento de retiro: $" + intento.toLocaleString() + "\n";

    if (intento <= 0) {
    resultado += "  ✗ Error: el monto debe ser mayor a cero.\n";
    } else if (intento > saldo) {
    // Condicional: no se permite si supera el saldo
    resultado += "  ✗ Saldo insuficiente.\n";
    resultado += "  Saldo disponible: $" + saldo.toLocaleString() + "\n";
    } else {
    saldo -= intento; // Descontar del saldo
    resultado += "  ✓ Retiro exitoso.\n";
    resultado += "  Nuevo saldo: $" + saldo.toLocaleString() + "\n";
    }

    if (saldo === 0) {
    resultado += "\n  ⚠ Saldo agotado.";
    break; // Terminar el ciclo
    }
}

resultado += "\n" + "─".repeat(35);
resultado += "\nSaldo final: $" + saldo.toLocaleString();
return resultado;