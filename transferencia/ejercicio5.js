// ── Ejercicio 5: Tienda de Productos ─────────────────────────────

const LIMITE_DESCUENTO = 100000;
const PORCENTAJE_DESC  = 0.10;

// Productos en el carrito
const carrito = [
  { nombre: "Cuaderno",    precio: 8500,  cantidad: 3 },
  { nombre: "Lapiceros",   precio: 1500,  cantidad: 10 },
  { nombre: "Maletín",     precio: 75000, cantidad: 1 },
  { nombre: "Calculadora", precio: 35000, cantidad: 1 },
];

let resultado = "=== Resumen de Compra ===\n";
resultado += "─".repeat(38) + "\n";

let totalBruto = 0;

// Ciclo para registrar cada producto
for (let p of carrito) {
  let subtotal = p.precio * p.cantidad;
  totalBruto += subtotal;
  resultado += p.nombre.padEnd(14) +
    "$" + p.precio.toLocaleString() +
    " x " + p.cantidad +
    " = $" + subtotal.toLocaleString() + "\n";
}

resultado += "─".repeat(38) + "\n";
resultado += "Total bruto:    $" + totalBruto.toLocaleString() + "\n";

// Condicional: aplicar descuento si supera el límite
if (totalBruto > LIMITE_DESCUENTO) {
  let descuento  = totalBruto * PORCENTAJE_DESC;
  let totalFinal = totalBruto - descuento;
  resultado += "Descuento 10%: -$" + descuento.toLocaleString() + "\n";
  resultado += "Total a pagar:  $" + totalFinal.toLocaleString() + "\n";
} else {
  resultado += "Total a pagar:  $" + totalBruto.toLocaleString() + "\n";
  resultado += "(Sin descuento aplicado)\n";
}

return resultado;