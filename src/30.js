const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const homebutton = document.getElementById("homebutton");

step1.onclick = function () {
    step2.innerText = "방금 함정이 하나 있었어요";

    step2.onclick = function () {
        step3.innerText = "무지개의 색 하나가 부족했어요~ 어떤 색일까요?";

        step3.onclick = function () {
            const colors = ["blue", "navy", "pink"];
            colors.forEach(color => {
                const circle = document.createElement("div");
                circle.style.width = "30px";
                circle.style.height = "30px";
                circle.style.borderRadius = "50%";
                circle.style.backgroundColor = color;
                circle.style.display = "inline-block";
                circle.style.marginRight = "10px";
                circle.style.cursor = "pointer";

                circle.onclick = function () {
                    if (color === "navy") {
                        step4.innerText = "눈썰미가 좋은걸요?";
                    } else {
                        step4.innerText = "다시 생각해보세요.";
                    }
                    homebutton.style.display = "inline-block";
                }

                step4.appendChild(circle);
            });
        }
    }
}

homebutton.onclick = function () {
    window.location.href = "../0_index.html";
}
