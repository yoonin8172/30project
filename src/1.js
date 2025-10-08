const yoonin = document.getElementById("yoonin");
const homebutton = document.getElementById("homebutton");

yoonin.onclick = function () {
    if (yoonin.innerText === "지금부터 이야기가 시작될 거야") {
        yoonin.innerText = "시작할게!";
    } else {
        yoonin.innerText = "지금부터 이야기가 시작될 거야";
    }
    homebutton.style.display = "inline-block";
}

homebutton.onclick = function () {
    window.location.href = "../index.html";
}
