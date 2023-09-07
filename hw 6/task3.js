//************ Task 3 ************


let bodyElement = document.createElement("body");

let mainElement = document.createElement("main");
mainElement.className = "mainClass check item";

let divElement = document.createElement("div");
divElement.id = "myDiv";

let pElement = document.createElement("p")
pElement.textContent = "First paragraph";

divElement.appendChild(pElement);
mainElement.appendChild(divElement);
bodyElement.appendChild(mainElement);

document.documentElement.appendChild(bodyElement);
