gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
    });

    gsap.fromTo('.hero-section', {
        opacity: 1,
    }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true
        }
    });

    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');

    itemsL.forEach(item => {
        gsap.fromTo(item, {
            x: -50,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true,
            }
        });
    });

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item');

    itemsR.forEach(item => {
        gsap.fromTo(item, {
            x: 50,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true,
            }
        });
    });
}