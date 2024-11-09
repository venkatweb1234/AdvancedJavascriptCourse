// Smooth scrolling for navigation
/*Adding JavaScript for Interactivity

Smooth Scrolling: Implement smooth scrolling when users click on navigation links.
Simple Form Validation: Validate the contact form to ensure the fields aren’t empty.*/
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Basic contact form validation
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
  } else {
    alert("Message sent!");
    contactForm.reset();
  }
});

document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    const position = element.getBoundingClientRect();
    if (position.top < window.innerHeight) {
      element.classList.add("visible");
    }
  });
});

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
