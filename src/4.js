const cloudContainer = document.getElementById("cloud-container");
const homebutton = document.getElementById("homebutton");

let clickCount = 1;
const maxClouds = 4;

function addCloud() {
    clickCount += 1;

    const newCloud = document.createElement("div");
    newCloud.classList.add("cloud");

    if (clickCount < maxClouds) {
        newCloud.innerText = "🌥️";
        newCloud.onclick = addCloud;
    } else if (clickCount === maxClouds) {
        newCloud.innerText = "🌧️";
        homebutton.style.display = "inline-block";
    }

    cloudContainer.appendChild(newCloud);
}

const initialCloud = cloudContainer.querySelector(".cloud");
initialCloud.onclick = addCloud;

homebutton.onclick = function () {
    window.location.href = "../index.html";
}
