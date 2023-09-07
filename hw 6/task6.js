 // Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон 
 //наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.


const colorElements = document.querySelectorAll(".color");
const priceElement = document.getElementById("outprice");
const shoeBackground = document.querySelector(".shoeBackground");
const shoeImages = document.querySelectorAll(".shoe");
const colorElementName = document.querySelector(".color-name");
const colorIcons = document.querySelectorAll(".color");

colorElements.forEach(colorElement => {
    colorElement.addEventListener("click", () => {

        const price = colorElement.getAttribute("data-price");
        const primaryColor = colorElement.getAttribute("primary");


        colorElements.forEach(element => {
            element.classList.remove("active");
        });
        colorElement.classList.add("active");
        priceElement.textContent = price;

        shoeBackground.style.background = primaryColor;

        shoeImages.forEach(image => {
            const color = image.getAttribute("color");
            if(color === colorElement.getAttribute("color")) {
                image.classList.add("show");
            }else{
                image.classList.remove("show");
            }
        });

        colorIcons.forEach(icon => { 
            const color = icon.getAttribute("color");
            if(color === colorElement.getAttribute("color")) {
                icon.classList.add("active");
            } else {
                icon.classList.remove.apply("active");
            }
        });
    
    });

});
