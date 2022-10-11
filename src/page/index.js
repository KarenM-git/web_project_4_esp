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

function createCards(item) {
  const card = new Card(item, "#cards-template", {
    handleCardClick: (link, name) => {
      const imagePopup = new PopupWithImage(".img-popup", link, name);
      imagePopup.open();
    },
  });
  const cardElement = card.generateCard();
  renderCards.addItem(cardElement);
}

const renderCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      createCards(item);
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

const popupUserInfo = new PopupWithForm({
  popupSelector: ".popup",
  callback: () => {
    setInfo.setUserInfo();
    popupUserInfo.close();
  },
});
popupUserInfo.setEventListeners();
const showPopUp = () => {
  popupUserInfo.open();
};

const popup = new PopupWithForm({
  popupSelector: ".popup_add_place",
  callback: (item) => {
    createCards(item);
    popup.close();
  },
});

popup.setEventListeners();
const showPopupAddPlace = () => {
  popup.open();
};

editButton.addEventListener("click", showPopUp);

addButton.addEventListener("click", showPopupAddPlace);
