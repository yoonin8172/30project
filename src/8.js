const flowerword = document.getElementById("flowerword");
const container = document.getElementById("flower-container");
const homebutton = document.getElementById("homebutton");

flowerword.onclick = function () {
    for (let i = 0; i < 10; i++) {
        const flower = document.createElement("div");
        flower.innerText = "🌸";
        flower.style.fontSize = "60px";
        flower.style.display = "inline-block";
        flower.style.marginRight = "10px";
        container.appendChild(flower);
    }
    homebutton.style.display = "inline-block";
};

homebutton.onclick = function () {
    window.location.href = "../0_index.html";
};
