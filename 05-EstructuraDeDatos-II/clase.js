
//*****************************************************************
//*************LINKENDIST**************** */
//*****************************************************************

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {   //crear una lista 
  constructor() {
    this.head = null;
  }
}

let ListaMascotas = new LinkedList();
console.log("Lista vacia", ListaMascotas);


LinkedList.prototype.add = function (valor) { //Se agrega en forma de nodo
  let node = new Node(valor);       //{data:valor , next:null} se crea la caja
  let current = this.head;          // puntero, parate en el primer elemento

  if (!current) {// si la lista esta vacia, solo entra una vez
    this.head = node;
  } else {
    while (current.next) {      // mientras que no encuente el ultimo valor
      current = current.next;    // avanzo un paso
    }
    current.next = node;
  }
  return node;
};

let newLista = new LinkedList();
console.log(newLista.add(5))
console.log(newLista.add(7))
console.log(newLista.add(10))
console.log(newLista)

////////////////////////////////////////////////?
////?  SIZE
LinkedList.prototype.size = function(){
  let current = this.head;
  let counter=0;
  if (!current){
    return 0;
  }
  else {
    while(current){
      counter++;
      current =current.next;
    }
  }
  return counter;
}

console.log(newLista.size());

////////////////////////////////////////////////?
////?  Eliminar el primer elemento
LinkedList.prototype.removeHead = function () {
  let head = this.head;     //apunta al head es decir al que tiene data

  this.head = head.next;   //se pisa el valor de bartolomiau y el next que es palta lo sobrepone
  return head;
};

newLista.removeHead();

console.log(newLista);



//*******HASH TABLE*****************

//{95B858E1395D9C1C75F38FBC2387874526200F8919581D1073D9A983652C35B3:"Bartolomiauu"}

//Gamaliel: gama@gmail.com
//Sol: sol@gmail.com
//Barto:gato@gmail.com
// ema : ema@gmail.com

//la funcion hasheadora convierte a numero
// Gamaliel => 8
// Sol => 3
// Ema => 3
// Barto => 5

//[[3 , [{ sol:sol@gmail.com },{ema : ema@gmail.com}] ]  , [5, [{Barto:gato@gmail.com}]]  [8, [{Gamaliel: gama@gmail.com}]] ]