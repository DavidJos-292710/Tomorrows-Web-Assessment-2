// Creating a timeline with animation
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// Creating the animation for the slider and webpage
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".SLIDER", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".INTRODUCTION", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".SLOGAN", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=0.5");
tl.fromTo(".BLOG", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

// Applying the sliding animation into the other pages.
tl.fromTo(".TITLE", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=2");
tl.fromTo(".APIS1", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=1");
tl.fromTo(".APIS2", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=1");
tl.fromTo(".APIS3", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=1");
tl.fromTo(".APIS4", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=1");




