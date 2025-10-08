const line = document.getElementById("line");
const container = document.getElementById("container");
const homebutton = document.getElementById("homebutton");

line.onclick = function () {
    line.style.color = "blue";

    const newLine = document.createElement("div");
    newLine.className = "text-line";
    newLine.innerText = "새로운 문장이 나타났어요!";
    container.appendChild(newLine);
    homebutton.style.display = "inline-block";
    newLine.onclick = function () {
        newLine.style.color = "purple";
    }
}

homebutton.onclick = function () {
    window.location.href = "../index.html";
}
