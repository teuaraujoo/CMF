export function fadeInHowItWorks() {

    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
            trigger: '#howitworks',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        }
    });

        tl.from('.howitworks-content', { 
        opacity: 0, 
        y: 50, 
        duration: 0.8 
    })
    .from('.cards-container .card', { 
        opacity: 0, 
        y: 30, 
        stagger: 0.18, 
        duration: 0.8 
    },
        '-=0.4');
}