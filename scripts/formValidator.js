const selectors = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".submit-button",
    inactiveButtonClass: ".submit-button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
}





class FormValidator {
    constructor(data) {
        this._form = data.formSelector
        this._input = data.inputSelector;
        this._submitButton = data.submitButtonSelector;
        this._inactiveButton = data.inactiveButtonClass;
        this._inputError = data.inputErrorClass;
        this._errorVisisble = data.errorClass;
    }

    _getFormElement() {
        this._element = document.querySelector(this._form);

        return this._element

    }


    _showInputError(inputElement, errorMessage) {
        const errorElement = this._element.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add("this._inputError");

        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorVisisble);
    };


    _hideInputError (inputElement) {
        const errorElement = this._element.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputError);

        errorElement.classList.remove(this._errorVisisble);
        errorElement.textContent = "";
    };


    _isValid (inputElement){
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement.validationMessage);

        } else {
            this._hideInputError(inputElement);
        }
    }; 


    _hasInvalidInput (inputList){

        return inputList.some((inputElement) => {


            return !inputElement.validity.valid;
        })
    };


    _toggleButtonState(inputList, buttonElement) {

    if (this._hasInvalidInput(inputList)) {

        buttonElement.classList.add(this._inactiveButton);
        buttonElement.disabled = true;
    } else {

        buttonElement.classList.remove(this._inactiveButton);
        buttonElement.disabled = false;
    }
}


    _setEventListeners() {
        const inputList = Array.from(this._element.querySelectorAll(this._input));
        const buttonElement = this._element.querySelector(this._submitButton);

        console.log(inputList);

        this._toggleButtonState(inputList, buttonElement);


        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._isValid(inputElement)
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    }; 


    enableValidation() {
        this._element = this._getFormElement();
        const formList = Array.from(document.querySelectorAll(this._form));

       formList.forEach(( formElement) => {
            formElement.addEventListener("submit", (evt) => {
                evt.preventDefault();
                this._toggleButtonState(inputList, buttonElement)
            });

            this._setEventListeners();
        });
    }

}


const validateForms = () => {
    const forms = new FormValidator(selectors);
    forms.enableValidation();
}

validateForms();