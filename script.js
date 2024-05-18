// copy menu for mobile
function copyMenu() {
  // COPY -inside .dpt-cat to .department
  var dptCat = document.querySelector(".dpt-cat");
  var department = document.querySelector(".departments");
  department.innerHTML = dptCat.innerHTML;

  // COPY -inside .nav to .nav
  var mainNav = document.querySelector(".header-nav nav");
  var mobileMainNav = document.querySelector(".off-canvas nav");
  mobileMainNav.innerHTML = mainNav.innerHTML;

  // COPY -inside .header-top .wrapper to .thetop-nav
  var topNav = document.querySelector(".header-top .wrapper");
  var mobileTopNav = document.querySelector(".off-canvas .thetop-nav");
  mobileTopNav.innerHTML = topNav.innerHTML;
}
copyMenu();

// Show sub-menu on mobile
const mobileMenu = document.querySelectorAll(".has-child .icon-small");
mobileMenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();
  mobileMenu.forEach((menu) =>
    menu != this ? menu.closest(".has-child").classList.remove("expand") : null
  );

  if (this.closest(".has-child").classList != "expand")
    this.closest(".has-child").classList.toggle("expand");
}

// Show the side menu
const startMeneBtn = document.querySelector(".trigger"),
  closeMenuBtn = document.querySelector(".t-close"),
  addMenuSection = document.querySelector(".site");
startMeneBtn.addEventListener("click", () => {
  addMenuSection.classList.toggle("show-menu");
});
closeMenuBtn.addEventListener("click", () => {
  addMenuSection.classList.remove("show-menu");
});

// Slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

// Toggle Mobile bottom search bar
const searchButton = document.querySelector(".toggle-search"),
  searchClose = document.querySelector(".search-close"),
  bodyContainer = document.querySelector(".site");
searchButton.addEventListener("click", function () {
  bodyContainer.classList.toggle("show-search");
});
searchClose.addEventListener("click", function () {
  bodyContainer.classList.remove("show-search");
});

// Toggle Department on single pages
const deptBtn = document.querySelector(".dpt-cat .dpt-trigger"),
  deptClass = document.querySelector(".site");

deptBtn.addEventListener("click", function () {
  deptClass.classList.toggle("show-department");
});

// Slider product thumbnail images
var productThumbs = new Swiper(".small-image", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSliderProgress: true,
  breakPoints: {
    481: {
      spaceBetween: 32,
    },
  },
});
var productImage = new Swiper(".big-image", {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productThumbs,
  },
});
//  Stock products bar width percentage
var stocks = document.querySelectorAll(".stock");
for (x = 0; x < stocks.length; x++) {
  let stock = stocks[x].dataset.stock,
    available = stocks[x].querySelector(".qty-available").innerHTML,
    sold = stocks[x].querySelector(".qty-sold").innerHTML,
    percent = (sold * 100) / stock;

  stocks[x].querySelector(".available").style.width = `${percent}%`;
}
