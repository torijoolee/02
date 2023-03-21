(() => {
  if (matchMedia("screen and (min-width: 640px)").matches) {
    // 640px 이상에서 사용할 JavaScript
    // viewport

    const desktopWidth = document.querySelector(".youtube").offsetWidth;
    const youtubeBar = document.querySelectorAll(".youtube .bar-lg");
    let container = document.querySelector(".youtube-container");
    const itemWidth = document.querySelector(".you-item").offsetWidth;
    let current = 0;
    let firstView = (container.style.transform = `translateX(${itemWidth}px)`);
    const viewport = document.querySelector(".you-viewport");

    container.style.transform = `translateX(${0}px)`;

    viewport.style.background = "transparent";
    viewport.style.width = `${itemWidth * 4}px`;

    viewport.style.transform = `translateX(${
      (desktopWidth - itemWidth * 4) / 2
    }px)`;

    // moving
    for (let i = 0; i < youtubeBar.length; i++) {
      youtubeBar[i].dataset.link = i;
      youtubeBar.forEach((bar) => {
        bar.addEventListener("click", (e) => {
          youtubeBar[i].classList.remove("active");
          current = parseInt(e.target.dataset.link);

          if (current == 0) {
            container.style.transform = `translateX(${0}px)`;
            container.style.transition = `0.5s`;
          }
          if (current == 1) {
            container.style.transform = `translateX(${-itemWidth * 4}px)`;
            container.style.transition = `0.5s`;
          }
          if (current == 2) {
            container.style.transform = `translateX(${-itemWidth * 8}px)`;
            container.style.transition = `0.5s`;
          }
        });
        youtubeBar[current].classList.add("active");
      });
    }
  } else {
    // 640px 미만에서 사용할 JavaScript

    const smallView = document.querySelector(".you-viewport");
    const smallyouItem = document.querySelector(".you-item").offsetWidth;
    let smallCurrent = 0;
    const smallContainer = document.querySelector(".youtube-container");

    smallView.style.transform = `translateX(${32}px)`;
    smallView.style.width = `${smallyouItem * 2}px`;

    const smallyouControl = document.querySelectorAll(".you-control .bar-lg");

    for (let j = 0; j < smallyouControl.length; j++) {
      smallyouControl[j].dataset.index = [j];

      smallyouControl.forEach((elem) => {
        elem.addEventListener("click", function (e) {
          smallyouControl[j].classList.remove("active");
          console.log(e.target.dataset.index);
          smallCurrent = parseInt(e.target.dataset.index);

          if (smallCurrent == 0) {
            smallContainer.style.transform = `translateX(0)`;
            smallContainer.style.transition = "0.5s";
          }
          if (smallCurrent == 1) {
            smallContainer.style.transform = `translateX(${
              -smallCurrent * (smallyouItem * 2)
            }px)`;
            smallContainer.style.transition = "0.5s";
          }
          if (smallCurrent == 2) {
            smallContainer.style.transform = `translateX(${
              -smallCurrent * (smallyouItem * 2)
            }px)`;
            smallContainer.style.transition = "0.5s";
          }
        });
        smallyouControl[smallCurrent].classList.add("active");
      });
    }
  }

  window.onresize = function () {
    document.location.reload();
  };
})();
