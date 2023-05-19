// ENCONTRAR EL NUMERO MAS GRANDE ENTRE 3 NUMEROS

// 1- RECIBIR A,B,,C
// 2 - COMPARAR LAS VARIABLES
// 3.- a>b ===> a>c  ==> b>c
//  4 -Cual es el valor mayor
//5 - retorno el resultado

// function masGrande(a, b, c) {
//   if (a > b) {
//     if (a > c) {
//       console.log("a es el numero mas grande con", a);
//     } else {
//       console.log("c es el numero mas grande con", c);
//     }
//   } else if (b > c) {
//     console.log("b es el numero mas grande con", b);
//   } else {
//     console.log("c es el numero mas grande con", c);
//   }
// }

// masGrande(22, 7, 9);

// Commplejidad lineal

let maxValue = function (arr) {
  let max = arr[0];

  arr.forEach((element) => {
    console.log(element);
    if (element > max) {
      max = element;
    }
    console.log(max);
  });
  return max;
};

console.log(maxValue([2, 4, 3, 45, 65, 6, 3, 1, 78]));

// Complejidad cuadratica O(n^2)

function repetidos(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        console.log(`El elemento ${array[i]} se encuentra repetido`);
      }
    }
  }
}
repetidos([1, 2, 3, 4, 5, 4]);

// Complejidad exponencial O(n*m)

function repetidos2(array, array2) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (i !== j && array[i] === array[j]) {
        console.log(`El elemento ${array[i]} se encuentra repetido`);
      }
    }
  }
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //pseudo codigo
  // comparar las posiciones de un array i con i + 1
  // Si i > i+1 inveritirlas (podriasmos utilizar una variable aux 😉)
  // continuo mi recorrido  i++
  // hasta el momento en que en todas las evaluaciones i+1 > i
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //pseudo codigo
  // me quiero posicionar en el segundo valor i = 1 y lo comparo con el anterior j = i - 1
  // almaceno en mi cajita a i (variable auxiliar)
  // [9,2,5,11]
  //    i
  //  j
  // aux = 2
  //comparo si i < j invierto los elementos  aux = i
  // recorro marcadores
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //
  // Pseudo codigo
  // selecciono a min = i
  // i = j+1   si j < i
  // min - j
  // avanzo ambos marcadores hasta que length  === 0
  // colocar mi valor min en la posicion i
}