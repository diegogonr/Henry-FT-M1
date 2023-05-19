////////////////////////////////////////////////////////////////////////*
//*  contexto de ejecucion
////////////////////////////////////////////////////////////////////////*

// const yo = "Gama"; // global

// console.log(yo);

// const miFuncion = () => {
//   const x = "esta es la funcion"; // local
//   console.log(x); 
// };

// miFuncion();

////////////////////////////////////////////////////////////////////////*
//* hoisting
////////////////////////////////////////////////////////////////////////*

// saludar();
// console.log(despedirse); //undefined
// console.log(bartolomiau); //undefined, existe un lugar en la memoria 
// //console.log(gama);  // no existe con let: error

// //? declaracion
// function saludar() {
//   console.log("funcion saludar", "holis");
// }

// //?expresion
// var despedirse = function () {
//   console.log("chau");
// };

// var bartolomiau = "Hola soy el Barto";   //solo la varibale var cuenta con la función de hoisting
// let gama = "Yo de nuevo";

// saludar();
// console.log(despedirse); //[Function: despedirse]
// console.log(despedirse()); //chau y undefined
// console.log(bartolomiau); //Hola soy el Barto 
// console.log(gama);  // Yo de nuevo

////////////////////////////////////////////////////////////////////////*
//* This keyword
​////////////////////////////////////////////////////////////////////////*

// console.log(this); //apunta al objeto global

// const describir = function () {
//   // ${}
//   console.log(`Soy ${this.nombre} y tengo un gato llamado ${this.mascota}`);

//   console.log("primero", this); //apunta al objeto global
// };

// describir();

// const instructor = {
//   nombre: "Gama",
//   mascota: "Bartolomiau",

//   describirA: function () {
//     // ${}
//     console.log(`Soy ${this.nombre} y tengo un gato llamado ${this.mascota}`);

//     // soy este instructor. nombre y tengo un gato llamado este instructor.mascota

//     console.log( "gama",this);
//   },
// };

// instructor.describirA();

// const instructorOtro = {
//   nombre: "Sol",
//   mascota: "Palta",

//   describirA: function () {
//     // ${}
//     console.log(`Soy ${this.nombre} y tengo un gato llamado ${this.mascota}`);

//     // soy este instructor. nombre y tengo un gato llamado este instructor.mascota

//     console.log("sol", this);
//   },
// };
// instructorOtro.describirA();


// function prueba() {
//   let x = "pruebita";

//   console.log(x);
//   console.log(`hola soy la ${x}`);
//   console.log("hola soy la " + x);
// }

// prueba();
// instructor.describirA();
// instructorOtro.describirA();

//* data types / tipado debil
//primitivos (strings,booleanos, numero, undefined ,symbol)

// let nombre = "Gama";
// console.log(nombre);
// console.log(typeof nombre);

// nombre = 3;
// console.log(nombre);
// console.log(typeof nombre);

//* Coercion de datos
// console.log("Yo soy" + " gama y tengo " + 35 + " años");
// console.log("23" + 3);  //el simbolo + es concatenar
// console.log("23" - 3);
// console.log("gama" - 2);
// console.log(3 + "23");
// console.log("34" > 1);
// console.log(6 / "2");

//TODO: *Conversion
// const fechaDeNacimiento = "1987";
// console.log(typeof fechaDeNacimiento);
// console.log(typeof Number(fechaDeNacimiento));

// let x = 1987;
// console.log(Number(fechaDeNacimiento) === 1987);
// console.log(fechaDeNacimiento === x.toString());

// const enNumero = Number(fechaDeNacimiento);
// console.log(typeof enNumero);

//TODO: * Expresion y declaracion de funciones

// //?declaracion o statement
// function sumar(a, b) {
//   console.log(a);
//   console.log(b);
//   return a + b;
// }

// //? expresion
// const imprimir = function () {
//   return sumar(4, 2);
// };

// console.log(imprimir);      // [Function: imprimir]
// console.log(imprimir()); 
// console.log(sumar(1, 2));   //


//? valor / referencia
let a = 4;
let b = {nombre: "gama"};

console.log(a);
console.log(b);

a = b;

console.log(b);
console.log(a);

b = 234;

console.log(b);
console.log(a);