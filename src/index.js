import "./styles/index.css";

import { Card, NewCard, InitialCard } from "./scripts/Cards";
import { FormValidator } from "./scripts/FormValidator.js";
import { Section } from "./scripts/Section.js"; 
import { Popup } from "./scripts/Popup.js";
import { PopupWithForm } from "./scripts/PopupWithForm.js";
import { PopupWithImage } from "./scripts/PopupWithImage.js";
import { UserInfo } from "./scripts/UserInfo.js";
import { editButton, addButton, placeImageInput, placeNameInput, initialCards, selectors } from "./scripts/utils.js";




const renderInitialCards = new Section({
    items: initialCards, renderer: (item) => {
        const card = new InitialCard(item, "#cards-template", {
            handleCardClick: (link, name) => {
                const Imagepopup = new PopupWithImage(".img-popup", link, name);
                Imagepopup.open();
        } });
        const cardElement = card.generateCard();
        renderInitialCards.addItem(cardElement);
    }
},
    ".cards"
);

renderInitialCards.renderer();




const validateInfoForm = () => {
    const form = new FormValidator(selectors, ".popup__form");
    form.enableValidation();
};



const validatePlaceForm = () => {
    const form = new FormValidator(selectors, ".popup__form_add_place");
    form.enableValidation();
};


validateInfoForm();
validatePlaceForm();


export const showPopUp = () => {
    const popup = new PopupWithForm({
        popupSelector: ".popup", callback: (evt) => {
            evt.preventDefault();
            const setInfo = new UserInfo({ nameSelector: ".profile__name", ocupationSelector: ".profile__description" });
            setInfo.setUserInfo();
            popup.close();
           

        
        }
    });
    popup.open();
};



const addPlaceRenderer = new Section({ items: [] }, ".cards");

export const showPopupAddPlace = () => {
    const popup = new PopupWithForm({
        popupSelector: ".popup_add_place", callback: (evt) => {
            evt.preventDefault();
            const card = new NewCard(placeNameInput, placeImageInput, "#cards-template",{
                handleCardClick: (link, name) => {
                    const Imagepopup = new PopupWithImage(".img-popup", link, name);
                    Imagepopup.open();
            }});
            const cardElement = card.generateCard();
            placeImageInput.value = "";
            placeNameInput.value = "";
            addPlaceRenderer.addItem(cardElement);
            popup.close();
        }
    });
    popup.open();
};



editButton.addEventListener("click", showPopUp);


addButton.addEventListener("click", showPopupAddPlace);