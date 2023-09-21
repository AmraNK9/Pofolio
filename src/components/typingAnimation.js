import { timeout } from "./loader.js";
import "https://unpkg.com/scrollreveal";

const header = document.querySelector(".header");
const subHeader = document.querySelector(".subHeader");

function typeText(element, text, charIndex, charDelay, callback) {
  if (charIndex <= text.length) {
    element.innerHTML = text.slice(0, charIndex);
    charIndex++;
    setTimeout(function () {
      typeText(element, text, charIndex, charDelay, callback);
    }, charDelay);
  } else {
    // Call the callback function once typing is complete
    if (callback) {
      callback();
    }
  }
}

function startTyping() {
  typeText(header,"I'am Nay Myo Thant", 0, 100, function () {
    // Callback to start typing subHeader after header is typed
    typeText(subHeader,"Freelance Web Developer", 0, 50, null);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(startTyping, timeout + 200);
});

ScrollReveal().reveal(header, {
  reset: true,
});
ScrollReveal().reveal(subHeader, {
  reset: true,
  delay:500
});