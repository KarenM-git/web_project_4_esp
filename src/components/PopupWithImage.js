import { Popup } from "./Popup.js";
import { popupImageShown, popupImageCaption } from "../utils/utils.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector, link, name) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._link = link;
    this._name = name;
  }

  open() {
    super.open();
    popupImageShown.src = this._link;
    popupImageShown.alt = this._name;
    popupImageCaption.textContent = this._name;
    super.setEventListeners();
  }
}
