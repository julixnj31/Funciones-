// ── Ejercicio 4: Promedio de Notas ───────────────────────────────

function evaluarEstudiante(nombre, notas) {
  // Sumar todas las notas con un ciclo
  let suma = 0;
  for (let nota of notas) {
    suma += nota;
  }

  let promedio = suma / notas.length;

  // Condicional para determinar si aprueba
  let estado = promedio >= 3.0 ? "APROBADO " : "REPROBADO ";

  return nombre.padEnd(16) + "| Promedio: " +
         promedio.toFixed(2) + " → " + estado;
}

// Datos de 5 estudiantes
const estudiantes = [
  { nombre: "Ana García",   notas: [3.5, 4.0, 3.8] },
  { nombre: "Luis Pérez",   notas: [2.5, 2.8, 3.0] },
  { nombre: "María Torres", notas: [4.5, 4.8, 5.0] },
  { nombre: "Carlos Ruiz",  notas: [1.5, 2.0, 2.5] },
  { nombre: "Sofía Medina", notas: [3.0, 3.2, 2.9] },
];

let resultado = "=== Resultado de Notas ===\n";
resultado += "─".repeat(40) + "\n";

// Ciclo para recorrer cada estudiante
for (let est of estudiantes) {
  resultado += evaluarEstudiante(est.nombre, est.notas) + "\n";
}

return resultado;