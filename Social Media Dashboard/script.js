let slider = document.querySelector('.roundSlider');
slider.addEventListener("click", () => {
    document.body.classList.toggle('darkMode')
});

let text = document.querySelector('.darkModeText');
text.addEventListener("click", () => {
    document.body.classList.toggle('darkMode')
});