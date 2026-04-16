import '../css/style.scss'

const carouselButtons = document.querySelectorAll('.footer-btn');
const carouselTrack = document.querySelector('.carousel-track');

carouselButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        console.log(`Button ${index + 1} clicked!`);
        if (index === 0) {
            carouselTrack.style.transform = 'translateX(0)';
            carouselButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        } else if (index === 1) {
            carouselTrack.style.transform = 'translateX(-100%)';
            carouselButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        } else if (index === 2) {
            carouselTrack.style.transform = 'translateX(-200%)';
            carouselButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        } else if (index === 3) {
            carouselTrack.style.transform = 'translateX(-300%)';
            carouselButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        } else if (index === 4) {
            carouselTrack.style.transform = 'translateX(-400%)';
            carouselButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        } else if (index === 5) {
            carouselTrack.style.transform = 'translateX(-500%)';
            carouselButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        }
    });
});
