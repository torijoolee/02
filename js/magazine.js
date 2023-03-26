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

  //left array
  for (let i = 1; i < totalPage; i++) {
    slideItem[i].style.left = i * size + "px";
  }

  //main view
  slideBox.style.transform = `translateX( ${currentPage * -size}px) `;

  // continue
  let autoPlay = setInterval(function () {
    if (currentPage < totalPage - 1 || currentPage > 0) {
      currentPage++;
      slideBox.style.transition = "0.5s ease-in-out";
      slideBox.style.transform = `translateX( ${currentPage * -size}px)`;
      jump();
    }
  }, 5000);

  // jump to first, last slide
  function jump() {
    slideBox.addEventListener("transitionend", () => {
      if (slideItem[currentPage].id === undefined) {
        clearInterval(autoPlay);
        currentPage = 1;
      }
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
    });
  }
  nextBtn.addEventListener("click", function () {
    if (
      currentPage >= totalPage.length - 1 ||
      slideItem[currentPage].id === undefined
    ) {
      return;
    }
    slideBox.style.transition = "0.5s ease-in-out";
    currentPage++;
    slideBox.style.transform = `translateX( ${currentPage * -size}px) `;
    jump();
  });
  prevBtn.addEventListener("click", function () {
    if (currentPage < 0 || slideItem[currentPage].id === "null") {
      return;
    }
    slideBox.style.transition = "transform 0.5s ease-in-out";
    currentPage--;
    slideBox.style.transform = `translateX( ${currentPage * -size}px) `;
    jump();
  });
})();
