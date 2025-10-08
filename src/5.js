const sun = document.getElementById('sun');
const sunText = document.getElementById('sun-text');
const homebutton = document.getElementById('homebutton');

let clickCount = 0;

sun.addEventListener('click', () => {
    clickCount += 1;

    if (clickCount === 1) {
        sun.style.transform = 'scale(1.2)';
        document.body.style.backgroundColor = '#ffffff';
    } else if (clickCount === 2) {
        sun.style.transform = 'scale(1.5)';
        sunText.style.opacity = 1;
    } else if (clickCount === 3) {
        sun.style.transform = 'scale(1.8)';
        homebutton.style.display = 'inline-block';
    }
});

homebutton.addEventListener('click', () => {
    window.location.href = "../0_index.html";
});


