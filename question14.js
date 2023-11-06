// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

let array =  [1,2,5,3,7,7,3,4,2,2,6,3];
console.log([...new Set(array)]);