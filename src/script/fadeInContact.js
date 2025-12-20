export function fadeInContact() {

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        defaults: { ease: 'power1.out' },
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none none' // play once when it enters
        }
    });

    tl.from('.contact-infos', { 
        opacity: 0, 
        x: -50, 
        duration: 0.8 
    })
    .from('.maps', { 
        opacity: 0, 
        x: 50, 
        duration: 0.8 
    });
}