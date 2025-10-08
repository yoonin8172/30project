const container = document.getElementById("numbers-container");
const resultMessage = document.getElementById("result-message");
const homebutton = document.getElementById("homebutton");
homebutton.style.display = "none";

for (let i = 1; i <= 10; i++) {
    const numDiv = document.createElement("div");
    numDiv.innerText = i;
    numDiv.style.display = "inline-block";
    numDiv.style.margin = "10px";
    numDiv.style.cursor = "pointer";
    numDiv.style.fontSize = "30px";

    numDiv.onclick = function () {
        if (i % 2 === 0) {
            resultMessage.innerText = "짝수입니다";
            resultMessage.style.color = "blue";
        } else {
            resultMessage.innerText = "홀수입니다";
            resultMessage.style.color = "red";
        }
        homebutton.style.display = "inline-block";
    }

    container.appendChild(numDiv);
}

homebutton.onclick = function () {
    window.location.href = "../index.html";
}
