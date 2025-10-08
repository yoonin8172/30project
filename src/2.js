const sun = document.getElementById("sun");
const homebutton = document.getElementById("homebutton");

let clicked = false;

sun.onclick = function () {
    if (!clicked) {
        sun.innerText = "강한 햇빛은 모두를 성장하게 해요";
        sun.id = "sun-text";
        homebutton.style.display = "inline-block";
    }
};

homebutton.onclick = function () {
    window.location.href = "../index.html";
};

