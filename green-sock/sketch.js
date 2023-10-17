const elements = document.querySelectorAll(".square, .circle, .triangle");

gsap.set(elements, { transformOrigin: "center" });

let animation = gsap.timeline({ repeat: -1, paused: true });

animation.to(elements, {
    duration: 2,
    x: 200,
    y: 200,
    ease: "power2.inOut",
    rotation: 360,
    opacity: 0,
    stagger: 0.2,
});

document.body.addEventListener("click", () => {
    if (animation.paused()) {
        animation.play();
    } else {
        animation.restart();
    }
});
