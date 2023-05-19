'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
   según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro,
    hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {

   // Der / mayor
 if (value >= this.value) {
   if (this.right === null) {
     this.right = new BinarySearchTree(value);
   } else {
     this.right.insert(value);   //recursion para irnos al sigueinte nodo
   }
 }

   // Izq / menor
  if (value < this.value) {
   if (this.left === null) {
     this.left = new BinarySearchTree(value);
   } else {
     this.left.insert(value);           //recursiva
   }
 }

}

BinarySearchTree.prototype.size = function () {


  //Caso A ambas ramas ocupadas
  if (this.right !== null && this.left !== null)
    return 1 + this.left.size() + this.right.size();  // se hace la recursion para ver el tamaño de esas ramas

  // Caso B 1 sola Rama ocupada
  if (this.left !== null && this.right === null) return 1 + this.left.size();
  if (this.left === null && this.right !== null) return 1 + this.right.size();

  //  Caso C ambas estan vacias
  if (this.right === null && this.left === null) return 1;
};


BinarySearchTree.prototype.contains = function (value) {
   // si lo encuentro
   if (this.value === value) return true;
 
   // si no lo encuentro y es mayor
   if (value > this.value) {
     if (this.right === null) {
       return false;
     } else {
       return this.right.contains(value);
     }
 
     // return this.right === null ?false : this.right.contains(value);
   }
 
   // si no lo encuentro y es menor
 
   if (value < this.value) {
     if (this.left === null) {
       return false;
     } else {
       return this.left.contains(value);
     }
   }
 };
 

 BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
   // if(order === "pre-order"){
   // }
   // if(order === "post-order"){
   // }
   // else{
   // }
 
   switch (order) {
     // root => izq > der
     case "pre-order":
       cb(this.value); // imprimirValor(this.value)
       this.left && this.left.depthFirstForEach(cb, order);
       this.right && this.right.depthFirstForEach(cb, order);
       break;
 
     // izq - der - root
     case "post-order":
       this.left && this.left.depthFirstForEach(cb, order);
       this.right && this.right.depthFirstForEach(cb, order);
       cb(this.value);
       break;
 
     // izq - root - der
     default:
       if (this.left !== null) this.left.depthFirstForEach(cb, order);
       cb(this.value);
       if (this.right !== null) this.right.depthFirstForEach(cb, order);
       break;
   }
 }; // preorder postorder inorder
 
 let imprimirValor = function (x) {
   console.log(x);
 };
 
 BinarySearchTree.prototype.breadthFirstForEach = function (cb, almacen = []) {
   cb(this.value);
 
   if (this.left !== null) {
     almacen.push(this.left);
   }
 
   if (this.right !== null) {
     almacen.push(this.right);
   }
 
   if (almacen.length > 0) {
     almacen.shift().breadthFirstForEach(cb, almacen);
   }
 };
 

 let arbolito=  new BinarySearchTree(15);

 arbolito.insert(4);
 arbolito.insert(16);
 arbolito.insert(2);
 arbolito.insert(9);
 arbolito.insert(21);
 /**
  *          15
  *    4             16
  * 2    9        null  21
  */

arbolito.breadthFirstForEach(imprimirValor);



// No modifiquen nada debajo de esta linea
// --------------------------------



module.exports = {
   BinarySearchTree,
};
