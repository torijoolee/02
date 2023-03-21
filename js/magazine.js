(() => {
  // magazine caresel

  // if (matchMedia("screen and (min-width:640px)").matches) {
  const slideBox = document.querySelector(".magazine .slide-box");
  const slideItem = document.querySelectorAll(".slide-box .slide-box-item");
  const prevBtn = document.querySelector(".mag-container .prev");
  const nextBtn = document.querySelector(".mag-container .next");
  const magBars = document.querySelectorAll(".magazine .bar-lg");

  let currentPage = 1;
  let totalPage = slideItem.length;
  const size = slideItem[0].clientWidth;
  console.log(size);

  //left array
  for (let i = 1; i < totalPage; i++) {
    slideItem[i].style.left = i * size + "px";
  }

  //main view
  slideBox.style.transform = `translateX( ${currentPage * -size}px) `;

  // jump to first, last slide
  function jump() {
    slideBox.addEventListener("transitionend", () => {
      if (slideItem[currentPage].id === "lastClone") {
        slideBox.style.transition = "none";
        currentPage = slideItem.length - 2;
        slideBox.style.transform = `translateX( ${currentPage * -size}px) `;
        currentPage = 1;
      }
      if (slideItem[currentPage].id === "firstClone") {
        slideBox.style.transition = "none";
        currentPage = totalPage - currentPage;
        slideBox.style.transform = `translateX( ${currentPage * -size}px) `;
      }
      if (slideItem[currentPage].id === null) {
        clearInterval(autoPlay);
        return;
      }
    });
  }
  // continue
  barActive();
  const autoPlay = setInterval(function () {
    if (currentPage < totalPage - 1 || currentPage > 0) {
      currentPage++;
      slideBox.style.transition = "0.5s ease-in-out";
      slideBox.style.transform = `translateX( ${currentPage * -size}px)`;
      jump();
      barActive();
    } else {
      clearInterval(autoPlay);
      return;
    }
  }, 5000);
  //bar activate
  function barActive() {
    magBars.forEach((bar) => {
      bar.classList.remove("active");
    });
    if (currentPage === 4) {
      magBars[0].classList.add("active");
      return;
    }
    if (magBars.classList == "null") {
      clearInterval(autoPlay);
      return;
    }
    magBars[currentPage - 1].classList.add("active");
  }

  nextBtn.addEventListener("click", function () {
    if (
      currentPage >= totalPage.length - 1 ||
      slideItem[currentPage].id === "null"
    ) {
      return;
    }
    slideBox.style.transition = "0.5s ease-in-out";
    currentPage++;
    slideBox.style.transform = `translateX( ${currentPage * -size}px) `;
    jump();
    barActive();
  });

  prevBtn.addEventListener("click", function () {
    if (currentPage < 0 || slideItem[currentPage].id === "null") {
      return;
    }
    slideBox.style.transition = "transform 0.5s ease-in-out";
    currentPage--;

    slideBox.style.transform = `translateX( ${currentPage * -size}px) `;
    jump();
    barActive();
  });
  // } else {
  //   const smallSlideItem = document.querySelectorAll(
  //     ".slide-box .slide-box-item"
  //   );

  //   const smallSize = smallSlideItem[0].clientWidth;
  //   for (let j = 0; j < smallSlideItem.length; j++) {
  //     smallSlideItem[j].style.left = j * smallSize + "px";
  //   }
  // }
})();
