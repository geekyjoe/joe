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

// Function to toggle between dark and light mode
const toggleTheme = () => {
  const currentMode = document.documentElement.getAttribute('data-mode');
  const newMode = currentMode === 'dark' ? '' : 'dark';
  
  // Set the new mode
  document.documentElement.setAttribute('data-mode', newMode);
  
  // Save the theme to a cookie
  setCookie("theme", newMode, 7);  // Save for 7 days
};

// Function to set a cookie
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie by name
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Event listener for tg class to toggle themes
document.querySelectorAll('.tg').forEach((element) => {
  element.addEventListener('click', toggleTheme);
});

// Function to check if a theme preference exists and apply it
function checkThemeCookie() {
  const theme = getCookie("theme");
  if (theme === "dark") {
    document.documentElement.setAttribute('data-mode', 'dark');
  } else {
    document.documentElement.setAttribute('data-mode', ''); // Default to light
  }
}

// Check theme preference on page load
checkThemeCookie();
