export function fadeInEducation() {

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        defaults: { ease: 'power1.out' },
        scrollTrigger: {
            trigger: '#education',
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none none' // play once when it enters
        }
    });

    tl.from('.education-content', { 
        opacity: 0, 
        x: -50, 
        duration: 0.45
    })
    .from('.education-cardscontainer', {
        opacity: 0,
        y: 30,
        duration: 0.45
    }, '-=0.35')
    .from('.education-img', {
        opacity: 0,
        x: 40,
        duration: 0.45
    }, '-=0.35');
}