gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // initialize
  gsap.to(".sun", { x: window.innerWidth, y: "-200px" });
  const lineOne = document.getElementsByClassName("line-one")[0];

  const placeToRunSun = document.createElement("div");
  placeToRunSun.className = "placeToRunSun";
  placeToRunSun.style.height = "100px";
  placeToRunSun.style.width = "100px";
  placeToRunSun.style.marginTop = "200px";
  lineOne.appendChild(placeToRunSun);

  // scroll trigger
  const childrenInLineOne = lineOne.children;
  const child1 = childrenInLineOne[0];
  const child2 = childrenInLineOne[1];
  const child3 = childrenInLineOne[2];
  const child4 = childrenInLineOne[3];
  const child5 = childrenInLineOne[4];
  const child6 = childrenInLineOne[5];
  gsap.to(child1, {
    scrollTrigger: { trigger: child1, markers: true },
    y: Y_LINE_ONE,
  });
  gsap.to(child2, {
    scrollTrigger: { trigger: child2 },
    y: Y_LINE_ONE,
    delay: 0.1,
  });
  gsap.to(child3, {
    scrollTrigger: { trigger: child3 },
    y: Y_LINE_ONE,
    delay: 0.2,
  });
  gsap.to(child4, {
    scrollTrigger: { trigger: child4 },
    y: Y_LINE_ONE,
    delay: 0.3,
  });
  gsap.to(child5, {
    scrollTrigger: { trigger: child5 },
    y: Y_LINE_ONE,
    delay: 0.4,
  });
  gsap.to(child6, {
    scrollTrigger: { trigger: child6 },
    y: Y_LINE_ONE,
    delay: 0.5,
    onComplete: function () {
      lineOne.style.overflow = "visible";
      const body = document.getElementsByTagName("body")[0];
      gsap.to(body, { backgroundColor: "yellow" });
    },
  });
  gsap.to("placeToRunSun", {
    scrollTrigger: { trigger: placeToRunSun, markers: true },
    onComplete: function () {
      gsap.to(".sun", { x: 0 });
    },
  });
});

const Y_LINE_ONE = "-400px";
