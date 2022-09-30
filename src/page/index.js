import "./index.css";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import {
  editButton,
  addButton,
  initialCards,
  selectors,
} from "../utils/utils.js";

const renderCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#cards-template", {
        handleCardClick: (link, name) => {
          const imagePopup = new PopupWithImage(".img-popup", link, name);
          imagePopup.open();
        },
      });
      const cardElement = card.generateCard();
      renderCards.addItem(cardElement);
    },
  },
  ".cards"
);

renderCards.renderer();

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

const setInfo = new UserInfo({
  nameSelector: ".profile__name",
  ocupationSelector: ".profile__description",
});

export const showPopUp = () => {
  const popup = new PopupWithForm({
    popupSelector: ".popup",
    callback: () => {
      setInfo.setUserInfo();
      popup.close();
    },
  });
  popup.open();
};

export const showPopupAddPlace = () => {
  const popup = new PopupWithForm({
    popupSelector: ".popup_add_place",
    callback: (item) => {
      const card = new Card(item, "#cards-template", {
        handleCardClick: (link, name) => {
          const imagePopup = new PopupWithImage(".img-popup", link, name);
          imagePopup.open();
        },
      });
      const cardElement = card.generateCard();
      renderCards.addItem(cardElement);
      popup.close();
    },
  });
  popup.open();
};

editButton.addEventListener("click", showPopUp);

addButton.addEventListener("click", showPopupAddPlace);
