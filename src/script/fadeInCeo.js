export function fadeInCeo() {

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
            trigger: '#ceo',
            start: 'top 90%',
            end: 'bottom 20%',
            toggleActions: 'play none none none' // play once when it enters
        }
    });

    tl.from('.ceo-content', { 
        opacity: 0, 
        x: 50, 
        duration: 0.8 
    })
    .from('.ceo-image', { 
        opacity: 0, 
        x: -50, 
        duration: 0.8 
    });
}
