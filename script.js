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
