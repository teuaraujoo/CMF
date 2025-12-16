export function fadeInHero() {
    const tl = gsap.timeline({defaults: {ease: "power2.out"}});

    tl.from(".hero-title", {
        opacity: 0, 
        y: 50,
        duration: 1
    })
    .from(".hero-description", {
        opacity: 0, 
        y: 50, 
        duration: 1
    }, 
        "-=0.5")
    .from(".nav-links", {
        opacity: 0, 
        y: -50, 
        duration: 1
    }, 
        "-=1")
    .from(".left-side", {
        opacity: 0, 
        y: -50, 
        duration: 1
    }, 
        "-=1");
}