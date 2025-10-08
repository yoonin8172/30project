const dark = document.getElementById("dark");
const homebutton = document.getElementById("homebutton");

homebutton.style.display = "none";
dark.parentElement.onclick = function () {
    dark.style.color = "black";
    homebutton.style.display = "inline-block";
};

homebutton.onclick = function () {
    window.location.href = "../index.html";
};
