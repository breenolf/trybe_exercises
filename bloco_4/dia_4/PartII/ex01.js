function verificaPalindrome(nome) {
    let inverso = "";

    for (let i = nome.length-1; i >= 0; i -= 1) {
        inverso = inverso + nome[i];
    }
    if (inverso == nome) {
        return true;
    }
    else {
        return false;
    }
}
console.log(verificaPalindrome("arara"));

console.log(verificaPalindrome("desenvolvimento"));