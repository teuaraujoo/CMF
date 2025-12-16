export function fadeInAbout() {

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
            trigger: '#about',
            start: 'top 60%',
            end: 'bottom 20%',
            toggleActions: 'play none none none' // play once when it enters
        }
    });

    tl.from('.about-image', { 
        opacity: 0, 
        x: -50, 
        duration: 0.8 
    })
    .from('.about-content', { 
        opacity: 0, 
        x: 50, 
        duration: 0.8 
    }, 
        '-=0.4')
    .from('.about-stats .stat', { 
        opacity: 0, 
        y: 30, 
        stagger: 0.15, 
        duration: 0.6 
    }, 
        '-=0.4');
}
