// 13. Write a JavaScript program to add items to a blank array and display them.
// Sample Screen :
// https://www.w3resource.com/w3r_images/add-items-in-array.png

let items = [];

function add() {
    let itemInput = document.getElementById('textInput');
    let item = itemInput.value;
    if (item.trim() !== '') {
        items.push(item);
        itemInput.value = ''
    }
}

function display() {
    let outputList = document.getElementById('output');
    outputList.innerHTML = '';

    for(let item of items) {
        let itemList = document.createElement('li');
        itemList.textContent = item;
        outputList.appendChild(itemList);
    }

}