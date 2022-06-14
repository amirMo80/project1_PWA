//Navbar
const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (scrollY > navbar.offsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

//Slider
const items = document.querySelectorAll(".banner-slider-item");
let i = 0;

const noActive = () => {
  items.forEach((item) => {
    item.classList.remove("active");
  });
};

setInterval(() => {
  i++;

  if (i >= items.length) {
    i = 0;
  }

  noActive();
  items[i].classList.add("active");
}, 3000);

//DropDown Menu
const openMenu = document.querySelector(".open-menu");
const dropDownMenu = document.querySelector(".drop-down-menu-container");

openMenu.addEventListener("click", () => {
  dropDownMenu.classList.add("activeMenu");
});

const closeMenu = document.querySelector(".close-menu");

closeMenu.addEventListener("click", () => {
  dropDownMenu.classList.remove("activeMenu");
});
