// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true


function is_array(input) {
    return Array.isArray(input);   //  Array.isArray() static method determines whether the passed value is an Array.
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));