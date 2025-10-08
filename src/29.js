const squareContainer = document.getElementById("square-container");
const rainbowMessage = document.getElementById("rainbow-message");
const homebutton = document.getElementById("homebutton");

const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
let index = 0;

function createSquare(color) {
    const div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.backgroundColor = color;
    div.style.cursor = "pointer";
    return div;
}

squareContainer.appendChild(createSquare(colors[index]));

squareContainer.onclick = function (e) {
    if (e.target && index < colors.length - 1) {
        index++;
        squareContainer.appendChild(createSquare(colors[index]));
    } else if (index === colors.length - 1) {
        rainbowMessage.innerText = "우와~무지개가 되었어요!";
        homebutton.style.display = "inline-block";
    }
}

homebutton.onclick = function () {
    window.location.href = "../0_index.html";
}
