const container = document.getElementById("text-container");
const homebutton = document.getElementById("homebutton");

homebutton.style.display = "none";

// 첫 번째 문장
const line1 = document.getElementById("line1");

line1.onclick = function () {
    const line2 = document.createElement("div");
    line2.className = "text-line";
    line2.innerText = "마을을 구하기 위해서는 js공부를 더 많이 해야 합니다...";
    container.appendChild(line2);

    line2.onclick = function () {
        const line3 = document.createElement("div");
        line3.className = "text-line";
        line3.innerText = "남은 시간 더 열심히 공부해봐요!";
        container.appendChild(line3);

        line3.onclick = function () {
            homebutton.style.display = "inline-block";
        }

        line2.onclick = null;
    }

    line1.onclick = null;
}

homebutton.onclick = function () {
    window.location.href = "../index.html";
}
