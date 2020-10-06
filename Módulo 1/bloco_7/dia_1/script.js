function fatorial (number) {
  let number;

  for (let i = number; i >= 1; i -= 1) {
      
    if (number > 0) {
        number = number * number[i] - 1;
    }
  }
}