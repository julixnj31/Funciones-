// ── Ejercicio 2: Tabla de Multiplicar Personalizada ───────────────

function tablaMultiplicar(numero) {
    let resultado = "=== Tabla del " + numero + " ===\n";

    for (let i = 1; i <= 12; i++) {
    let producto = numero * i;
    // padStart alinea los números para que se vea ordenado
    resultado += numero + " x " + String(i).padStart(2, " ") + " = " + producto + "\n";
    }
    return resultado;
}

// Ejemplo: tabla del 7
let numero = 7;
return tablaMultiplicar(numero);