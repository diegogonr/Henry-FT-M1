// es copypaste de sus HW

function LinkedList() {
  //Tren
  this._length = 0;
  this.head = null; // Locomotora
}

function Node(value) {
  // Vagon
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  // 3
  let node = new Node(value); // {value:3,next:null}
  let current = this.head;

  if (!this.head) {
    // this.head === null
    this.head = node;
    this._length++;
    return node;
  } else {
    while (current.next) {
      current = current.next;
    }

    current.next = node;
    this._length++;
    return node;
  }
};

LinkedList.prototype.remove = function () {
  let current = this.head;

  // if(this.head === null) return null
  if (this._length === 0) return null;
  else if (this._length === 1) {
    let aux = current.value; // Elemento a eliminar
    this.head = null;
    this._length--;
    return aux;
  }

  while (current.next.next) {
    // penultimo valor
    current = current.next;
  }

  let aux = current.next.value; // el valor que quiero eliminar

  current.next = null;
  this._length--;
  return aux;
};

LinkedList.prototype.search = function (value) {
  let current = this.head;

  if (this.head === null) return null;

  while (current) {
    if (current.value === value) {
      return current.value;
    } else if (typeof value === "function") {
      if (value(current.value)) {
        return current.value;
      }
    }
    current = current.next;
  }
  return null;
};

function BinarySearchTree(valor) {
  this.value = valor;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function () {
  if (this.value === null) {
    return 0;
  }

  if (this.left === null && this.right === null) {
    return 1;
  }

  if (this.left === null) {
    return 1 + this.right.size();
  }

  if (this.right === null) {
    return 1 + this.left.size();
  }

  return 1 + this.left.size() + this.right.size();
};

let listaEjemplo = new LinkedList();

listaEjemplo.add(5);
listaEjemplo.add(3);
listaEjemplo.add(10);
listaEjemplo.add(1);
listaEjemplo.add(2);
listaEjemplo.add(4);
listaEjemplo.add(11);

console.log(listaEjemplo);

/// EJERCICIOS ////

// VAMOS A CREAR UNA FUNCION QUE NOS AYUDE A ORDENAR LOS ELEMENTOS QUE SE ENCUENTRAN DENTRO DE UNA LINKED LIST DE FORMA ASCENDENTE

// 5  ->  3  ->  10  ->  1  -> ... -> null

//            curr
//                       ^

// curr < current.next
// aux = 5

LinkedList.prototype.sort = function () {
  let current = this.head;
  let marcador;

  while (current) {
    marcador = current.next;

    while (marcador) {
      if (current.value > marcador.value) {
        let aux = current.value;

        current.value = marcador.value;
        marcador.value = aux;
      }
      marcador = marcador.next;
    }
    current = current.next;
  }

  return "Ya esta ordenado coleguilla";
};

listaEjemplo.sort();
console.log(listaEjemplo.sort());

console.log(listaEjemplo);

///  CREAR UN METODO QUE INSERTE ARRAYS DENTRO DE UN BST Y QUE LOS INSERTE EN EL ORDEN QUE CORRESPONDA AL NUMERO DE ELEMENTOS QUE CONTIENE

BinarySearchTree.prototype.insertArray = function (array) {
  let size = array.length;

  if (!size) {
    return false;
  }

  if (size < this.value.length) {
    if (this.left === null) {
      let newBranch = new BinarySearchTree(array);
      this.left = newBranch;
    } else {
      this.left.insertArray(array);
    }
  } else {
    if (this.right === null) {
      let newBranch = new BinarySearchTree(array);
      this.right = newBranch;
    } else {
      this.right.insertArray(array);
    }
  }
};
​
let arbolPrueba = new BinarySearchTree([3]);
arbolPrueba.insertArray([1, 2, 3, 4]);
arbolPrueba.insertArray([1, 2, 3, 4, 5]);

//      [3]        value-size =1     size = 5
//     /   \
//  null     [1,2,3,4]     value -size = 4        size = 5
//            /     \
//          null    [1,2,3,4,5]