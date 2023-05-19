//******LINKENDIST************************* */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this._length = 0;
  }
}

let ListaMascotas = new LinkedList();

console.log("Lista vacia", ListaMascotas);


LinkedList.prototype.add = function (valor) { //Se agrega en forma de nodo
  let node = new Node(valor);       //{data:valor , next:null}

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

  this._length++;
  return node;
};

//TODO: eliminar el primer elemento
LinkedList.prototype.removeHead = function () {
  let head = this.head;     //apunta al head es decir al que tiene data bartolomiau

  let aux = head;

  console.log("%cHEAD", "color:red", aux);
  console.log("%cNEW HEAD", "color:red", head.next);

  this.head = head.next;   //se pisa el valor de bartolomiau y el next que es palta lo sobrepone

  this._length--;
  return head;
};

ListaMascotas.add("Bartolomiau");

console.log("HEAD", ListaMascotas);

ListaMascotas.add("Palta");

console.log("HEAD", ListaMascotas);

ListaMascotas.add("Tota");
console.log("Lista", ListaMascotas);
ListaMascotas.add("Milaneso");
console.log("Lista", ListaMascotas);

ListaMascotas.removeHead();

console.log("%cLista", "color:red", ListaMascotas);



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