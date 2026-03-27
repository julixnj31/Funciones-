let suma = 0;

for (let i = 1; i <= 100; i++) {
  suma += i;
  if (i > 90 && i % 2 === 0) {
    console.log("Se encontró un número par mayor a 90:", i);
    break;
  }
}

console.log("La suma es:", suma);
