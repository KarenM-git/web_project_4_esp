
import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor({ popupSelector, callback }) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        this._sendForm = callback;
        this._form = this._popup.querySelector(".popup__form");

        
    }

    _getInputValues() {
        
        this._inputList = this._element.querySelectorAll(".form__input");

        
        this._formValues = {};

        
        this._inputList.forEach(input => {
            this._formValues[input.type] = input.value;
        });

        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", this._sendForm);
    }

    close() {
        super.close();
        this._form.reset();
    }
}