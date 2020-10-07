//1.Dada uma matriz de matrizes, transforme em uma única matriz.

const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  const newArray = arrays.reduce((acc, element) => {
    element.forEach((index) => acc.push(index));
    return acc;
  });
  return newArray;
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);