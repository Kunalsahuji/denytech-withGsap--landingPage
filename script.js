var tl = gsap.timeline();

tl.from(".nav-left", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: -100,
  stragger: 0.3,
    yoyo: true,
  color: "tomato",
});

tl.from(".nav-center", {
  opacity: 0,
  duration: 1, 
  delay: 0.1,
  // y: -100,
  stragger: 0.1,
  yoyo: true,

  scale: 0.1,
});

tl.from(".nav-right", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  x: 80,
  stragger: 0.3,
  // yoyo: true,
  color: "crimson",
});
tl.from("h1", {
  opacity: 0,
  duration: 1.5,
  delay: 0.5,
  scale: 0.1,
  stragger: 0.3,
  yoyo: true,
  color: "crimson",
});

tl.from(".img1", {
  opacity: 0,
  duration: 1,
  scale: 0.1,
  rotate: 360,
  x: -1000,
  stragger: 0.3,
  yoyo: true,
});
tl.from(".img2", {
  opacity: 0,
  duration: 1,
  x: 1000,
  scale: 0.1,
  rotate: 360,
  stragger: 0.3,
});
tl.from(".img3", {
  opacity: 0,
  duration: 1,
  y: 500,
  scale: 0.1,
  rotate: 360,
  stragger: 0.3,
});
tl.from(".img4", {
  opacity: 0,
  duration: 0.8,
  y: -500,
  scale: 0.1,
  rotate: 360,
  stragger: 0.3,
});
tl.from(".img5", {
  opacity: 0,
  duration: 1,
  scale: 3,
  rotate: 360,
  stragger: 0.3,
});
