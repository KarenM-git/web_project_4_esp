


const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("popup__input_type_error");

    errorElement.textContent = errorMessage; 
    errorElement.classList.add("popup__error_visible");
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("popup__input_type_error");

    errorElement.classList.remove("popup__error_visible");
    errorElement.textContent = "";
};


const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    
    } else {
        hideInputError(formElement, inputElement);
    }
}; 


const hasInvalidInput = (inputList) => {

    return inputList.some((inputElement) => {
    

        return !inputElement.validity.valid;
    })
};



function toggleButtonState(inputList, buttonElement) {

    if (hasInvalidInput(inputList)) {
        
        buttonElement.classList.add("submit-button_disabled");
        buttonElement.disabled = true;
    } else {
        
        buttonElement.classList.remove("submit-button_disabled");
        buttonElement.disabled = false;
    }
}




const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
    const buttonElement = formElement.querySelector(".submit-button");

    toggleButtonState(inputList, buttonElement);


    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            isValid(formElement, inputElement)
            toggleButtonState(inputList, buttonElement);
        });
    });
}; 


const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(".popup__form"));

    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            toggleButtonState(inputList, buttonElement)
        });

        setEventListeners(formElement);
    });
};



enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
}); 




document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
        closePopUp();
        closePopupAddPlace();
    }

})


document.onclick = function (evt) {
    if (evt.target.classList.contains("popup")){
        closePopUp();
        closePopupAddPlace();
    }
}