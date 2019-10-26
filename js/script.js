var modal = document.querySelector(".modal");//модальное окно с формой обратной связи
var modalForm = document.querySelector(".modal__form");//форма обратной связи
var modalLink = document.querySelector(".contacts__button");//ссылка на форму в разделе "Контакты"
var modalClose = document.querySelector(".modal__close-button");//кнопка закрытия модального окна
var overlay = document.querySelector(".overlay");//затемнение экрана
var modalButton = document.querySelector(".modal__button");//кнопка "Отправить"

//поля формы
var modalNameInput = document.querySelector("[name=input-name]");
var modalEmailInput = document.querySelector("[name=input-email]");
var modalTextInput = document.querySelector("[name=input-text]");

//кнопки слайдера
var slideOneButton = document.querySelector("[id=product-1]");
var slideTwoButton = document.querySelector("[id=product-2]");
var slideThreeButton = document.querySelector("[id=product-3]");
var body = document.querySelector("body");

//переключение фонов при нажатии одной из кнопок слайдера
slideOneButton.addEventListener("click", function (evt) {
  body.classList.remove("body_background-color_two");
  body.classList.remove("body_background-color_three");
  body.classList.add("body_background-color_one");
});

slideTwoButton.addEventListener("click", function (evt) {
  body.classList.remove("body_background-color_one");
  body.classList.remove("body_background-color_three");
  body.classList.add("body_background-color_two");
});

slideThreeButton.addEventListener("click", function (evt) {
  body.classList.remove("body_background-color_two");
  body.classList.remove("body_background-color_one");
  body.classList.add("body_background-color_three");
});

//при клике на кнопку "Форма обратной связи" показываем модальное окно
modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("overlay_show");
  modal.classList.add("modal_show");
  modalNameInput.focus();
});

//при нажатии на "Отправить", если форма не заполнена, трясем форму
modalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!modalNameInput.value || !modalEmailInput.value || !modalTextInput.value) {
    modal.classList.remove("modal_error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal_error");
  }
});

//при нажатии на кнопку закрытия формы ("крестик") закрываем модальное окно
modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal_show");
  modal.classList.remove("modal_error");
  overlay.classList.remove("overlay_show");
});

//при клике вне формы закрываем модальное окно
overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal_show");
  modal.classList.remove("modal_error");
  overlay.classList.remove("overlay_show");
});

//выход из формы при нажатии клавиши escape
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal_show")) {
      evt.preventDefault();
      modal.classList.remove("modal_show");
      modal.classList.remove("modal_error");
      overlay.classList.remove("overlay_show");
    }
  }
});