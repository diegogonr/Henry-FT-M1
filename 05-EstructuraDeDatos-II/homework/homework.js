'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso,
    buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/


function Node (value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function(value) {
  let node = new Node(value);
  let current = this.head;
  if(!current){
    this.head = node;
  }
  else{
    while (current.next){
      current = current.next;
    }
      current.next = node;
  }

  return node
}


LinkedList.prototype.remove = function(value) {
  let current = this.head;
  let trash;
  if(!current)return null;
  else if (!current.next) {
    trash = this.head;
    this.head = null;
    return trash.value;
  }
  else {
    while (current.next.next){
      current = current.next;
    }
    trash = current.next;
    current.next = null;
  
    return trash.value;
  }
 
}



LinkedList.prototype.search = function(valor) {
  let current = this.head;

  while (current){

    if (typeof valor == "function"){
      if(valor(current.value)) return current.value;
    }
    else if (current.value == valor) return current.value;
    
    current = current.next;
  }
  return null;
}



let linkedList = new LinkedList();

linkedList.add(5)
linkedList.add(4)
linkedList.add(3)
console.log(linkedList) 

linkedList.remove()
console.log(linkedList) 
console.log(linkedList.search(5));


/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; 
  es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor
   (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, 
  a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por 
  parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, 
  suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y 
  calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición 
  de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al 
  método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave 
  (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla
 con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {

  this.buckets=[];
  this.numBuckets = 35;
}

HashTable.prototype.hash = function (key){
  let hash=0;
  for (let i = 0; i < key.length; i++) {
    hash+= key.charCodeAt(i);
  }
  return (hash%this.numBuckets)  //divido para que el numero hash (numero de casillero) s eencuentre dentro de 35
};

HashTable.prototype.set = function (key, value){

  if (typeof key !== "string") throw TypeError ("Keys must be strings");

  let index = this.hash (key);        //se ejecuta el metodo hash

  if (this.buckets[index] == undefined) {  // si es que no hay valor, se crea un objeto 
    this.buckets [index] ={};
  }
  this.buckets[index][key] =value;   //la posicion la define index, y key la propiedad
};


HashTable.prototype.get = function (key){
  let index = this.hash(key);
  return (this.buckets[index][key] ? this.buckets[index][key] : "aqui no hay nada")   

}

HashTable.prototype.hasKey = function (key){

  let index = this.hash (key); //se ejecuta la funcion hash
  return (this.buckets[index].hasOwnProperty(key)) //en el objeto que esta en el index  del arreglo existe un valor para key?

}

let tabla= new HashTable();

tabla.set  ("hola","d");
tabla.set  ("adios","r");
tabla.set  ("adios2","r2");

console.log(tabla)





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
