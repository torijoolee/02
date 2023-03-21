const toggleBar = document.querySelector(".header .toggle-bar");
const showElem = document.querySelector(".toggle-con");

toggleBar.addEventListener("click", function () {
  console.log("clicked");
  showElem.classList.toggle("show");
});

const panelElems = document.querySelectorAll(".panel-heading");
const detailElems = document.querySelectorAll("details");
const panel = document.querySelectorAll(".panel-heading span");

panelElems.forEach(function (item) {
  item.addEventListener("click", function (event) {
    let clicked = event.target;
    console.log(clicked);
    panel.forEach((span) => {
      if (clicked == span) {
        clicked.parentNode.classList.toggle("active");
      }
    });
  });
});

detailElems.forEach(function (item) {
  item.addEventListener("toggle", (event) => {
    let toggled = event.target;
    console.log(toggled);
    if (toggled.attributes.open) {
      document.querySelectorAll("details[open]").forEach(function (opened) {
        if (toggled != opened) {
          opened.removeAttribute("open");
        }
      });
    }
  });
});
