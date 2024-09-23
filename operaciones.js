// TAREA #1
let a = 1, b = 1;

alert( ++a ); // 2, prefijo, muestra el valor incrementado, y luego el valor original.
alert( b++ ); // 1, postfijo, muestra el valor original, y luego lo incrementa.

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once


//TAREA #2
let ab = 2; // ACÁ ESTAMOS DECLARANDO UNA VARIABLE

let x = 1 + (ab *= 2); // ACÁ CREAMOS UNA OPERACIÓN DENTOR DE PARENTESIS, Y LUEGO FUERA DE EL, LO CUAL "ab=4" y "x+1=5"



// TAREA #3
alert('"" + 1 + 0 = ' + ("" + 1 + 0)); // "10" (1)

alert
alert('"" - 1 + 0 = ' + ("" - 1 + 0)); // -1 (2)
alert('true + false = ' + (true + false)); // 1
alert('6 / "3" = ' + (6 / "3")); // 2
alert('"2" * "3" = ' + ("2" * "3")); // 6
alert('4 + 5 + "px" = ' + (4 + 5 + "px")); // "9px"

alert
alert('"$" + 4 + 5 = ' + ("$" + 4 + 5)); // "$45"
alert('"4" - 2 = ' + ("4" - 2)); // 2
alert('"4px" - 2 = ' + ("4px" - 2)); // NaN

alert
alert('"  -9  " + 5 = ' + ("  -9  " + 5)); // "  -9  5" (3)


//TAREA #4
let s = prompt("First number?", 1);
let j = prompt("Second number?", 2);

alert(+s + +j); // 3