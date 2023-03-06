let image;
let bg;
let text;

function getImageSize () {
    image = document.getElementById('image-hero');
    bg = document.getElementById('landing-bg');
    text = document.getElementById('text-mask');
    
    bg.style.width = `${image.x - image.width/2}px`;
    text.style.width = `${bg.getBoundingClientRect().right - text.getBoundingClientRect().x}px`;
};




window.addEventListener('resize', () => {
    image = document.getElementById('image-hero');
    bg = document.getElementById('landing-bg');
    text = document.getElementById('text-mask');

    
    bg.style.width = `${image.x - image.width/2}px`
    text.style.width = `${bg.getBoundingClientRect().right - text.getBoundingClientRect().x}px`;
})