//*****************************************************************
//* function recursiva
//*****************************************************************

// function recursiva() {
//   //Caso base
//   if (condicion) {
//     //Avance
//     condicion++;
//     //recursion
//     recursiva(nuevonumero);
//   } else {
//     //Corte
//     return numero;
//   }
// }

// //////////////////////////?
// function factorial(x) {
//   if (x==0 || x==1) return 1 
//   else if(x<0) return 0

//   return x * factorial(x-1);
// }

// console.log(factorial(4));


// function cuentaRegresiva(number) {
//   //avance
//   let newNumber = number - 1;
//   //Caso Base
//   if (number > 0) {
//     // number--
//     //recursion
//     console.log(newNumber);
//     cuentaRegresiva(newNumber);
//   }
// }
// cuentaRegresiva(10);


//////////////////////////?

// let comunidad = [
//   "Frodo 🙋‍♂️",
//   "Sam 🤷‍♂️",
//   "Aragorn 👑",
// ];


// function imprimeRecursiva(comunidad) {
//   if (comunidad.length) {
//     let miembro = comunidad.shift(); // Aragorn -> el metodo shift modifica el array original

//     console.log(miembro);
//     console.log(comunidad);
//     imprimeRecursiva(comunidad);
//   }
// }

// imprimeRecursiva(comunidad);




//*****************************************************************
//*************ESTRUCTURA DE DATOS**************** */
//*****************************************************************

////////////////////////////////////////////////?
////?  ARRAY
////?

// let comunidad = [
//   "Frodo 🙋‍♂️",
//   "Sam 🤷‍♂️",
//   "Aragorn 👑",
//   "Pippin 🙍‍♂️",
//   "Merry 🙆‍♂️",

// ];

// console.log(comunidad[3]);
// console.log(comunidad.length);


// let muerto = comunidad.pop();
// console.log(muerto);
// console.log(comunidad);


// comunidad.push(muerto);

// let seVanAMordor = comunidad.slice(0, 2); // no modifica el array
// console.log(seVanAMordor);

// console.log(comunidad.indexOf("Aragorn 👑"));

// // solo busca y devuelve la primera coincidencia
// let traidor = comunidad.find((element) => element === "Saruman");
// console.log(traidor);

// // busca todas las coincidencias
// let filtrados = comunidad.filter((element) => element !== "Merry 🙆‍♂️");
// console.log(filtrados);

// comunidad = filtrados;
// console.log(comunidad.find((element) => element === "Sam 🤷‍♂️"));


////////////////////////////////////////////////?
////?  SET 
////?? No se pueden repetir los elementos, solo en array y objetos, ya que tienen distintos lugares de memoria, por eso se repiten

// let array = [0,2,3,4,2,{a:0},0, {a:0}]                 //  [0,2,3,4,2,{a:0},0, {a:0}]   
// let set = new Set (array);            // Set{0,2,3,4, {a:0}, {a:0}}  


// const michiPizzeria = new Set([
//   "Hongos 🍄",
//   "Hawaianna / Anana 🍍",
//   "Especial 😺",
// ]);
// console.log(michiPizzeria);
// console.log(michiPizzeria.size);

// const nuevasPizzas = [
//   "Hongos 🍄",
//   "Hawaianna / Anana 🍍",
//   "Especial 😺",
//   "Rucula 🥬",
// ];

// function agregarPizzas() {
//   nuevasPizzas.forEach((pizza) => {
//     michiPizzeria.add(pizza);
//   });
// }

// agregarPizzas();

// console.log(`Se agrego?`, michiPizzeria.has("Rucula 🥬"));

// michiPizzeria.delete("Rucula 🥬");

// console.log(michiPizzeria.has("Rucula 🥬"));  

// // for (let sabor of michiPizzeria) {
// //   console.log(sabor);
// // }

// michiPizzeria.forEach((element) => {
//   console.log(element);
// });

////////////////////////////////////////////////?
////?  STACK  
////?? LIFO : ultimo en entrar, primero en salir

let pila = [];
pila.push(1);
pila.push(2);
pila.push(3);
pila.push(4);
pila.push(5);

console.log(pila);

let ultimoValor = pila.pop();

let primerValor = pila.shift();
console.log(primerValor);

//let valorIntermedio = pila[2]; //   ESTO ESTA MAL!!

console.log(ultimoValor);

//console.log(valorIntermedio);

////////////////////?
function Stack() { //función constructora
  this.arr = [];
}

Stack.prototype.add = function (value) {
  this.arr.push(value);
};

Stack.prototype.delete = function () {
  return this.arr.pop();
};

const pilaB = new Stack();

pilaB.add(1);
pilaB.add(2);
pilaB.add(3);

console.log(pilaB.delete());

console.log(pilaB);

////////////////////////////////////////////////?
////?  QUEUE  
////?? FIFO : primero en entrar, primero en salir
