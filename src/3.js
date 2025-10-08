const tree = document.getElementById('tree');
const arrow = document.getElementById('arrow');
const homebutton = document.getElementById('homebutton');

arrow.addEventListener('click', () => {
    tree.style.transform = 'scale(1.5)';
    homebutton.style.display = 'inline-block';
});

homebutton.addEventListener('click', () => {
    window.location.href = "../index.html";
});

