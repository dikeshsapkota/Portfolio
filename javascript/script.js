import { Elements } from "./element.js";

const {
  menuBtn,
  navLinks,
  draggableText,
  typingText,
  name,
  email,
  message,
  themeSwitch,
  skillTabs,
  skillsContents
} = Elements;
const roles = [
  "Aspiring Full Stack Developer",
  "BSc CSIT Student",
  "Problem Solver",
  "Coffee Driven Coder ☕",
  "Chess Enthusiast ♟️",
  "Football Fan ⚽",
  "Funny Guy 😆"
];


//TYPING EFFECT
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingText.textContent =
      currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingText.textContent =
      currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();
//NAVIGATION BAR TOGGLE
menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
//SWITCH THEME
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("light-theme");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("light-theme")
      ? "light"
      : "dark"
  );
});

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-theme");
  themeSwitch.checked = true;
}
//MESSAGE SENDING
window.sendMessage = function () {
  if (name.value === "") {
    alert("Please enter your name");
    return;
  }

  if (email.value === "") {
    alert("Please enter your email");
    return;
  }

  if (message.value === "") {
    alert("Please enter your message");
    return;
  }

  alert("Thank you, " + name.value + "! Your message has been received.");
};
//DRAGGING TEXT
let isDragging = false;
let startX = 0;
let startY = 0;

draggableText.addEventListener("mousedown", function (e) {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  draggableText.style.transition = "none";
});

document.addEventListener("mousemove", function (e) {
  if (!isDragging) return;

  const moveX = e.clientX - startX;
  const moveY = e.clientY - startY;

  draggableText.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

document.addEventListener("mouseup", function () {
  if (!isDragging) return;

  isDragging = false;
  draggableText.style.transition = "transform 0.5s ease";
  draggableText.style.transform = "translate(0, 0)";
});

//skills tab switcher
skillTabs.forEach((tab) => {
  tab.addEventListener("click", () => {

    skillTabs.forEach((btn) => {
      btn.classList.remove("active");
    });

    skillsContents.forEach((content) => {
      content.classList.remove("active");
    });

    tab.classList.add("active");

    const targetId = tab.dataset.target;

    document
      .getElementById(targetId)
      .classList.add("active");

  });
});