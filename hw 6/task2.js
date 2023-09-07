

//***********Task 2 ************

console.log(document.body);
const header = document.querySelector("h1");
const backgroundStyle = "background-color: green";
header.setAttribute("style", backgroundStyle);

const firstParagraph = document.getElementById("first-paragraph");
firstParagraph.style.fontWeight = "bold";

const secondParagraph = document.getElementById("second-paragraph");
secondParagraph.style.color = "red";

const thirdParagraph = document.getElementById("third-paragraph");
thirdParagraph.style.textDecoration = "underline";

const fourthParagraph = document.getElementById("fourth-paragraph");
fourthParagraph.style.fontStyle = "italic";


const myList = document.getElementById("myList");
const listItems = myList.getElementsByTagName("li");
let combinedText = ""; 
for (let i = 0; i < listItems.length; i++) {
    combinedText += listItems[i].textContent;
    listItems[i].style.display = "none";
}
const resultDiv = document.createElement("div");
resultDiv.textContent = combinedText;
resultDiv.style.marginLeft = "20px";

const parentElement = myList.parentElement;
parentElement.insertBefore(resultDiv, myList.nextSibling);

const invisibleText = document.getElementById("invisible-text");
invisibleText.style.display = "none";
