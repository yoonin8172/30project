const shape = document.getElementById("shape");
const homebutton = document.getElementById("homebutton");

let clicked = false;

shape.onclick = function () {
    if (!clicked) {
        shape.style.borderRadius = "50%";
        shape.style.backgroundColor = "orange";
        shape.style.width = "150px";
        shape.style.height = "150px";
        clicked = true;
        homebutton.style.display = "inline-block";
    }
}

homebutton.onclick = function () {
    window.location.href = "../0_index.html";
}
