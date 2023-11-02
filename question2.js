// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]



function array_Clone(array) {
    // return Array.from(array);  //  Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
    return [...array];  // Spread Operator
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));