const menuElems = document.querySelectorAll(".nav-menu");
const menuCon = document.querySelector(".header-wrap");

const showMenu = document.querySelector(".header-menu");

menuElems.forEach((menu) => {
  for (let i = 0; i < menuElems.length; i++) {
    menu.addEventListener("mouseenter", function () {
      showMenu.style.opacity = "0.9";
      showMenu.style.transform = `translateY(0%)`;
    });
  }
});
menuCon.addEventListener("mouseleave", function () {
  showMenu.style.opacity = "0";
});
