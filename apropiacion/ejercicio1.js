// ── Ejercicio C1: Múltiplos de 3 del 1 al 20 ────────────────────
// Se recorren los números del 1 al 20 con un ciclo for.
// Dentro del ciclo, un condicional verifica si el número
// es múltiplo de 3 usando el operador módulo (%).

function obtenerMultiplos() {
    let resultado = "Números del 1 al 20 — Solo múltiplos de 3:\n";
    resultado += "─".repeat(40) + "\n";

    for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        resultado += "  " + i + " ✓ (múltiplo de 3)\n";
    }
    }

    resultado += "─".repeat(40) + "\n";
    resultado += "Múltiplos encontrados: 3, 6, 9, 12, 15, 18";

    return resultado;
}

console.log(obtenerMultiplos());