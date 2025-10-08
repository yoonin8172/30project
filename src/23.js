const emoji23 = document.getElementById("emoji");
const message23 = document.getElementById("message");
const homebutton23 = document.getElementById("homebutton");

let state = 0;

emoji23.onclick = function () {
    if (state === 0) {
        emoji23.innerText = "👤";
        state++;
    } else if (state === 1) {
        message23.innerText = "Strike!";
        homebutton23.style.display = "inline-block";
    }
}

homebutton23.onclick = function () {
    window.location.href = "../index.html";
}
