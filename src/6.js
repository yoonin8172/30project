const bird = document.getElementById("bird");
const homebutton = document.getElementById("homebutton");

let clicked = false;

bird.onclick = function () {
    if (!clicked) {
        bird.style.transition = "transform 2s linear";
        bird.style.transform = "translateX(500px)"; // 오른쪽으로 이동
        clicked = true;
        setTimeout(() => {
            homebutton.style.display = "inline-block"; // 이동 끝나면 홈 버튼 등장
        }, 2000);
    }
};

homebutton.onclick = function () {
    window.location.href = "../0_index.html";
};



