// ***********Task 1 ************

const list = document.getElementById("list");

const listItems = list.getElementsByTagName("li");
const itemsText = [];

for( let i = 0; i < listItems.length; i++) {
    itemsText.push(listItems[i].textContent);
}

console.log(itemsText[0]); //первый элетент
console.log(itemsText[listItems.length - 1]); //последний эл
console.log(itemsText[1]); // второй эл
console.log(itemsText[3]); // четвертый эл
console.log(itemsText[2]); // третий эл