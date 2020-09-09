function indiceDeMaiorValor(array) {
    let maiorIndice = 0;
    let valor = 0;
 
    for (let i in array) {
         
        if (array[i] > valor) {
            maiorIndice = i;
            valor = array[i];
        }
    }
  return maiorIndice; 
}
console.log(indiceDeMaiorValor([2, 3, 6, 7, 10, 1]));
