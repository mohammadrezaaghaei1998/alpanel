// document.addEventListener("DOMContentLoaded", function () {
//     gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
  
//     const smoother = ScrollSmoother.create({
//       wrapper: "#wrapper",
//       content: "#content",
//       smooth: 1,
//       normalizeScroll: true,
//       ignoreMobileResize: true,
//       effects: true,
//       preventDefault: true
//     });
  
//     gsap.set(".heading", {
//       yPercent: -150,
//       opacity: 1
//     });
  
//     let tl = gsap.timeline();
//     let mySplitText = new SplitText("#split-stagger", { type: "words,chars" });
//     let chars = mySplitText.chars;
  
//     chars.forEach((char, i) => {
//       smoother.effects(char, { speed: 1, lag: (i + 1) * 0.1 });
//     });
//   });
  



document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  
    const smoother = ScrollSmoother.create({
        wrapper: "#wrapper",
        content: "#content",
        smooth: 1,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
        preventDefault: true
    });

    gsap.set(".heading", {
        yPercent: -150,
        opacity: 1
    });
});
