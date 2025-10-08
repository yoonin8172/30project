const text = document.getElementById("text");
const container = document.getElementById("flower-container");
const homebutton = document.getElementById("homebutton");

let flowerCreated = false;

text.onclick = function () {
    if (!flowerCreated) {
        const flower = document.createElement("div");
        flower.innerText = "🌸";
        flower.style.fontSize = "80px";
        flower.style.display = "inline-block";
        flower.style.cursor = "pointer";
        flower.style.transition = "transform 2s";
        container.appendChild(flower);

        flower.onclick = function () {
            flower.style.transform = "rotate(720deg)";
            setTimeout(() => {
                homebutton.style.display = "inline-block";
            }, 2000);
        };

        flowerCreated = true;
    }
};

homebutton.onclick = function () {
    window.location.href = "../0_index.html";
};



