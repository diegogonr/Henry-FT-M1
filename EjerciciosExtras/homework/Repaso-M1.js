const {Queue, Node, LinkedList, BinarySearchTree} = require("./DS.js");

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.

// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

let countArray = function (array) {
  //??? OPCION LARGA
  // Tu código aca:
  //   let total = 0;
  //   array.forEach((elemento) => {
  //     if (Array.isArray(elemento)) {   // es un array= 
  //       total += countArray(elemento);
  //     } else {
  //       total += elemento;
  //     }
  //   });
  //   return total;

  //?????opcion con REDUCE
  //   return array.reduce((total, elemento) => {       //total es un acumulador
  //     if (Array.isArray(elemento)) {
  //         return total += countArray(elemento)
  //     } else return total += elemento
  //   });

    //? version reducida
    return array.reduce(
        (total, element) =>
          (total += Array.isArray(element) ? countArray(element) : element)
      );
      
  //?????opcion con flat --> metodo que elimina todos los arrays
    //array.flat();
};

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados

// Ejemplo:
let objeto1 = {
  a: {
    a1: 10,
    a2: "Franco",
    a3: {f: "r", a: "n", c: {o: true}},
  },
  b: 2,
  c: [1, {a: 1}, "Franco"],
};

// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

let countProps = function (obj) {
  // Tu código aca:

  let total = Object.keys(obj).length;

  console.log(Object.keys(obj));

  for (let prop in obj) {
    if (typeof obj[prop] === "object" && !Array.isArray(obj[prop])) {
      total += countProps(obj[prop]);
    }
  }

  return total;
};

countProps(objeto1);

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan transformarse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Kiricocho']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function () {
  // Tu código aca:

  let current = this.head;
  count = 0;

  while (current) {
    if (isNaN(Number(current.value))) {
      //Number(false) = 0
      /// si el valor es  NaN me da true
      current.value = "Kiricocho";
      count++; //count = 1
    }
    current = current.next;
  }
  return count;
};

// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

let mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:
  let merged = new Queue();

  //    []                    [6]
  //      merged [7,2,3,4,5]
  while (queueOne.size() || queueTwo.size()) {
    if (queueOne.size()) merged.enqueue(queueOne.dequeue());
    if (queueTwo.size()) merged.enqueue(queueTwo.dequeue());
  }

  return merged;
};

// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo:

// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - let multBySix = closureMult(6);
// - multBySix(4) --> 24

let closureMult = function (multiplier) {
  // Tu código aca:

  return function (num) {
    return num * multiplier;
  };
};

let multiplicaPor4 = closureMult(4);

multiplicaPor4(2);

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function () {
  // Tu código aca:
  let suma = this.value;

  if (this.right) suma += this.right.sum();
  if (this.left) suma += this.left.sum();

  return suma;
};

module.exports = {
  countArray,
  countProps,
  mergeQueues,
  closureMult,
};