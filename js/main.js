var header = document.querySelector(".page-header");
var mainNav = header.querySelector(".main-nav");
var btnOpnMenu = mainNav.querySelector(".main-nav__toggle");

mainNav.classList.remove("main-nav--nojs");

btnOpnMenu.addEventListener("click", function(event) {
	event.preventDefault();
  mainNav.classList.toggle("main-nav--close");
});
