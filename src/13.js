const wolf = document.getElementById("wolf");
const text = document.getElementById("text");
const homebutton = document.getElementById("homebutton");

homebutton.style.display = "none";
let clickCount = 0;

text.onclick = function () {
    wolf.style.display = "inline-block";
};

wolf.onclick = function () {
    clickCount++;

    wolf.style.transform = "translateX(-10px)";
    setTimeout(() => { wolf.style.transform = "translateX(10px)"; }, 100);
    setTimeout(() => { wolf.style.transform = "translateX(0)"; }, 200);
    text.style.color = "red";
    setTimeout(() => { text.style.color = "purple"; }, 200);
    setTimeout(() => { text.style.color = "red"; }, 400);
    setTimeout(() => { text.style.color = "navy"; }, 600);

    if (clickCount >= 3) {
        homebutton.style.display = "inline-block";
    }
};
homebutton.onclick = function () {
    window.location.href = "../0_index.html";
};
