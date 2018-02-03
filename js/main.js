var header = document.querySelector(".page-header");
var mainNav = header.querySelector(".main-nav");
var btnOpnMenu = mainNav.querySelector(".main-nav__toggle");
var btnSendMail = document.querySelector("#send-feedback");
var popupSent = document.querySelector(".popup-sent");
var popupError = document.querySelector(".popup-error");
var ClosePopupSent = popupSent.querySelector("#popup-close");
var ClosePopupError = popupError.querySelector("#popup-close");

mainNav.classList.remove("main-nav--nojs");

btnOpnMenu.addEventListener("click", function(event) {
  event.preventDefault();
  mainNav.classList.toggle("main-nav--close");
});

btnSendMail.addEventListener("click", function(event) {
  event.preventDefault();
  popupSent.classList.add("popup--open");
});

ClosePopupSent.addEventListener("click", function(event) {
  event.preventDefault();
  popupSent.classList.remove("popup--open");
});

ClosePopupError.addEventListener("click", function(event) {
  event.preventDefault();
  popupError.classList.remove("popup--open");
});
