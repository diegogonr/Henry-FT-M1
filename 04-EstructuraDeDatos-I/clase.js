//* function recursiva

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

// function cuentaRegresiva(number) {
//   //avance
//   let newNumber = number - 1;
//   console.log(newNumber);
//   console.log(number);
//   //Caso Base
//   if (number > 0) {
//     // number--

//     //recursion
//     cuentaRegresiva(newNumber);
//   }
// }

// cuentaRegresiva(10);


//*****************************

// let comunidad = [
//   "Frodo 🙋‍♂️",
//   "Sam 🤷‍♂️",
//   "Aragorn 👑",
//   "Pippin 🙍‍♂️",
//   "Merry 🙆‍♂️",
//   "Legolas 🏹",
//   "Gimli 🪓",
//   "Gandalf 🧙‍♂️",
//   "Boromir 🧔‍♂️",
// ];

// function imprimePersonajes() {
//   // for
//   for (let i = 0; i < comunidad.length; i++) {
//     console.log(comunidad[i]);
//   }

//   // for of
//   for (let miembro of comunidad) {
//     console.log(miembro);
//   }

//   // for each
//   comunidad.forEach((miembro) => {
//     console.log(miembro);
//  });

//   //map
//   comunidad.map((miembro) => {
//     console.log(miembro);
//   });

//   //while pseudo codigo
//   while (comunidad.length) {
//     console.log(comunidad[i]);
//   }
// }

// function imprimeRecursiva(comunidad) {
//   if (comunidad.length) {
//     let miembro = comunidad.shift(); // Aragorn -> el metodo shift modifica el array original

//    console.log(miembro);
//     console.log(comunidad);

//     imprimeRecursiva(comunidad);
//   }
// }

// imprimeRecursiva(comunidad);


//*************ESTRUCTURA DE DATOS**************** */

//TODO: ARRAY
let comunidad = [
  "Frodo 🙋‍♂️",
  "Sam 🤷‍♂️",
  "Aragorn 👑",
  "Pippin 🙍‍♂️",
  "Merry 🙆‍♂️",
  "Legolas 🏹",
  "Gimli 🪓",
  "Gandalf 🧙‍♂️",
  "Boromir 🧔‍♂️",
];

// console.log(comunidad[3]);
// console.log(comunidad[2]);

// console.log(comunidad.length);

// console.log(comunidad[comunidad.length - 1]);

// let muerto = comunidad.pop();

// console.log(muerto);

// console.log(comunidad);

// let muerto2 = comunidad.pop();

// console.log(muerto2);

// comunidad.push(muerto2);

// let seVanAMordor = comunidad.slice(0, 2); // no modifica el array

// console.log(seVanAMordor);

// console.log(comunidad);

// console.log(comunidad.indexOf("Aragorn 👑"));

// function reyDeGondor() {
//   if (comunidad.includes("Aragorn 👑")) {
//     console.log("Aragorn es el legitimo rey");
//     return;
//   }
//   console.log("Gondor needs no king");
// }

// reyDeGondor();

// comunidad.push("Saruman");
// comunidad.push("Saruman");
// comunidad.push("Saruman");

// solo busca y devuelve la primera coincidencia
// let traidor = comunidad.find((element) => element === "Saruman");​
// console.log(traidor);

// // busca todas las coincidencias
// let filtrados = comunidad.filter((element) => element !== traidor);​
// console.log(filtrados);

// comunidad = filtrados;​
// console.log(comunidad.find((element) => element === "Saruman"));

//TODO: SET ////////////////////////////////////
const michiPizzeria = new Set([
  "Hongos 🍄",
  "Hawaianna / Anana 🍍",
  "Especial 😺",
]);
console.log(michiPizzeria);
console.log(michiPizzeria.size);

const nuevasPizzas = [
  "Hongos 🍄",
  "Hawaianna / Anana 🍍",
  "Especial 😺",
  "Rucula 🥬",
];

function agregarPizzas() {
  nuevasPizzas.forEach((pizza) => {
    michiPizzeria.add(pizza);
  });
}

agregarPizzas();

console.log(`Se agrego?`, michiPizzeria.has("Rucula 🥬"));

michiPizzeria.delete("Rucula 🥬");

console.log(michiPizzeria.has("Rucula 🥬"));  

// // for (let sabor of michiPizzeria) {
// //   console.log(sabor);
// // }

// michiPizzeria.forEach((element) => {
//   console.log(element);
// });


//TODO: STACK         ////////////////////////////////////

// let pila = [];
// pila.push(1);
// pila.push(2);
// pila.push(3);
// pila.push(4);
// pila.push(5);

// console.log(pila);

// let ultimoValor = pila.pop();

// let primerValor = pila.shift();
// console.log(primerValor);

// //let valorIntermedio = pila[2]; //   ESTO ESTA MAL!!

// console.log(ultimoValor);

// //console.log(valorIntermedio);

//////////////////////
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

const pilaCopia = new Stack();

pilaB.add(1);
pilaB.add(2);
pilaB.add(3);

console.log(pilaB.delete());

console.log(pilaB);