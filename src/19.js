const shape = document.getElementById("shape");
const homebutton = document.getElementById("homebutton");

let clickCount = 0;
let originalColor = "green";
let changedColor = "orange";

shape.onclick = function () {
    clickCount++;

    if (clickCount === 1) {
        shape.style.borderBottomColor = changedColor;
    } else if (clickCount === 2) {

        shape.style.width = "100px";
        shape.style.height = "100px";
        shape.style.borderLeft = "0";
        shape.style.borderRight = "0";
        shape.style.borderBottom = "0";
        shape.style.backgroundColor = changedColor;
    } else if (clickCount === 3) {

        shape.style.width = "0";
        shape.style.height = "0";
        shape.style.borderLeft = "50px solid transparent";
        shape.style.borderRight = "50px solid transparent";
        shape.style.borderBottom = "100px solid " + originalColor;
        shape.style.backgroundColor = "transparent";
        homebutton.style.display = "inline-block";
    }
}

homebutton.onclick = function () {
    window.location.href = "../0_index.html";
}
