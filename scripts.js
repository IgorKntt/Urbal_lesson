

const mobileMenuClose = document.getElementById("mobileMenuClose");
const headerNavBurger = document.getElementById("headerNavBurger");
const mobileMenu = document.getElementById("mobileMenu");
const headerSlider = document.getElementById("headerSlider");

document.addEventListener("DOMContentLoaded", () => {

  mobileMenuClose.onclick = () => {
    mobileMenu.style.display = "none";
  };

  headerNavBurger.onclick = () => {
    mobileMenu.style.display = "block";
  }

  headerSlider.addEventListener("click", e => {
    if (e.target.tagName != "A") return;

    headerSlider.querySelectorAll("li").forEach((element) => element.className = "");
    e.target.parentNode.className = "active";
  })
});
