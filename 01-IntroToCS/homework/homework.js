'use strict';

function BinarioADecimal(num) {
   //holagit push asdasdads
   var num_array=[];

   num_array = num.split('');

   var dec=0;

   for (let n = 0; n < num_array.length; n++) {
         dec += parseInt(num_array[num_array.length-n-1])*(2**n);
   }
   return dec;
}

function DecimalABinario(num) {
   
   var num_array=[];
   var res=0;
   var aux=num;
   while (aux >= 1){
      res =aux%2  
      aux= ~~(aux/2) //redondear al menor valor

      num_array.unshift(res);
   }

   return(num_array.join(''))
}
module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
