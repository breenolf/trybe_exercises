function indiceDeMenorValor(array) {
    let menorIndice = 0;
    let valor = 0;
 
    for (let i = 0; i < array.length; i += 1) {
         
        if (array[i] < valor) {
            maiorIndice = i;
            valor = array[i];
        }
    }
  return maiorIndice; 
}
console.log(indiceDeMenorValor([2, 4, 6, 7, 10, 0, -3]));