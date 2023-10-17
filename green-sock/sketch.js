// Animation with GSAP
gsap.to("#animated-box", {
    duration: 2,
    x: 200, // Move 200 pixels to the right
    backgroundColor: "#e74c3c", // Change background color
    borderRadius: "50%", // Make it a circle
    ease: "bounce.out", // Use a bounce easing function
});
