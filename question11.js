// 11. Write a JavaScript program to find the sum of squares of a numerical vector.

function squareSum(array) {
    let sum = 0;
    for (let i = 0; i<array.length; i++) {
       let result = array[i] * array[i];
       sum += result;
    }
    return sum;
}

let array = [ 1, 2, 4, 0 ];

console.log(squareSum(array));