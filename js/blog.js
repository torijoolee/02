(() => {
  if (matchMedia("screen and (min-width: 640px)").matches) {
    console.log("desktop");
    const desktopWidth = document.querySelector(".blog").offsetWidth;
    const blogBar = document.querySelectorAll(".blog .bar-lg");
    const container = document.querySelector(".blog-contents");
    const blogItem = document.querySelector(".blog-item");
    const itemWidth = blogItem.offsetWidth;

    let current = 0;

    // viewport
    const blogViewport = document.querySelector(".viewport");
    blogViewport.style.background = "transparent";
    blogViewport.style.width = `${itemWidth * 4}px`;
    blogViewport.style.height = "500px";
    blogViewport.style.transform = `translateX(${
      (desktopWidth - itemWidth * 4) / 2
    }px)`;

    // moving
    for (let i = 0; i < blogBar.length; i++) {
      blogBar[i].dataset.link = i;

      blogBar.forEach((bar) => {
        bar.addEventListener("click", (e) => {
          blogBar[i].classList.remove("active");
          // console.log(e.target.dataset.link);
          current = parseInt(e.target.dataset.link);

          if (current == 0) {
            container.style.transform = `translateX(0)`;
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
        blogBar[current].classList.add("active");
      });
    }
  } else {
    console.log("mobile");
    const blogSmallView = document.querySelector(".viewport");
    const smallBlogWidth = document.querySelector(".blog").offsetWidth;
    const blogContainer = document.querySelector(".blog-contents");
    const blogItem = document.querySelector(".blog-item").offsetWidth;

    let smallCurrent = 0;

    blogSmallView.style.height = "500px";
    blogSmallView.style.transform = `translateX(32px)`;
    blogSmallView.style.width = `${640 - 64}px`;

    const smallBlogBar = document.querySelectorAll(".blog .bar-lg");

    for (let j = 0; j < smallBlogBar.length; j++) {
      smallBlogBar[j].dataset.link = j;

      smallBlogBar.forEach((eleme) => {
        eleme.addEventListener("click", function (e) {
          smallBlogBar[j].classList.remove("active");
          smallCurrent = parseInt(e.target.dataset.link);
          console.log(smallCurrent);
          if (smallCurrent == 0) {
            blogContainer.style.transform = `translateX(${0}px)`;
          }
          if (smallCurrent == 1) {
            blogContainer.style.transform = `translateX(${
              -smallCurrent * (blogItem * 2)
            }px)`;
            blogContainer.style.transition = "0.5s";
          }
          if (smallCurrent == 2) {
            blogContainer.style.transform = `translateX(${
              -smallCurrent * (blogItem * 2)
            }px)`;
            blogContainer.style.transition = "0.5s";
          }
        });
      });
      smallBlogBar[smallCurrent].classList.add("active");
    }
  }
})();
