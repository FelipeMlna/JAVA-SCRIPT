
function verificarAcceso() {  // ACÁ DEFINIMOS LA FUNCIÓN
  let edad = prompt("Por favor, ingresa tu edad:");

  // Convertimos la entrada a un número
  edad = Number(edad);

  if (isNaN(edad)) {
      alert("Por favor, ingresa un número válido.");
  } else if (edad >= 18) {
      alert("Es mayor de edad, puede entrar.");
  } else {
      alert("Acceso denegado, es menor de edad.");
  }
}

// Llamamos a la función
verificarAcceso();




