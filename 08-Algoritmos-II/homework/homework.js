'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /*
​
1-> Seleccionar un pivote = mathRandom()
2-> if [i] < pivot -> lo mando a izq=[]
3 -> if [i] > pivot => lo mando a der =[]
4 -> Recursion   return sort(izq)+ pivot + sort (der) 
                                          
​
  */
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  // Tu código:
  //okey probemos ahora
  //  array.lenght === 1 return  array
  //divido  con mi funcion dividir()
  // izq = [0] -> [2,3,4]
  // der = [1] > [2]
  // merge(mergeSort(izq),mergeSort(der))
}

function dividir(array) {
  //let medio = mathflo0r / 2
  // izq = slice [0, medio]
  // der = slice[medio , ultimo]
  //[izq , der]
}

function merge(izq, der) {
  // mientras el lado izq y el lado derecho tengan elementos
  // izq< der  push(izq)
  // der < izq  push (der)
  // return [izq] + [der]
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
