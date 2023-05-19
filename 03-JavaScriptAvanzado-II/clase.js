
//*****************************************************************
//*Closures
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

//////////////////////////

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
// contar(); //7
// contar(); //8

/////////////////////////////////////////////////
// var crearFuncion = function () {
//   var arreglo = [];

//   for (let i = 0; i < 3; i++) {
//     arreglo.push(() => console.log(i));   // agrego la funcion de console log 
//   }
//   return arreglo;
// };

// var arr = crearFuncion();

// arr[0]();
// arr[1]();
// arr[2]();


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



////TODO: metodo call

const seleccionador = griffindor.sombrero;
const slytherin = {
  casa: "Stlytherin",
  ubicacion: " La mazmorra del castillo",
  alumnos: [],
};

// seleccionador("Draco", "Malfoy");// NO FUNCA
seleccionador.call(slytherin, "Draco", "Malfoy");   //objeto que hace referencia slytherin, this apuntará a este
console.log(slytherin.alumnos);


const ravenclaw = {
  casa: "Ravenclaw",
  ubicacion: "Torre de astronomia",
  alumnos: [],
};

seleccionador.call(ravenclaw, "Cho", "Chang");
console.log(ravenclaw);
console.log(ravenclaw.alumnos);

const hufflepuff = {
  casa: "Hufflepuff",
  ubicacion: "La cocina del colegio",
  alumnos: [],
};

seleccionador.call(hufflepuff, "Newt", "Scamander");
console.log(hufflepuff);
console.log(hufflepuff.alumnos);


//TODO: metodo apply

// const dataAlumno = ["Cedric", "Diegory"]; //"

// // seleccionador.call(hufflepuff, dataAlumno);// call no funca
// seleccionador.apply(hufflepuff, dataAlumno);  //array que se emplea

// //! A partir de ES6
// seleccionador.call(hufflepuff, ...dataAlumno);  //... extrae toda la información de alumnos
// console.log(hufflepuff.alumnos);


//TODO: metodo bind
// bind crea una nueva funcion

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