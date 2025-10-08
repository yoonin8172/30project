const circle = document.getElementById("circle");
const homebutton = document.getElementById("homebutton");

let clicked = false;
document.addEventListener("mousemove", function (e) {
    if (!clicked) {
        circle.style.left = e.pageX - 40 + "px";
        circle.style.top = e.pageY - 40 + "px";
    }
});
circle.onclick = function () {
    clicked = true;
    circle.style.backgroundColor = "pink";
    homebutton.style.display = "inline-block";
}

homebutton.onclick = function () {
    window.location.href = "../index.html";
}
