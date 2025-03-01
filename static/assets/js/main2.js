
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

let panelsSection = document.querySelector("#panels"),
    panelsContainer = document.querySelector("#panels-container"),
    panels = gsap.utils.toArray("#panels-container .panel"),
    tween;

document.querySelectorAll(".anchor").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        let targetElem = document.querySelector(this.getAttribute("href")),
            y = targetElem;

        if (targetElem && panelsContainer.contains(targetElem)) {
            let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
                totalMovement = panelsContainer.scrollWidth - panelsContainer.clientWidth;
            y = tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll;
        }

        gsap.to(window, {
            scrollTo: { y: y, autoKill: false },
            duration: 1
        });
    });
});

tween = gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: "#panels-container",
        pin: true,
        start: "top top",
        scrub: 1,
        snap: {
            snapTo: 1 / (panels.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 }
        },
        end: () => "+=" + panelsContainer.scrollWidth,
    }
});

ScrollTrigger.refresh();
















document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});
