'use strict';

const { queue } = require("@11ty/eleventy-cache-assets");

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial
 (representado como n!) es el producto de n por todos los números naturales menores que él y 
 mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1,
 respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento
  que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {

if (n==1 || n==0) return 1;
else if (n<0) return 0;
return (n*nFactorial(n-1))
}

console.log(nFactorial(5));

function nFibonacci(n) {
  if (n==0) return 0;
  else if (n==1 || n==2) return 1;

  return (nFibonacci(n-1)+ nFibonacci(n-2) )
}


// //*******************FACTORIAL
// // OPCION ITERATIVA
// function nFactorialIterativo(n) {
  
//   let factorial = n;

//   if (n === 1 || n === 0) {
//     return 1;
//   }

//   while (n > 1) {
//     n--; // 4
//     factorial = factorial * n; // 5*4 = 20
//   }

//   return factorial;
// }

// // OPCION RECURSIVA
// function nFactorial(n) {

//   if (n >1){
  
//     return (n*nFactorial(n-1));
//   }
//   else {
//     return (1)
//   };

// }

// console.log(nFactorial(5));

// //*******************FIBONACCI
// function nFibonacci(n) {

//   if (n==0){
    
//     return (0);
//   }
//   else if (n==1) {
//     return(1);
//   } 
//   else {

//     return( nFibonacci(n-1) + nFibonacci(n-2));
//   }

// }

// console.log(nFibonacci(6));


/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer
 elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/


class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(value) {
    this.arr.push(value);
  }
  dequeue() {
    return this.arr.shift();
  }
  size() {
    return this.arr.length;
  }
}


//* AMBAS FORMAS SE PUEDEN CREAR METODOS DENTRO DE LA FUNCION O POR PROTOTYPES
//* CLASE , la mejor forma de implementar 
// class Queue2 {
//   constructor(){
//     this.arr=[]; //propiedad
//   }


//   //tambien se puede ingresar el metodo dentro de la clase como una funcion
//   dequeue () { 
//     return this.arr.shift();

//   }
// }

// // ingresar metodos por prototype
// Queue2.prototype.enqueue = function (value) {
//   this.arr.push(value);
// };

// Queue2.prototype.size = function () {
//   return this.arr.length;
// };



// //* FUNCION CONSTRUCTURA
// function Queue() {
//   this.arr=[];
// }
// Queue.prototype.enqueue = function (value) {
//   this.arr.push(value);
// };

// Queue.prototype.dequeue = function () {
//   return this.arr.shift();
// };

// Queue.prototype.size = function () {
//   return this.arr.length;
// };

// let a = new Queue();
// a.enqueue (5);
// console.log(a);


/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
