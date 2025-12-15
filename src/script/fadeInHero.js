export function fadeInHero() {
    const tl = gsap.timeline({defaults: {ease: "power2.out"}});

    tl.from(".titulo-hero", {opacity: 0, y: 50, duration: 1})
    .from(".descricao-hero", {opacity: 0, y: 50, duration: 1}, "-=0.5")
    .from(".nav-bar", {opacity: 0, y: -50, duration: 1}, "-=1");
}