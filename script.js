document.addEventListener("DOMContentLoaded", function() {
  var menu = document.querySelector(".menu");
  var openMenuButton = document.querySelector(".open-menu");
  var closeMenuButton = document.querySelector(".close-menu");

  function openMenu() {
    menu.style.display = "flex";
    menu.style.right = "0";
  }

  function closeMenu() {
    menu.style.display = "none";
    menu.style.right = "-100%";
  }

  openMenuButton.addEventListener("click", openMenu);
  closeMenuButton.addEventListener("click", closeMenu);
});