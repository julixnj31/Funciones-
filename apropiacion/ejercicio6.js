// ── Ejercicio C6: Venta de 15 Boletos de Cine ───────────────────
// Ciclo for para los 15 compradores.
// Condicional verifica edad y tipo de película.

const compradores = [
  { nombre: "selena",    edad: 22, peliculaAdultos: true  },
  { nombre: "Camila",   edad: 15, peliculaAdultos: true  },
  { nombre: "yaritza",  edad: 17, peliculaAdultos: false },
  { nombre: "Ricardo",  edad: 30, peliculaAdultos: true  },
  { nombre: "Valentina",edad: 14, peliculaAdultos: true  },
  { nombre: "Andrés",   edad: 25, peliculaAdultos: false },
  { nombre: "Natalia",  edad: 16, peliculaAdultos: true  },
  { nombre: "Diego",    edad: 19, peliculaAdultos: true  },
  { nombre: "Sara",     edad: 13, peliculaAdultos: false },
  { nombre: "Miguel",   edad: 28, peliculaAdultos: true  },
  { nombre: "Isabella", edad: 15, peliculaAdultos: true  },
  { nombre: "Felipe",   edad: 21, peliculaAdultos: false },
  { nombre: "Lucia",  edad: 12, peliculaAdultos: true  },
  { nombre: "Sebastián",edad: 33, peliculaAdultos: true  },
  { nombre: "Mariana",  edad: 18, peliculaAdultos: true  },
];

let resultado = "=== Venta de Boletos de Cine ===\n";
resultado += "─".repeat(38) + "\n";
let vendidos = 0, rechazados = 0;

for (let i = 0; i < 15; i++) {
  let c = compradores[i];
  resultado += "\n" + (i+1) + ". " + c.nombre + " (" + c.edad + " años) — ";
  resultado += c.peliculaAdultos ? "Película adultos" : "Película general";
  resultado += "\n   ";

  // Condicional: menor de edad + película adultos = rechazo
  if (c.edad < 18 && c.peliculaAdultos) {
    resultado += "VENTA RECHAZADA (menor de edad)\n";
    rechazados++;
  } else {
    resultado += "BOLETO VENDIDO\n";
    vendidos++;
  }
}

resultado += "─".repeat(38) + "\n";
resultado += "Boletos vendidos:   " + vendidos + "\n";
resultado += "Ventas rechazadas:  " + rechazados;
return resultado;