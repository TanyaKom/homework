//******************* Task 3 ***************/
/*Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними 
подіями на кожному елементові:
     1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
     2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
     3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. 
     При відпусканні – білий.
     4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
     Приклад – курсор наведений на лінку.
https://user-images.githubusercontent.com/9075641/228461056-455d4dbf-527b-43de-a3dd-7c079dfbffed.png */

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const linkAdress = document.getElementById("linkAdress");

button1.addEventListener("click", function() {
   document.body.style.backgroundColor = "blue";
});

button2.addEventListener("dblclick", function () {
    document.body.style.backgroundColor = "pink";
});

let isMouseDown = false;
button3.addEventListener("mousedown", function() {
    isMouseDown = true;
    document.body.style.backgroundColor = "brown";
});
button3.addEventListener("mouseup", function() {
    isMouseDown = false;
    document.body.style.backgroundColor = "white";
});


linkAdress.addEventListener("mouseenter", function () {
    document.body.style.backgroundColor = "yellow";
});
linkAdress.addEventListener("mouseleave", function () {
    document.body.style.backgroundColor = "white";
});