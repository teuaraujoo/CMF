export function fadeInFooter() {

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        defaults: { ease: 'power1.out' },
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 20%',
            end: 'bottom 20%',
            toggleActions: 'play none none none' // play once when it enters
        }
    });

    tl.from('.footer-content', { 
        opacity: 0, 
        y: 50, 
        duration: 0.8 
    })
    .from('.developer', { 
        opacity: 0, 
        x: 50, 
        duration: 0.8 
    });
}