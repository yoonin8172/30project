const peopleword = document.getElementById("peopleword");
const container = document.getElementById("scene-container");
const homebutton = document.getElementById("homebutton");

peopleword.onclick = function () {
    const flower = document.createElement("div");
    flower.innerText = "🌸";
    flower.style.fontSize = "60px";
    flower.style.display = "inline-block";
    flower.style.cursor = "pointer";
    flower.style.marginRight = "10px";
    flower.style.transition = "transform 1s";
    container.appendChild(flower);

    flower.onclick = function () {
        flower.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(15deg)' },
            { transform: 'rotate(-15deg)' },
            { transform: 'rotate(15deg)' },
            { transform: 'rotate(-15deg)' },
            { transform: 'rotate(360deg)' }
        ], { duration: 2000, easing: 'ease-in-out' });


        setTimeout(() => {
            container.removeChild(flower);
            const family = document.createElement("div");
            family.innerText = "👪";
            family.style.fontSize = "80px";
            family.style.display = "inline-block";
            family.style.transition = "transform 1s";
            container.appendChild(family);
            family.style.transform = "rotate(360deg)";

            setTimeout(() => {
                homebutton.style.display = "inline-block";
            }, 1000);
        }, 2000);
    };
};

homebutton.onclick = function () {
    window.location.href = "../index.html";
};
