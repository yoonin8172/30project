const text24 = document.getElementById("text");
const slider = document.getElementById("slider");
const homebutton24 = document.getElementById("homebutton");

text24.onclick = function () {
    let position = 0;
    const interval = setInterval(() => {
        if (position < window.innerWidth) {
            position += 10;
            slider.style.left = position + "px";
        } else {
            clearInterval(interval);
            homebutton24.style.display = "inline-block";
        }
    }, 50);
}

homebutton24.onclick = function () {
    window.location.href = "../0_index.html";
}
