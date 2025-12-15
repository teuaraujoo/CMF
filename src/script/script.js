document.addEventListener("DOMContentLoaded", function() {
    const tl = gsap.timeline({defaults: {ease: "power2.out"}});

    tl.from(".titulo-hero, .descricao-hero", {opacity: 0, y: 100, duration: 1})
    .from(".nav-bar", {opacity: 0, y: 50, duration: 1}, "-=1");
});