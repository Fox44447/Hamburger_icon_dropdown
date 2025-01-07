

"use strict";

// Get the elements
const mobileMenu = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

// Toggle the menu visibility on click
mobileMenu.addEventListener("click", function () {
  console.log("Menu toggle clicked!"); // Debugging line
  mobileMenu.classList.toggle("active");
  navList.classList.toggle("active");
});
