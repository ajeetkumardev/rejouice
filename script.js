// Initialize Lenis
const lenis = new Lenis({
    duration: 1.2, // Duration of the scroll in seconds
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
    smooth: true, // Enable smooth scroll
})

// Animation frame loop for smooth scrolling
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function cursorEffect() {
    let hero = document.querySelector(".hero-main");

hero.addEventListener("mousemove", (e) => {
  gsap.to(".cursor", {
    x: e.x,
    y: e.y,
    duration: 0.6,
  })
});
hero.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
        scale: 1,
        opacity: 1,
        duration: 0.3,
      })
})
hero.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
        scale: 0,
        opacity: 0,
        duration: 0.3,
      })
})
}
cursorEffect();

window.onload = function() {
    gsap.from('path', {
        yPercent: 150,
        stagger: 0.05,
        ease: "back.out",
        duration: 1,
    })
}

