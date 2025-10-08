const text = document.getElementById("text");
const homebutton = document.getElementById("homebutton");

text.onclick = function () {
    const colors = ["red", "orange", "pink", "blue"];
    let i = 0;

    function changeColor() {
        if (i < colors.length) {
            text.style.color = colors[i];
            i++;
            setTimeout(changeColor, 700);
        } else {
            text.style.color = "green";
            homebutton.style.display = "inline-block";
        }
    }

    changeColor();
};

homebutton.onclick = function () {
    window.location.href = "../0_index.html";
};
