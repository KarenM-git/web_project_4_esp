import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector, link, name) {
    super(popupSelector);
    this._link = link;
    this._name = name;
    this._popupImageShown = document.querySelector(".img-popup__image");
    this._popupImageCaption = document.querySelector(".img-popup__caption");
  }

  open() {
    super.open();
    this._popupImageShown.src = this._link;
    this._popupImageShown.alt = this._name;
    this._popupImageCaption.textContent = this._name;
    super.setEventListeners();
  }
}
