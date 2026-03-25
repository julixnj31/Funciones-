// ── Ejercicio C3: Números Mayores de 50 ─────────────────────────
// Se recorren 10 números con un ciclo for.
// Un condicional filtra los que son mayores a 50.

// Simulación de 10 números ingresados por el usuario
const numeros = [23, 67, 45, 89, 12, 55, 34, 91, 48, 73];

let resultado = "=== Números ingresados: ===\n";
resultado += numeros.join(", ") + "\n";
resultado += "─".repeat(36) + "\n";
resultado += "Números mayores a 50:\n";

let encontrados = 0;

for (let i = 0; i < 10; i++) {
  // Condicional: solo mostrar si es mayor a 50
    if (numeros[i] > 50) {
    resultado += "  Número " + (i + 1) + ": " + numeros[i] + " ✓\n";
    encontrados++;
    }
}

resultado += "─".repeat(36) + "\n";
resultado += "Total encontrados: " + encontrados;
return resultado;