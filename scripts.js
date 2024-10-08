console.log('js file connected');

const mobileMenuClose = document.getElementById("mobileMenuClose");
const headerNavBurger = document.getElementById("headerNavBurger");
const mobileMenu = document.getElementById("mobileMenu");


document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded")

  mobileMenuClose.onclick = () => {
    mobileMenu.style.display = "none";
  };

  headerNavBurger.onclick = () => {
    mobileMenu.style.display = "block";
  }
});
