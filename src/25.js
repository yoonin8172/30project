const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const homebutton25 = document.getElementById("homebutton");

rock.onclick = function () {
    result.innerText = "승!";
    homebutton25.style.display = "inline-block";
}

scissors.onclick = function () {
    result.innerText = "패!";
    homebutton25.style.display = "inline-block";
}

homebutton25.onclick = function () {
    window.location.href = "../0_index.html";
}
