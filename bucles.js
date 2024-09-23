// TAREA #1 ¿Cuál es el último valor que indica este código?

let i = 3; // El ultimo valor que imprime este codigo es el 1, porque va en bucle desde 3 hacia atras, finalizando en 1.

while (i) {
  alert( i-- );
}



//TAREA #2

 /*SE DECLARA UNA VARIABLE "U" Y USAMOS UN BUCLE WHILE CON EL PREFIJO, VA INCREMENTANDO MIENTRAS SEA MENOR A 5, AL LLEGAR A 4, 
SE DETIENE EL BUCLE, FUNCIONA DE ESTA FORMA YA QUE LA CONDICION SE EVALUA ANTES DE IMPRIMIRLA*/
let U = 0;
while (++U < 5) 
    alert( U );

//POSTFIJA.

 /*SE DECLARA UNA VARIABLE "b" Y USAMOS UN BUCLE WHILE CON EL POSTFIJO, VA INCREMENTANDO MIENTRAS SEA MENOR A 5, AL LLEGAR A 5, 
SE DETIENE EL BUCLE, FUNCIONA DE ESTA FORMA YA QUE LA CONDICION SE EVALUA DESPUES DE IMPRIMIRLA*/
let o= 0;
while (o++ < 5) 
    alert( o );

// TAREA #3
for (let p = 0; p < 5; ++p) alert( p ); //ESTA ES LA FORMA EN LA QUE PODEMOS IMPRIMIR LA FORMA PREFIJA, USANDO UN FOR.

for (let p = 0; p < 5; p++) alert( p ); // ESTA ES LA FORMA EN LA QUE PODEMOS IMPRIMIR LA FORMA POSFIJA, USANDO UN FOR.


//TAREA #4

for (let k = 2; k <= 10; k++) { // CON ESTE BUCLE PODEMOS IMPRIMIR LOS NUMEROS PARES DEL 2 AL 10.
  if (k % 2 == 0) {
    alert( k );
  }
}

// TAREA #5
let num;   // CON ESTE BUCLE, PODEMOS SOLICITAR UN NUMERO HASTA QUE EL VISITANTE INTRODUZCA UN NUMERO MAYOR QUE O QUE CANCELE LA ENTRADA O INTRODUZCA UNA LINEA VACIA.
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);


// TAREA #6

let n = 10;  //Escriba el código que genera números primos en el intervalo de 2 a n.

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i );
}

// TAREA #7
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}


for (let h = 1; h <= 10; h++) {
  alert(`2 x ${h} = ${2 * h}`);
}