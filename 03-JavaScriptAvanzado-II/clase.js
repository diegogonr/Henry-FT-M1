
//*****************************************************************
//*Closures: funciones que retornan otras funciones
//*****************************************************************

// function saludar(saludo) { //funcion padre
//   console.log(saludo);
//   // estoy retornando una funcion
//   return function (nombre) { // hija
//     console.log(`${saludo} ${nombre}`);
//   };
// }

// // console.log(saludar("hola"))
// let saludarHola = saludar("Hola");

// let saludarChau = saludar("Chau");

// saludarHola("Gama");
// saludarChau("Gama");

////////////////////////

// const condeContar = function () {
//   let contarGalletas = 4;

//   return function () {
//     contarGalletas++;
//     console.log(`${contarGalletas} galletas`);
//   };
// };

// const contar = condeContar();
// contar(); //5
// contar(); //6


///////////////////////////////////////////////
//? Con var se va pisando los valores anteriores
// var crearFuncion = function () {
//   var arreglo = []; // [() => console.log(i), () => console.log(i), () => console.log(i)]

//   for (var i = 0; i < 3; i++) {
//     arreglo.push(() => console.log(i));   // agrego la funcion de console log 
//   }
//   return arreglo;
// };

// var arr = crearFuncion();

// arr[0]();   //3 >> número con el i terminó , porque i es var
// arr[1]();   //3
// arr[2]();   //3

//? Con let se queda asociada el valor de j, ya que el let muere en su scope, respeta los contexto de ejecución 
// var crearFuncion2 = function () {
//   var arreglo2 = [];

//   for (let j = 0; j < 3; j++) {   
//     arreglo2.push(() => console.log(j));   // agrego la funcion de console log 
//   }
//   return arreglo2;
// };

// var arr2 = crearFuncion2();

// arr2[0]();
// arr2[1]();
// arr2[2]();

//? el var chanca la variable en cambio el let no
// let saludo ='hola'
// let saludo ='hi'

// var chau ='adios'
// var chau = 'bye'




//*****************************************************************
//*METODOS DE CONTEXTO
//*****************************************************************

const griffindor = {
  casa: "Griffindor",
  ubicacion: "Torre del castillo",
  alumnos: [],

  sombrero(nombre, apellido) {
    console.log(
      `${nombre} ${apellido} has sido asignado a ${this.casa} y tu sala comun se encuentra en ${this.ubicacion}`
    );
    this.alumnos.push({alumno: `${nombre} ${apellido}`});
  },
};

griffindor.sombrero("Harry", "Potter");
griffindor.sombrero("Hermione", "Granger");
console.log(griffindor.alumnos);


////////////////////////////////////////////////?
//? METODO CALL
//? CALL no retorna una funcion

// let persona ={
//   nombre : "diego",
//   apellido :  "gonzales"
// }

// let logNombre = function(){
//   console.log(this.nombre +' ' + this.apellido)
// }

// logNombre.call(persona);  

////////////////////////////
const seleccionador = griffindor.sombrero;
const slytherin = {
  casa: "Stlytherin",
  ubicacion: " La mazmorra del castillo",
  alumnos: [],
};

// seleccionador("Draco", "Malfoy");// NO FUNCA
seleccionador.call(slytherin, "Draco", "Malfoy");   //objeto que hace referencia slytherin, this apuntará a este
console.log(slytherin.alumnos);


////////////////////////////////////////////////?
//? METODO APPLY
//? 

// let persona ={
//   nombre : "diego",
//   apellido :  "gonzales"
// }

// let logNombre = function(arg1,arg2){
//   console.log(arg1 + this.nombre +' ' + this.apellido+ arg2)
// }

// logNombre.apply(persona, ["hola ", " como estas?"]);  //(this, parametros de la funcion)


const dataAlumno = ["Cedric", "Diegory"]; //"
// seleccionador.call(slytherin, dataAlumno);// call no funca
seleccionador.apply(slytherin, dataAlumno);  //array que se emplea

//! A partir de ES6
seleccionador.call(slytherin, ...dataAlumno);  //... extrae toda la información de alumnos
console.log(slytherin.alumnos);


////////////////////////////////////////////////?
//? METODO BIND
//? bind retorna una funcion

// let persona ={
//   nombre : "diego",
//   apellido :  "gonzales"
// }

// let logNombre = function(){
//   console.log(this.nombre +' ' + this.apellido)
// }

// let logNombrePersona = logNombre.bind(persona);
// logNombrePersona()


const seleccionadorSlytherin = seleccionador.bind(slytherin);

seleccionadorSlytherin("Tom", "Riddle");
console.log(slytherin.alumnos);


const weasleys = ["Ginny", "Percy", "George", "Fred", "Charly"];
const seleccionWeasleys = seleccionador.bind(griffindor); // sombrero(nombre)

weasleys.forEach((elemento) => {
  seleccionWeasleys ( elemento,"weasleys" );
});

console.log(griffindor.alumnos);

seleccionadorSlytherin("Gama", "Camey");