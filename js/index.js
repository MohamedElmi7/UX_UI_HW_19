const mySkillsButton = document.getElementById("mySkillsbutton");
const myWorkButton = document.getElementById("myWorkbutton");

mySkillsButton.addEventListener("click", scrollToElement);
myWorkButton.addEventListener("click", scrollToElement);

function scrollToElement(event) {
    event.preventDefault(); 
    const targetId = event.target.getAttribute("data-target"); 
    const targetElement = document.getElementById(targetId); 
    targetElement.scrollIntoView({ behavior: "smooth" });
  }