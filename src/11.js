const text = document.getElementById("text");
const container = document.getElementById("scene-container");
const homebutton = document.getElementById("homebutton");

let moonCreated = false;

text.onclick = function () {
    if (!moonCreated) {
        const moon = document.createElement("div");
        moon.innerText = "🌙";
        moon.style.fontSize = "80px";
        moon.style.cursor = "pointer";
        moon.style.marginBottom = "20px";
        container.appendChild(moon);

        moon.onclick = function () {
            for (let i = 0; i < 5; i++) {
                const star = document.createElement("div");
                star.innerText = "⭐";
                star.style.fontSize = "40px";
                star.style.opacity = "0";
                star.style.display = "inline-block";
                star.style.marginRight = "10px";
                star.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                container.appendChild(star);

                setTimeout(() => {
                    star.style.opacity = "1";
                    star.style.transform = "scale(1.5)";
                    setTimeout(() => { star.style.transform = "scale(1)"; }, 250);
                }, i * 300);
            }

            setTimeout(() => {
                homebutton.style.display = "inline-block";
            }, 1800);
        };

        moonCreated = true;
    }
};

homebutton.onclick = function () {
    window.location.href = "../0_index.html";
};

