document.addEventListener("DOMContentLoaded", function () {
  // Your function goes here
  const hamburger = document.querySelector(".menu-button")
  const hamburgerMenu = document.querySelector(".hamburger-menu")
  const hamburgerToggler = () => {
    setTimeout(() => {
      hamburgerMenu.classList.toggle("shown")
    }, 500)
  }

  hamburger.addEventListener("click", hamburgerToggler)
})

var docsUrl = "https://docs.lekh.app/?_new=true";
//var docsUrl = "http://localhost:3001/?_new=true";

function startDrawing() {
  window.open(docsUrl, '_blank').focus();
}
