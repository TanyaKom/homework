
function updateWindowSize() {
    let windowWidth = window.innerWidth; 
    let windowHeight = window.innerHeight;

    document.getElementById("windowWidth").textContent = windowWidth + "px";
    document.getElementById("windowHeight").textContent = windowHeight + "px";

}

updateWindowSize();

window.addEventListener("resize", updateWindowSize);
