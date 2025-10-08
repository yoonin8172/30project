const wolfText = document.getElementById("wolf-text");
const homebutton = document.getElementById("homebutton");

homebutton.style.display = "none";

let clickCount = 0;

wolfText.onclick = function () {
    if (clickCount < 3) {
        clickCount++;
        let currentSize = parseInt(window.getComputedStyle(wolfText).fontSize);
        wolfText.style.fontSize = (currentSize + 20) + "px";
        let currentMargin = parseInt(window.getComputedStyle(wolfText).marginLeft) || 0;
        wolfText.style.marginLeft = (currentMargin + 20) + "px";
        wolfText.innerText += "!";

        if (clickCount === 3) {
            homebutton.style.display = "inline-block";
        }
    }
};

homebutton.onclick = function () {
    window.location.href = "../0_index.html";
};
