document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Message sent!");
    });
});



const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}

const sentences = [
  "Crafting Dynamic Web Solutions: Full Stack Developer & Problem Solver",
  "Building scalable web applications with a focus on user experience",
  "Creating innovative solutions for complex problems",
  
];

let part = 0;
let partIndex = 0;
let interval;
let deleting = false;
const element = document.getElementById('typed');

// Function to type text
function type() {
  const text = sentences[part];

  if (!deleting) {
      element.textContent = text.substring(0, partIndex + 1);
      partIndex++;

      // If the text is fully typed out, start deleting after a pause
      if (partIndex === text.length) {
          deleting = true;
          clearInterval(interval);
          setTimeout(() => {
              interval = setInterval(type, 25);
          }, 2000);
      }
  } else {
      element.textContent = text.substring(0, partIndex - 1);
      partIndex--;

      // If the text is fully deleted, move to the next sentence
      if (partIndex === 0) {
          deleting = false;
          part = (part + 1) % sentences.length; // Cycle through sentences
          clearInterval(interval);
          setTimeout(() => {
              interval = setInterval(type, 100);
          }, 500);
      }
  }
}

// Start typing
interval = setInterval(type, 50);
