
import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, cardId, { sendForm }) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
      this._sendForm = sendForm;
      this._cardId = cardId;

  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._sendForm(this._cardId);
    });
  }
}