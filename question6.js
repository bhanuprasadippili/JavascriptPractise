// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.



function insertDashe(inputNumber) {
    const string = inputNumber.toString();
    let newString = '';

    function isEven(number) {
       return parseInt(number) % 2 === 0;
    }

    for (let i = 0; i< string.length; i++) {
        newString += string[i];
        if(i<string.length - 1 && isEven(string[i]) && isEven(string[i + 1])) {
            newString += '-';
        }
    }
    return newString;
}

const inputNumber = '025468';

const output = insertDashe(inputNumber);

console.log(output);