// 12. Write a JavaScript program to compute the sum and product of an array of integers.

var array = [1,2,3,4,5,6,7];

let sum = 0;
let product = 1;

for (let i = 0; i < array.length; i++ ) {
    sum += array[i];
    product *= array[i];
}


console.log(sum);
console.log(product);