(() => {
  // header carusel
  if (matchMedia("screen and (min-width: 640px)").matches) {
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const visualElem = document.querySelector(".img-con .slide");
    const headerBg = ["main01.jpg", "main02.jpg", "main03.jpg", "main04.jpg"];
    const visBars = document.querySelectorAll(".visual .control .bar");
    const startBtn = document.querySelector(".visual .start");
    const stopBtn = document.querySelector(".visual .pause");

    let currentPage = 0;
    let totalPage = headerBg.length;
    let toggle = false;

    prevBtn.addEventListener("click", function () {
      if (currentPage > 0) {
        currentPage--;
        console.log(currentPage);
      } else {
        currentPage = totalPage - 1;
      }
      changeImage();
      barActive();
      clearInterval(auto);
    });

    nextBtn.addEventListener("click", function () {
      if (currentPage < totalPage - 1) {
        currentPage++;
        console.log(currentPage);
      } else {
        currentPage = 0;
      }
      changeImage();
      barActive();
      clearInterval(auto);
    });

    function changeImage() {
      visualElem.style.background = `url(/image/${headerBg[currentPage]}) no-repeat 0 0 `;
      visualElem.style.transition = `0.5s`;
    }
    changeImage();

    function barActive() {
      visBars.forEach((bar) => {
        bar.classList.remove("active");
      });
      visBars[currentPage].classList.add("active");
    }
    barActive();

    function auto() {
      visBars.forEach((bar) => {
        bar.classList.remove("active");
      });
      currentPage++;
      if (currentPage > 3) {
        visBars[currentPage - 1].classList.remove("active");
        currentPage = 0;
        visualElem.style.background = `url(/image/${headerBg[0]}) no-repeat 0 0 `;
        visBars[currentPage].classList.add("active");
      }
      changeImage();
      visBars[currentPage].classList.add("active");
      console.log(currentPage);
    }

    let interver = setInterval(auto, 3000);

    // pause button
    stopBtn.addEventListener("click", function () {
      toggle = true;
      startBtn.classList.remove("active");
      stopBtn.classList.add("active");
      clearInterval(interver);
    });

    //start button
    startBtn.addEventListener("click", function () {
      startBtn.classList.add("active");
      stopBtn.classList.remove("active");
      if (toggle == true) {
        toggle = false;
        interver = setInterval(auto, 3000);
      } else {
        clearInterval(interver);
      }
    });
  } else {
    const mobileImg = document.querySelector(".mob-slide");
    const prevmob = document.querySelector(".mobile-visual .prev");
    const nextmob = document.querySelector(".mobile-visual .next");

    let current = 0;
    const addImg = [
      "m_main01.jpg",
      "m_main02.jpg",
      "m_main03.jpg",
      "m_main04.jpg",
    ];

    nextmob.addEventListener("click", function () {
      if (current < addImg.length - 1) {
        current++;
        console.log(current);
      } else {
        current = 0;
      }
      changeCurrent();
    });
    prevmob.addEventListener("click", function () {
      if (current > 0) {
        current--;
      } else {
        current = addImg.length - 1;
      }
      changeCurrent();
    });

    function changeCurrent() {
      mobileImg.style.background = `url(/image/${addImg[current]}) no-repeat bottom right`;
      mobileImg.style.backgroundSize = `cover`;
      mobileImg.style.transition = "0.5s";
    }
    changeCurrent();
  }
})();
