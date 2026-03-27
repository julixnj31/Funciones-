// Simulación de entrada de datos
let personas = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 20 },
  { nombre: "María", edad: 18 },
  { nombre: "Pedro", edad: 25 },
  { nombre: "Sofía", edad: 15 }
];

for (let i = 0; i < personas.length; i++) {
  if (personas[i].edad >= 18) {
    console.log(personas[i].nombre + " tiene " + personas[i].edad + " años");
  }
}
