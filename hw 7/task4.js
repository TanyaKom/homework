/******************* Task 4 ***************/

document.getElementById("btn").addEventListener("click", function () {
    let dropdown = document.getElementById("Dropdown");
    let selectName = dropdown.options[dropdown.selectedIndex];

    if(selectName) {
        dropdown.removeChild(selectName);
    }
});
