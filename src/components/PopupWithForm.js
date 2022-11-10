import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, callback }) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._sendForm = callback;
    this._form = this._popup.querySelector(".popup__form");
    this._sendBttn = this._form.querySelector(".submit-button");
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll(".popup__input");

    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._sendBttn.textContent = "Guardando...";
    } else {
      return;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.renderLoading(true);
      this._sendForm(this._getInputValues());
      this._form.reset();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
