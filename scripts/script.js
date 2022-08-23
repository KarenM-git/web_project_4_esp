import { Card, NewCard, InitialCard } from "./cards.js";
import { FormValidator } from "./formValidator.js"; 


export const editButton = document.querySelector(".edit-button");
export const popup = document.querySelector(".popup");
export const profileName = document.querySelector(".profile__name");
export const profileDescription = document.querySelector(".profile__description");
export const closeButton = document.querySelector(".close-button");
export const formElement = document.querySelector(".popup__form");

export const addButton = document.querySelector(".add-button");
export const popupAddPlace = document.querySelector(".popup_add_place");
export const closeButtonAddPlace = document.querySelector(".close-button_add_place");


export const ImgPopup = document.querySelector(".img-popup");
export const closeImageButton = document.querySelector(".img-popup__close");
export const popupImageShown = document.querySelector(".img-popup__image");
export const popupImageCaption = document.querySelector(".img-popup__caption");

export const SubmitPlace = document.querySelector(".popup__form_add_place");

const placeNameInput = document.querySelector(".popup__input_type_place");
const placeImageInput = document.querySelector(".popup__input_type_image");



const initialCards = [
    {
        name: "Valle de Yosemite",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lago Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Montañas Calvas",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Parque Nacional de la Vanoise",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];


const selectors = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".submit-button",
    inactiveButtonClass: "submit-button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
}



initialCards.forEach((item) => {
    const card = new InitialCard(item, "#cards-template");
    const cardElement = card.generateCard();

    document.querySelector(".cards").append(cardElement);

})

export const renderNewCard = () => {
    const card = new NewCard(placeNameInput, placeImageInput, "#cards-template");
    const cardElement = card.generateCard();
    placeImageInput.value = "";
    placeNameInput.value = "";

    document.querySelector(".cards").prepend(cardElement);



}


const validateInfoForm = () => {
    const form = new FormValidator(selectors, ".popup__form");
    form.enableValidation();
}



const validatePlaceForm = () => {
    const form = new FormValidator(selectors, ".popup__form_add_place");
    form.enableValidation();
}


validateInfoForm();
validatePlaceForm();