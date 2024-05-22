// Mobile Menu Toggle Active
const mobileMenu = document.querySelector(".mobile-icon");

// clone mobile menu
const menu = document.querySelector(".navi");
const info = document.querySelector(".info");
const newMenuBox = document.querySelector(".new-mobile-menu");
const newMenu = menu.cloneNode(true);
const newInfo = info.cloneNode(true);

newMenuBox.insertAdjacentElement("beforeend", newMenu);
newMenuBox.insertAdjacentElement("beforeend", newInfo);

mobileMenu.addEventListener("click", function () {
  this.classList.toggle("active");

  const menuHeight = document.querySelector(".new-mobile-menu").scrollHeight;

  if (this.classList.contains("active")) {
    this.classList.remove("not-active");
    // show menu
    newMenuBox.style.height = `${menuHeight}px`;
  } else {
    this.classList.add("not-active");
    // hide menu
    newMenuBox.style.height = 0;
  }
});

// fixed header style change when scrolling down
const header = document.querySelector(".header");

function stickyHeader() {
  const scry = window.scrollY;
  if (scry > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", stickyHeader);
