// Toggle class active
const navbarMenu = document.querySelector(".navbar-menu");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarMenu.classList.toggle("active");
};

// klik di luar hamburger menu dan navbar menu untuk menghilangkan navbar menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove("active");
  }
});
