// ── Ejercicio C2: Ingreso de 5 Estudiantes ──────────────────────
// Se usa un ciclo for para los 5 estudiantes.
// Un condicional verifica si cada uno trae carné.

// Simulación de estudiantes (true = trae carné, false = no trae)
const estudiantes = [
    { nombre: "Carlos",  carne: true  },
    { nombre: "María",   carne: false },
    { nombre: "Luis",    carne: true  },
    { nombre: "Ana",     carne: false },
    { nombre: "Sofía",   carne: true  },
];

let resultado = "=== Control de Ingreso al Salón ===\n";
resultado += "─".repeat(36) + "\n";

for (let i = 0; i < estudiantes.length; i++) {
    let est = estudiantes[i];
    resultado += "\nEstudiante " + (i + 1) + ": " + est.nombre + "\n";

  // Condicional: verificar si trae carné
    if (est.carne) {
    resultado += "  ✓ Trae carné → INGRESA\n";
    } else {
    resultado += "  ✗ No trae carné → NO INGRESA\n";
    resultado += "  (El ciclo continúa con el siguiente)\n";
    }
}

resultado += "\n" + "─".repeat(36);
return resultado;