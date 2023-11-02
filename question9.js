// 9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.



let string = 'The Quick Brown Fox';

function caseChange(string) {
    let newString = '';
    for (let i = 0; i < string.length; i++){
        let alphabet = string.charAt(i);

        if(alphabet == alphabet.toUpperCase()) {
            newString += alphabet.toLowerCase();
        } else  {
            newString += alphabet.toUpperCase();
        }
    }
    return newString;
}
console.log(caseChange(string));