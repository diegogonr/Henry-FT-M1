// //? AND

//   A    B   AND

//   1    1    1
//   1    0    0
//   0    1    0
//   0    0    0

//   //? OR

//   A    B   OR

//   1    1    1
//   1    0    1
//   0    1    1
//   0    0    0

// XOR  ===>> EXCLUSIVELY 

// A    B    XOR

//   1    1   0
//   1    0   1
//   0    1   1
//   0    0   0

//   A    B   SUM(XOR)  CARRY(AND)

//   0    0      0         0
//   1    0      1         0
//   0    1      1         0
//   1    1      0         1

//? OR

console.log(3 || "orange");
console.log("" || "Orange");
console.log(true || 0);
console.log(undefined || null);

//? AND

console.log(0 && "Orange"); //false
console.log("" && "Orange");
console.log(true && null);
console.log("Apple" && "Orange");

//! Ejemplo de uso de operadores para toma de decisiones

// function imprimeDos(a){
//   if(a=== 2)console.log("esDos");
// }

function imprimeDos(a) {
  a === 2 && console.log("esDos");
}

imprimeDos(2);
