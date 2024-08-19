
gsap.from(".Best", { y: -400, duration: 1 });
gsap.from(".banner-text", { x: -400, duration: 1 });
gsap.from(".a1", { y: 400, duration: 1 });
gsap.from(".container", { duration: 1, opacity: 0 });


gsap.from(".t-2", {
    scrollTrigger: {
        trigger: ".t-2",
        start: "top 80%",
        end: "end 70%",
        scrub: 2,
    },
    x: -300,
    duration: 1,
    opacity: 0,
}
);
gsap.from(".t-1", {
    scrollTrigger: {
        trigger: ".t-1",
        start: "top 80%",
        end: "end 70%",
        scrub: 2,
    },
    x: 300,
    duration: 1,
    opacity: 0,
}
);
gsap.from(".b1", {
    scrollTrigger: {
        trigger: ".b1",
        start: "top 80%",
        end: "end 70%",
        scrub: 2,
    },
    x: -300,
    duration: 1,
    opacity: 0,
}
);
gsap.from(".b2", {
    scrollTrigger: {
        trigger: ".b2",
        start: "top 80%",
        end: "end 70%",
        scrub: 2,
    },
    x: 300,
    duration: 1,
    opacity: 0,
}
);

gsap.fromTo(".l1 , .l5", {
    opacity: 0,
}, {
    opacity: 1,
    duration: 3,
    repeat: -1,
    repeatDelay: 0,
    yoyo: true,
});
gsap.fromTo(".l2 , .l6", {
    opacity: 0,
}, {
    opacity: 1,
    duration: 3,
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
});
gsap.fromTo(".l3 ,.l7", {
    opacity: 0,
}, {
    opacity: 1,
    duration: 3,
    repeat: -1,
    repeatDelay: 2,
    yoyo: true,
});
gsap.fromTo(".l4,.l8", {
    opacity: 0,
}, {
    opacity: 1,
    duration: 3,
    repeat: -1,
    repeatDelay: 3,
    yoyo: true,
});

