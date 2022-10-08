export const popupImageShown = document.querySelector(".img-popup__image");
export const popupImageCaption = document.querySelector(".img-popup__caption");

export const editButton = document.querySelector(".edit-button");
export const addButton = document.querySelector(".add-button");
export const placeNameInput = document.querySelector(
  ".popup__input_type_place"
);
export const placeImageInput = document.querySelector(
  ".popup__input_type_image"
);

export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

export const selectors = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".submit-button",
  inactiveButtonClass: "submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
