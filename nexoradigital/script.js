
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

document.querySelectorAll("#navMenu a").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });
});

document.getElementById("year").textContent =
    new Date().getFullYear();

// Enter your actual Nexora Digital Gmail address here.
const businessEmail = "nexoradigital.in07@gmail.com";

const emailLink = document.getElementById("emailLink");

emailLink.href =
    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
    encodeURIComponent(businessEmail) +
    "&su=" + encodeURIComponent("Enquiry for Nexora Digital");

emailLink.target = "_blank";
emailLink.rel = "noopener noreferrer";
