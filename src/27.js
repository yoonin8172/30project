const numbersContainer = document.getElementById("numbers-container");
const sumResult = document.getElementById("sum-result");
const homebutton = document.getElementById("homebutton");

let selectedNumbers = [];

for (let i = 1; i <= 3; i++) {
    const numSpan = document.createElement("span");
    numSpan.innerText = i + " ";
    numSpan.style.cursor = "pointer";
    numSpan.style.fontSize = "20px";

    numSpan.onclick = function () {
        selectedNumbers.push(i);

        if (selectedNumbers.length === 2) {
            const sum = selectedNumbers[0] + selectedNumbers[1];
            sumResult.innerText = "합: " + sum;
            selectedNumbers = [];

            homebutton.style.display = "inline-block";
        }
    }

    numbersContainer.appendChild(numSpan);
}

homebutton.onclick = function () {
    window.location.href = "../0_index.html";
}

