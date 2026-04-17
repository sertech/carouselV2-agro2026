import '../css/style.scss'

const carouselButtons = document.querySelectorAll('.footer-btn');
const carouselTrack = document.querySelector('.carousel-track');
const carouselOverlays = document.querySelectorAll('.carousel-overlay');
const trackTransitionMs = 700; // Should match the CSS transition duration for the track movement.
const trackFrameTransitionMs = 1300; // Should match the CSS transition duration for the frame and overlay reveal.
const carouselPortals = document.querySelectorAll('.carousel-portal');
const carouselFrameImages = document.querySelectorAll('.carousel-frame-image')
const carouselContents = document.querySelectorAll('.carousel-content');

let pendingOverlayTimer; // Used to delay the overlay reveal until the slide transition finishes.
let pendingFrameTimer; // Track which frame is pending to be revealed after the slide transition.

const setActiveSlide = (activeIndex) => {
    clearTimeout(pendingOverlayTimer);
    clearTimeout(pendingFrameTimer);

    // reset all frames and overlays to the default state before activating the new one
    carouselOverlays.forEach((overlay) => {
        overlay.classList.remove('is-active');
    });

    // reset all frames to the default state before activating the new one
    carouselPortals.forEach((frame) => {
        frame.classList.remove('is-active');
    });

    // reset all carousel content to the default state before activating the new one
    carouselContents.forEach((content) => {
        content.classList.remove('is-active');
    })

    carouselTrack.style.transform = `translateX(-${activeIndex * 100}%)`;

    carouselButtons.forEach((btn, index) => {
        btn.classList.toggle('selected', index === activeIndex);
    });

    // Let the slide move finish first so the next image appears clean,
    // then play the overlay reveal from the bottom.
    pendingOverlayTimer = window.setTimeout(() => {
        switch (activeIndex) {
            case 0:
                carouselOverlays[activeIndex].style.background = 'rgba(47, 93, 58, 0.25)';
                break;
            case 1:
                carouselOverlays[activeIndex].style.background = 'rgba(94, 156, 69, 0.25)';
                break;
            case 2:
                carouselOverlays[activeIndex].style.background = 'rgba(217, 164, 65, 0.25)';
                break;
            case 3:
                carouselOverlays[activeIndex].style.background = 'rgba(168, 93, 58, 0.25)';
                break;
            case 4:
                carouselOverlays[activeIndex].style.background = 'rgba(216, 199, 161, 0.25)';
                break;
            case 5:
                carouselOverlays[activeIndex].style.background = 'rgba(122,132,68,0.25)';
                break;
            default:
                carouselOverlays[activeIndex].style.background = 'rgba(76, 66, 124, 0.55)';
        }
        carouselOverlays[activeIndex]?.classList.add('is-active');
    }, trackTransitionMs);

    pendingFrameTimer = window.setTimeout(() => {
        carouselPortals[activeIndex]?.classList.add('is-active');
        carouselContents[activeIndex]?.classList.add('is-active');
    }, trackFrameTransitionMs);
};

carouselPortals.forEach((portal, index) => {
    portal.addEventListener('mousemove', (event) => {
        const rect = portal.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = ((x - centerX) / centerX) * 80;
        const moveY = ((y - centerY) / centerY) * 80;

        carouselFrameImages[index].style.transform = `scale(1.5) translate(${moveX}px, ${moveY}px)`;
    });

    portal.addEventListener('mouseleave', () => {
        carouselFrameImages[index].style.transform = `scale(1.08) translate(0,0)`
    });
})

carouselButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        setActiveSlide(index);
    });
});

setActiveSlide(0);
