const editButton = document.querySelector(".edit-button");
const popup = document.querySelector(".popup");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const closeButton = document.querySelector(".close-button");
const formElement = document.querySelector(".submit-button");


function showPopUp() {
    popup.classList.add("popup_opened");
}

editButton.addEventListener("click", showPopUp);



function closePopUp() {
    popup.classList.remove("popup_opened");
}

closeButton.addEventListener("click", closePopUp);



function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector(".input__text_type_name");
    let jobInput = document.querySelector(".input__text_type_about-me");

    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    
    closePopUp()
}


formElement.addEventListener('click', handleProfileFormSubmit);