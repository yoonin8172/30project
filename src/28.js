const textLine = document.getElementById("text-line");
const emojiContainer = document.getElementById("emoji-container");
const homebutton = document.getElementById("homebutton");

textLine.onclick = function () {
    textLine.innerText = "3";

    textLine.onclick = function () {
        const emoji = document.createElement("span");
        emoji.innerText = "😭";
        emoji.style.fontSize = "60px";
        emojiContainer.appendChild(emoji);

        homebutton.style.display = "inline-block";
    }
}

homebutton.onclick = function () {
    window.location.href = "../0_index.html";
}
