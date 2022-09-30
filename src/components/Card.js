import {
  ImgPopup,
  closeImageButton,
  popupImageShown,
  popupImageCaption,
} from "../utils/utils.js";

export class Card {
  constructor(data, cardSelector, { handleCardClick }) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".cards__element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".cards__image").src = this._link;
    this._element.querySelector(".cards__caption").textContent = this._name;
    this._element.querySelector(".cards__image").alt = this._name;

    return this._element;
  }

  _handleOpenPopup() {
    popupImageShown.src = this._link;
    popupImageShown.alt = this._name;
    popupImageCaption.textContent = this._name;
    ImgPopup.classList.add("popup_opened");
  }

  _handleClosePopup() {
    ImgPopup.classList.remove("popup_opened");
  }

  _setEventListeners() {
    this._element
      .querySelector(".like-button")
      .addEventListener("click", (evt) => {
        evt.target.classList.toggle("like-button_active");
      });

    this._element
      .querySelector(".cards__delete-button")
      .addEventListener("click", (evt) => {
        evt.target.parentElement.remove();
      });

    this._element
      .querySelector(".cards__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._link, this._name);
      });

    closeImageButton.addEventListener("click", this._handleClosePopup);
  }
}

