let editButton = document.querySelector(".edit-button");
let popup = document.querySelector(".popup");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let closeButton = document.querySelector(".close-button");
let formElement = document.querySelector(".submit-button");


function showpopup() {
    popup.classList.add("popup_opened");
}

editButton.addEventListener("click", showpopup);



function closepopup() {
    popup.classList.remove("popup_opened");
}

closeButton.addEventListener("click", closepopup);



function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector(".input__text_type_name");
    let jobInput = document.querySelector(".input__text_type_about-me");

    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    
    closepopup()
}


formElement.addEventListener('click', handleProfileFormSubmit);