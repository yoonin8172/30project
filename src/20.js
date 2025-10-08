const emoji = document.getElementById("emoji");
const homebutton = document.getElementById("homebutton");

let jumpCount = 0;

emoji.onclick = function () {
    let jumpTimes = 0;

    function jump() {
        if (jumpTimes < 3) {

            emoji.style.transition = "transform 0.3s";
            emoji.style.transform = "translateY(-100px)";

            setTimeout(() => {
                emoji.style.transform = "translateY(0)";
                jumpTimes++;
                setTimeout(jump, 150);
            }, 150);
        } else {



            homebutton.style.display = "inline-block";
        }
    }

    jump();
}

homebutton.onclick = function () {
    window.location.href = "../0_index.html";
}
