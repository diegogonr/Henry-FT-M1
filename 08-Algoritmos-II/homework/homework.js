"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /*
​
1-> Seleccionar un pivote = mathRandom()
​
2-> if [i] < pivot -> lo mando a izq=[]
3 -> if [i] > pivot => lo mando a der =[]
4 -> Recursion   return sort(izq)+ pivot + sort (der) 
                                            
  */

  if (array.length <= 1) return array;

  let pivot = array[Math.floor(Math.random() * array.length)]; // lo estoy haciendo solo por demostrar que no importa el pivote
  let izq = [];
  let der = [];
  let equal = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      izq.push(array[i]);
    } else if (array[i] > pivot) {
      der.push(array[i]);
    } else {
      equal.push(array[i]);
    }
  }

  return quickSort(izq).concat(equal).concat(quickSort(der)); // return quickSort(lowers).concat(pivot, quickSort(highers))
}

//[7,3,4,5,2,6]


function mergeSort2(array) {

  if(array.length<2) return array;

  const mitad = Math.floor (array.length/2);
  let left  = array.slice (0, mitad);
  let right = array.slice (mitad);

  array =[]

  left  = mergeSort2 (left)
  right = mergeSort2 (right)

  while (left.length && right.length) {
    if(left[0] < right[0]){
      array.push (left.shift())
    }
    else array.push (right.shift())
  }

  array = array.concat (left,right)
  return array;

}




function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //okey probemos ahora

  //  array.lenght === 1 return  array
  //divido  con mi funcion dividir()
  // izq = [0] -> [2,3,4]
  // der = [1] > [2]
  // merge(mergeSort(izq),mergeSort(der))

  if (array.length === 1) return array;

  let div = dividir(array);
  let izq = div[0];
  let der = div[1];

  //            [3,2]                     [7,4,5,6]
  return merge(mergeSort(izq), mergeSort(der));
}

function dividir(array) {
  //let medio = mathflo0r / 2
  // izq = slice [0, medio]
  // der = slice[medio , ultimo]
  //[izq , der]

  //[7,3,4,5,2,6]

  let medio = Math.floor(array.length / 2);
  let izq = array.slice(0, medio);
  let der = array.slice(medio);

  return [izq, der]; //[[3,2],[7,4,5,6]]
}

function merge(izq, der) {
  // mientras el lado izq y el lado derecho tengan elementos
  // izq< der  push(izq)
  // der < izq  push (der)
  // return [izq] + [der]

  let indiceIzq = 0;
  let indiceDer = 0;
  let array = [];

  while (indiceIzq < izq.length && indiceDer < der.length) {
    if (izq[indiceIzq] < der[indiceDer]) {
      array.push(izq[indiceIzq]);
      indiceIzq++;
    } else {
      array.push(der[indiceDer]);
      indiceDer++;
    }
  }

  return array.concat(izq.slice(indiceIzq)).concat(der.slice(indiceDer));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};