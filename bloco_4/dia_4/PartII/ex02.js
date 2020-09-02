function indiceDeMaiorValor(array) {
    let maiorIndice = 0;

    for (let i = 0; i < array.length; i += 1) {
        
        if (array[i] > array[i-1] && array[i] > maiorIndice) {
            maiorIndice = i;
        }
    }
  return maiorIndice; 
}
console.log(indiceDeMaiorValor([2, 300, 6, 7, 10, 100]));