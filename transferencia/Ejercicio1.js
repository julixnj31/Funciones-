// ── Ejercicio 1: Números Primos entre 1 y 50 ──────────────────────

// Función que verifica si un número es primo
function esPrimo(n) {
  if (n < 2) return false; // Números menores a 2 no son primos

  // Verificar divisores desde 2 hasta la raíz cuadrada de n
    for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false; // Encontró un divisor → no es primo
    }
  return true; // No encontró divisores → es primo
}

// Recorrer del 1 al 50 e imprimir los primos
let resultado = "Números primos entre 1 y 50:\n";
let primos = [];

for (let num = 1; num <= 50; num++) {
    if (esPrimo(num)) {
    primos.push(num);
    }
}

resultado += primos.join(", ");
resultado += "\n\nTotal encontrados: " + primos.length;
return resultado;