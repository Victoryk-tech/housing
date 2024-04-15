let sideMenu = document.querySelector("aside");
let menuBtn = document.querySelector("#menu-btn");
let closeBtn = document.querySelector("#close-btn");
let themeToggle = document.querySelector(".theme-toggle");
let carousel = document.querySelector(".carousel");
let arrowBtns = document.querySelector(".flip span");

// ===========side menu==========
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//=======theeme toggle=====
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggle.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggle.querySelector("span:nth-child(2)").classList.toggle("active");
});
