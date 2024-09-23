//EJERCICIOS. FUNCION 1
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function


//FUNCION 2
function showMessage(from, text) { // parameters: from, text
    alert(from + ': ' + text);
  }
  
  showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
  showMessage('Ann', "What's up?"); // Ann: What's up? (**)


//HECHA POR MÍ.
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


  
//EJERCICIO REALIZADO EN CLASE. 20 DE SEPTIEMBRE.
  function sumar(a, b) { 
    let resultado = a + b;
    
    alert
alert("El resultado es: " + resultado);
}

// Llamar a la función
sumar(10, 11);  // Esto mostrará un alert con el resultado: El resultado es: 8
  
  
  
  
  