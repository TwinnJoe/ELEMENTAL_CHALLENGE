// DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // jQuery for menu icon click
  $(".menu-icon").on("click", function () {
    alert("Menu clicked");
  });

  // Vanilla JS for hover effect on .feature-box
  const featureBoxes = document.querySelectorAll(".feature-box");
  featureBoxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      box.style.backgroundColor = "#061c2c";
    });
    box.addEventListener("mouseleave", () => {
      box.style.backgroundColor = "#061c2c";
    });
  });

  // Slider logic
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot, i) => {
      dot.classList.remove("active");
      const img = dot.querySelector("img");
      img.src = "images/slider-dots.svg";
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    dots[index].querySelector("img").src = "images/slider-dots.svg";
    currentSlide = index;
  }

  // Dot click events
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  // jQuery click event for arrow using jQuery selector
  $(".arrow").on("click", function () {
    const nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
  });

  // jQuery click for dots
  $(".dot").on("click", function () {
    const index = $(this).index();
    showSlide(index);
  });
});
