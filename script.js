const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

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
function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "") {
    alert("Please enter your name");
    return;
  }

  if (email === "") {
    alert("Please enter your email");
    return;
  }

  if (message === "") {
    alert("Please enter your message");
    return;
  }

  alert("Thank you, " + name + "! Your message has been received.");
}