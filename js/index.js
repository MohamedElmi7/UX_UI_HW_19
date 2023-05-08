function smoothScroll(targetId) {
  const target = document.getElementById(targetId);
  const targetPosition = target.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;

  function step(currentTime) {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(step);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(step);
}
const mySkillsbutton = document.getElementById("mySkillsbutton");
const myWorkbutton = document.getElementById("myWorkbutton");

mySkillsbutton.addEventListener("click", function() {
  const mySkills = document.getElementById("mySkills");
  mySkills.scrollIntoView({ behavior: "smooth" });
});

myWorkbutton.addEventListener("click", function() {
  const myWork = document.getElementById("myWork");
  myWork.scrollIntoView({ behavior: "smooth" });
});

let buttonClicked = false;

mySkillsbutton.addEventListener("click", function() {
  if (buttonClicked) {
    const mySkills = document.getElementById("mySkills");
    mySkills.scrollIntoView({ behavior: "smooth" });
  }
  buttonClicked = true;
});

myWorkbutton.addEventListener("click", function() {
  if (buttonClicked) {
    const myWork = document.getElementById("myWork");
    myWork.scrollIntoView({ behavior: "smooth" });
  }
  buttonClicked = true;
});
document.getElementById("mySkillsbutton").addEventListener("click", function() {
  smoothScroll("mySkills");
});

document.getElementById("myWorkbutton").addEventListener("click", function() {
  smoothScroll("myWork");
});