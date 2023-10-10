'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let aux=num;
  let fact =[1];

  for (let i = 2; i < num; i++) {
    // if(esprimo(i)){
      while (aux%i==0){
        aux = aux/i;
        fact.push(i);
      }
    // }  
  }
  return fact;
}

console.log(factorear(180));  //[1,2,2,3,3,5]




function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let j=0;
  let l = array.length;
  for (let k = 0; k < array.length; k++) {
    for (let i = 1; i < l; i++) {
      j=i-1;
      let aux = array[j];
      if (array[i]< array[j]){
        array[j] = array[i];
        array[i] = aux;
      }
    }
    l--;
  }
  return array;
}

console.log(bubbleSort([5, 1, 4, 2, 8])); //[1, 2, 4, 5, 8]

//? OTRA FORMA

// function bubbleSort(array) {

  // let swap = true; // creare un marcador para verificar si aun se estan haciendo cambios
  // while (swap) {
  //   // si aun se estan haciendo cambios continuo
  //   swap = false; // modifico el marcador a falso (por ahora)
  //   for (let i = 0; i < array.length - 1; i++) {
  //     if (array[i] > array[i + 1]) {
  //       // si sigue siendo posible hacer cambios/ si ya no hay cambios se termina el bucle
  //       let aux = array[i];
  //       array[i] = array[i + 1];
  //       array[i + 1] = aux;
  //       swap = true; // hago el cambio y vuelvo a poner mi marcador en true
  //     }
  //   }
  // }
  // return array;
//}



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 1; i < array.length; i++) {
    let aux = array[i];
    for (let j = i-1; j>=0 ; j--) {
      if (aux<array[j]){
        array [j+1] = array[j];
        array [j] = aux;  
      } else {
        break;
      }
    }
  }
  return array;

}

console.log(insertionSort([5, 1, 10,20,3,4, 2, 8])); //[1, 2, 4, 5, 8]


  //   for (let i = 1; i < array.length; i++) {
  //     let j = i - 1;
  //     let aux = array[i];
  //     while (j >= 0 && aux < array[j]) {
  //       array[j + 1] = array[j];
  //       j--;
  //     }
  //     array[j + 1] = aux;
  //   }
  //   return array;
  // }




console.log( "selectionSort")
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let min  ;
  let aux ; 
  let valor;
  for (let j = 0; j < array.length; j++) {
    min = array[j];
    console.log(min);

    for (let i = j; i < array.length; i++) {
        if(array[i]<min){
          min = array[i];
          aux = i;
        }        
    }
    if (min !=array[j] ){
    valor = array [j];
    array [j] = min;
    array [aux] = valor;
    console.log(array)
   }
  }
  return array;


  //? OTRA FORMA//////////////////////

  // for (let i = 0; i < array.length - 1; i++) {
  //   let min = i;
  //   for (let j = i + 1; j < array.length; j++) {
  //     if (array[j] < array[min]) {
  //       min = j;
  //     }
  //   }
  //   if (i !== min) {
  //     let aux = array[i];
  //     array[i] = array[min];
  //     array[min] = aux;
  //   }
  // }
  // return array;
  // }

}

console.log(selectionSort([10, -2, -7, 4])); //[-7, -2, 4, 10]

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
