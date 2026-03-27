// Ejercicio 8 – Control de acceso

function validarAcceso(usuarioIngresado, contrasenaIngresada) {
  const usuarioCorrecto = "admin";
  const contrasenaCorrecta = "1234";

  return usuarioIngresado === usuarioCorrecto && contrasenaIngresada === contrasenaCorrecta;
}

function main() {
  let intentos = 0;
  let accesoConcedido = false;

  while (intentos < 3 && !accesoConcedido) {
    let usuario = prompt("Ingrese su usuario:");
    let contrasena = prompt("Ingrese su contraseña:");

    if (validarAcceso(usuario, contrasena)) {
      console.log("Bienvenido");
      accesoConcedido = true;
    } else {
      console.log("Usuario o contraseña incorrectos");
      intentos++;
    }
  }

  if (!accesoConcedido) {
    console.log("Acceso denegado");
  }
}

// Ejecutar el programa
main();
