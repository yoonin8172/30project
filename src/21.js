const text21 = document.getElementById("text");
const container21 = document.getElementById("container");
const homebutton21 = document.getElementById("homebutton");

let dotCount = 0;
const maxDots = 10;

text21.onclick = function () {
    if (dotCount < maxDots) {
        const dot = document.createElement("div");
        dot.style.width = "20px";
        dot.style.height = "20px";
        dot.style.backgroundColor = "green";
        dot.style.borderRadius = "50%";
        dot.style.position = "absolute";
        dot.style.left = Math.random() * (container21.offsetWidth - 20) + "px";
        dot.style.top = Math.random() * (container21.offsetHeight - 20) + "px";
        container21.appendChild(dot);
        dotCount++;

        if (dotCount === maxDots) {
            homebutton21.style.display = "inline-block";
        }
    }
}

homebutton21.onclick = function () {
    window.location.href = "../index.html";
}
