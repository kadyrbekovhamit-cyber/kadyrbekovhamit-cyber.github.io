"use strict";

// The only script enhances the small-screen navigation. No network requests,
// form submissions, cookies, analytics or browser storage are used.
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-navigation");

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuButton.focus();
    }
  });

  window.matchMedia("(min-width: 681px)").addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });
}
