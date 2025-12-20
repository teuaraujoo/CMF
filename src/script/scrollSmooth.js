
// selecionar apenas âncoras internas (hash links) dentro da nav
const menuLinks = document.querySelectorAll('.nav-links a[href^="#"]');

export function scrollSmooth (){
    function getDistanceFromTheTop(element) {
        const id = element.getAttribute("href");
        const target = document.querySelector(id);
        if (!target) return 0;
        return target.offsetTop;
    }

    function scrollToSection(event) {
        // somente interceptar links internos (hash)
        event.preventDefault();
        const anchor = event.currentTarget;
        const distanceFromTheTop = getDistanceFromTheTop(anchor);
        smoothScrollTo(0, distanceFromTheTop);
    }

    // anexa handler somente às âncoras internas; links externos (whatsapp) NÃO serão interceptados
    menuLinks.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });

    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();
    
        duration = typeof duration !== "undefined" ? duration : 400;
    
        const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1)
          return (distance / 2) * time * time * time * time + from;
        return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };
    
        const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60);
    }
}