(() => {
  //show all menu list
  const menuElems = document.querySelectorAll(".nav-menu");
  const menuCon = document.querySelector(".header-wrap");
  const showMenu = document.querySelector(".header-menu");
  let total = menuElems.length;
  // open menu
  menuElems.forEach((menu) => {
    for (let i = 0; i < total; i++) {
      menu.addEventListener("mouseenter", function () {
        showMenu.style.opacity = "0.9";
        showMenu.style.transform = `translateY(0%)`;
        showMenu.classList.remove("none");
      });
    }
  });
  menuCon.addEventListener("mouseleave", function () {
    showMenu.style.opacity = "0";
    showMenu.classList.add("none");
  });
})();
