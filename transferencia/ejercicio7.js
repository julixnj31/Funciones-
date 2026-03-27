// Ejercicio 7 – Contador de pares e impares

function esPar(numero) {
  return numero % 2 === 0;
}

function contarParesImpares(numeros) {
  let pares = 0;
  let impares = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (esPar(numeros[i])) {
      pares++;
    } else {
      impares++;
    }
  }

  return { pares, impares };
}

// Programa principal
function main() {
  let numeros = [];
  for (let i = 0; i < 10; i++) {
    let entrada = prompt(`Ingrese el número ${i + 1}:`);
    numeros.push(parseInt(entrada));
  }

  let resultado = contarParesImpares(numeros);

  console.log(`Cantidad de números pares: ${resultado.pares}`);
  console.log(`Cantidad de números impares: ${resultado.impares}`);
}

// Ejecutar el programa
main();
