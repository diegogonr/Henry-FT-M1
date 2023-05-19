'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
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



//TODO://///////////////////////////////////
//TODO: agrega un nodo 
//TODO://///////////////////////////////////

LinkedList.prototype.add = function (valor) { //Se agrega en forma de nodo
  let node = new Node(valor);       //{value:valor , next:null}

  let current = this.head; // parate en el primer elemento
  console.log("%cAgregando el nodo:", "color: cyan", node);

  if (!current) {
    // si la listya esta vacia
    this.head = node;
  } else {
    while (current.next) {
      // mientras que no encuente el ultimo valor
      current = current.next; // avanzo un paso
    }
    current.next = node;
    console.log("%cAhora yo soy el ultimo Nodo", "color:magenta", node);
  }

  return node;
};

let ListaMascotas = new LinkedList();

ListaMascotas.add("Bartolomiau");
console.log("HEAD", ListaMascotas);
ListaMascotas.add("Palta");
console.log("HEAD", ListaMascotas);


//TODO://///////////////////////////////////
//TODO: eliminar el primer elemento
//TODO://///////////////////////////////////

LinkedList.prototype.remove = function () {
  let current = this.head; // parate en el primer elemento

  if (current == null )   //si no tengo elementos 
    return null;
  else if (current.next==null){
    let aux = this.head 
    this.head =null;
    return aux.value;
  }
  else {   
    while(current.next.next){    // ir al siguiente del siguiente elemento hasta que este vacio
        current = current.next;  // avanzo un paso
        }
      let aux = current.next     
      current.next = null;       // elimino el valor
      return aux.value;
    }
 
};

ListaMascotas.remove();
console.log("lista", ListaMascotas);


//TODO: recibe un parámetro y lo busca dentro de la lista
LinkedList.prototype.search = function (value) {

  let current = this.head; // parate en el primer elemento
  if (current == null )   //si no tengo elementos 
    return null;

  while (current) {
    if(current.value == value) return current.value;
    else if (typeof value == "function"){  //si value es una funcion 
      if (value (current.value)){
        return current.value;
      }  //evaluamos la funcion

    }
    current = current.next;             // avanzo un paso
  }
  return null;

};


//????????????????/PRUEBAS ////////////////////////////////////

let linkedList = new LinkedList();
console.log(linkedList.hasOwnProperty('head')) //expect(linkedList.hasOwnProperty('head')).toBe(true);

let  node = new Node("test");
console.log(node.value)  //expect(node.value).toBe('test');


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

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
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
  let index = this.hash (key); //se ejecuta la funcion hash

  //if (typeof value !== "string") throw TypeError ("Keys must be strings");
  if (this.buckets[index] == undefined) {  // si es que no hay valor, se crea un objeto 
    this.buckets [index] ={};
  }
  this.buckets[index][key] =value;   //la posicion la define index, y key la propiedad

};

HashTable.prototype.get = function (key){
  let index = this.hash (key); //se ejecuta la funcion hash

  // if (this.buckets[index][key] ) return this.buckets[index][key];  //devuelve el valor de la casilla index
  // else return ("aqui no hay nada");
  return (this.buckets[index][key] ? this.buckets[index][key] : "aqui no hay nada")  // lo mismo que arriba, si el valor existe devuelvo this.buckets[index][key] : (sino) aqui no ha nada 

}

HashTable.prototype.hasKey = function (key){

  let index = this.hash (key); //se ejecuta la funcion hash


  return (this.buckets[index].hasOwnProperty(key)) //en el objeto que esta en el index  del arreglo existe un valor para key?

}




let tabla= new HashTable();

tabla.set  ("vfqwd1","wdqwdqw");
tabla.set  ("vqq2","dqwdqw");
console.log(tabla.get("vqq2"))
console.log(tabla)

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
