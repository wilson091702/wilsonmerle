// Start the JavaScript activities here.


const themeToggle = 
document.getElementById("theme-toggle");

themeToggle .onclick = function() {
document.body.classList.toggle("light");
};

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

const contactForm = 
document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) { event.preventDefault();
});

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function(card) { 
card.classList.add("active");
});
