// Mobile Menu Toggle Active
const mobileMenu = document.querySelector(".mobile-icon");

mobileMenu.addEventListener("click", function () {
  this.classList.toggle("active");

  if (this.classList.contains("active")) {
    this.classList.remove("not-active");
  } else {
    this.classList.add("not-active");
  }
});
