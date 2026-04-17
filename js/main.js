import '../css/style.scss'

const carouselButtons = document.querySelectorAll('.footer-btn');
const carouselTrack = document.querySelector('.carousel-track');
const carouselOverlays = document.querySelectorAll('.carousel-overlay');
const trackTransitionMs = 700; // Should match the CSS transition duration for the track movement.

let pendingOverlayTimer; // Used to delay the overlay reveal until the slide transition finishes.

const setActiveSlide = (activeIndex) => {
    clearTimeout(pendingOverlayTimer);

    carouselOverlays.forEach((overlay) => {
        overlay.classList.remove('is-active');
    });

    carouselTrack.style.transform = `translateX(-${activeIndex * 100}%)`;

    carouselButtons.forEach((btn, index) => {
        btn.classList.toggle('selected', index === activeIndex);
    });

    // Let the slide move finish first so the next image appears clean,
    // then play the overlay reveal from the bottom.
    pendingOverlayTimer = window.setTimeout(() => {
        switch (activeIndex) {
            case 0:
                carouselOverlays[activeIndex].style.background = 'rgba(47, 93, 58, 0.55)';
                break;
            case 1:
                carouselOverlays[activeIndex].style.background = 'rgba(94, 156, 69, 0.55)';
                break;
            case 2:
                carouselOverlays[activeIndex].style.background = 'rgba(217, 164, 65, 0.55)';
                break;
            case 3:
                carouselOverlays[activeIndex].style.background = 'rgba(168, 93, 58, 0.55)';
                break;
            case 4:
                carouselOverlays[activeIndex].style.background = 'rgba(216, 199, 161, 0.55)';
                break;
            case 5:
                carouselOverlays[activeIndex].style.background = 'rgba(122,132,68,0.55)';
                break;
            default:
                carouselOverlays[activeIndex].style.background = 'rgba(76, 66, 124, 0.55)';
        }
        carouselOverlays[activeIndex]?.classList.add('is-active');
    }, trackTransitionMs);
};

carouselButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        setActiveSlide(index);
    });
});

setActiveSlide(0);
