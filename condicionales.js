//TAREA#1

if ("0") { //Cualquier cadena excepto una vacía (y "0"que no esté vacía) pasa a estar true en el contexto lógico.
    alert( 'Condicionales' );
  }


 //TAREA#3
  let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}


//TAREA #4
//Reescribe esto ifusando el operador condicional '?':
let resultado;

if (a + b < 4) {
  resultado = 'Below';
} else {
  resultado = 'Over';
}


//SOLUCION
let result = (a + b < 4) ? 'Below' : 'Over';


// TAREA #5
//Reescribir if..else utilizando múltiples operadores ternarios '?'.
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

//SOLUCION
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

  