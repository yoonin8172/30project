const text22 = document.getElementById("text");
const sentence22 = document.getElementById("sentence");
const homebutton22 = document.getElementById("homebutton");

let typed = false;
const message = "첫 봄 인사를 건내줘요!";

text22.onclick = function () {
    if (!typed) {
        let i = 0;
        const interval = setInterval(() => {
            if (i < message.length) {
                sentence22.innerText += message[i];
                i++;
            } else {
                clearInterval(interval);
                homebutton22.style.display = "inline-block";
            }
        }, 150);
        typed = true;
    }
}

homebutton22.onclick = function () {
    window.location.href = "../index.html";
}

