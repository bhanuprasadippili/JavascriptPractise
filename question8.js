// 8. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let count = 0;

for (let i = 0;i <arr1.length; i++) {
    if(arr1[i] == 'a') {
        count++;
    }
}

console.log('a '+ '( ' + count + ' times ' + ')');