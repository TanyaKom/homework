//******************* Task 1 ***************/

     const newWindow = window.open('', '', 'width=300,height=300');
     
     setTimeout(() => {
        newWindow.resizeTo(500, 500);
     }, 2000);

     setTimeout(() => {
        newWindow.moveTo(200, 200);
     }, 2000);

     setTimeout(() => {
        newWindow.close();
     }, 2000);



//******************* Task 2 ***************/

function changeCSS (){
    const changes = document.getElementById("text");
    changes.style.color = "orange";
    changes.style.fontSize = "20px";
    changes.style.fontFamily = "Comic Sans MS";
}
const button = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent === 'Change style!');
button.addEventListener("click", changeCSS);