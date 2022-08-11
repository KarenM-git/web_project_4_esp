import { renderNewCard } from "./cards.js";

import { popup, editButton, profileName, profileDescription, closeButton, formElement, addButton, popupAddPlace, closeButtonAddPlace, SubmitPlace } from "./script.js";

 function showPopUp() {
    popup.classList.add("popup_opened");
}

editButton.addEventListener("click", showPopUp);



function closePopUp() {
    popup.classList.remove("popup_opened");
}

closeButton.addEventListener("click", closePopUp);



SubmitPlace.addEventListener('submit', (evt) => {
    evt.preventDefault();
    renderNewCard();
    closePopupAddPlace();
})



function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const nameInput = document.querySelector(".popup__input_type_name");
    const jobInput = document.querySelector(".popup__input_type_about-me");

    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    closePopUp()
}


formElement.addEventListener("submit", handleProfileFormSubmit);


function showPopupAddPlace() {
    popupAddPlace.classList.add("popup_opened");
}

addButton.addEventListener("click", showPopupAddPlace);



function closePopupAddPlace() {
    popupAddPlace.classList.remove("popup_opened");
}

closeButtonAddPlace.addEventListener("click", closePopupAddPlace);




document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
        document.querySelector(".img-popup").classList.remove("popup_opened");
    }

})


document.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup")) {
        document.querySelector(".img-popup").classList.remove("popup_opened");
    }
})


document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
        closePopUp();
        closePopupAddPlace();
    }

})


document.onclick = function (evt) {
    if (evt.target.classList.contains("popup")) {
        closePopUp();
        closePopupAddPlace();
    }
}