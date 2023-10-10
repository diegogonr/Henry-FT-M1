//*****************************************************************
//*************ARBOLES**************** */
//*****************************************************************


function BinarySearchTree(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

let arbol = new BinarySearchTree(21);

console.log(arbol);

BinarySearchTree.prototype.insert = function (data) {
  // Mayor o menor

  // Izq / menor

  if (data < this.data) {
    if (this.left === null) {
      this.left = new BinarySearchTree(data);
    } else {
      this.left.insert(data);           //recursiva
    }
  }

  // Der / mayor

  if (data >= this.data) {
    if (this.right === null) {
      this.right = new BinarySearchTree(data);
    } else {
      this.right.insert(data);
    }
  }
};

let arbolito = new BinarySearchTree(15);
console.log(arbolito);

arbolito.insert(1);
console.log(arbolito);

arbolito.insert(16);
console.log(arbolito);

arbolito.insert(2);
console.log(arbolito);

//     15
//   /     \
//   1       16
// /   \    /   \
// null   2 null  null