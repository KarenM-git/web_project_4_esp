const editButton = document.querySelector(".edit-button");
const popup = document.querySelector(".popup");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const closeButton = document.querySelector(".close-button");
const formElement = document.querySelector(".popup__form");


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
    const nameInput = document.querySelector(".popup__input_type_name");
    const jobInput = document.querySelector(".popup__input_type_about-me");

    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    
    closePopUp()
}


formElement.addEventListener("submit", handleProfileFormSubmit);



const initialCards = [
    {
        name: "Valle de Yosemite",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lago Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Montañas Calvas",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Parque Nacional de la Vanoise",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];
const cardsTemplate = document.querySelector("#cards-template").content;
const cards = document.querySelector(".cards");



initialCards.forEach(function (item) {
    const cardsElement = cardsTemplate.querySelector(".cards__element").cloneNode(true);
    const ImgPopup = document.querySelector(".img-popup");
    const closeImageButton = document.querySelector(".img-popup__close");
    const popupImageShown = document.querySelector(".img-popup__image");
    const popupImageCaption = document.querySelector(".img-popup__caption");


    cardsElement.querySelector(".cards__image").src = item.link;
    cardsElement.querySelector(".cards__caption").textContent = item.name;
    cardsElement.querySelector(".cards__image").alt = item.name;

    cards.append(cardsElement);

    cardsElement.querySelector(".like-button").addEventListener("click", function (evt) {
        evt.target.classList.toggle("like-button_active");
    });


    cardsElement.querySelector(".cards__delete-button").addEventListener("click", function (evt) {
        evt.target.parentElement.remove();
    })


    function showImgPopup() {
        ImgPopup.classList.add("popup_opened");
    }

    cardsElement.querySelector(".cards__image").addEventListener("click", function (evt) {
        showImgPopup();
        popupImageShown.src = evt.target.src;
        popupImageShown.alt = evt.target.alt;
        popupImageCaption.textContent = evt.target.alt;

    });

    

    function closeImage() {
        ImgPopup.classList.remove("popup_opened");
    }

    closeImageButton.addEventListener("click", closeImage);

});


const addButton = document.querySelector(".add-button");
const popupAddPlace = document.querySelector(".popup_add_place");
const closeButtonAddPlace = document.querySelector(".close-button_add_place");
const SubmitPlace = document.querySelector(".popup__form_add_place");


function showPopupAddPlace() {
    popupAddPlace.classList.add("popup_opened");
}

addButton.addEventListener("click", showPopupAddPlace);



function closePopupAddPlace() {
    popupAddPlace.classList.remove("popup_opened");
}

closeButtonAddPlace.addEventListener("click", closePopupAddPlace);



function addNewCard(evt) {
    evt.preventDefault();
    const newCardsElement = cardsTemplate.querySelector(".cards__element").cloneNode(true)
    const placeNameInput = document.querySelector(".popup__input_type_place");
    const placeImageInput = document.querySelector(".popup__input_type_image");
    const ImgPopup = document.querySelector(".img-popup");
    const closeImageButton = document.querySelector(".img-popup__close");
    const popupImageShown = document.querySelector(".img-popup__image");
    const popupImageCaption = document.querySelector(".img-popup__caption");

    newCardsElement.querySelector(".cards__image").src = placeImageInput.value;
    newCardsElement.querySelector(".cards__caption").textContent = placeNameInput.value;
    newCardsElement.querySelector(".cards__image").alt = placeNameInput.value;

    cards.prepend(newCardsElement);

    closePopupAddPlace()

    placeImageInput.value = ""
    placeNameInput.value = ""



    newCardsElement.querySelector(".like-button").addEventListener("click", function (evt) {
        evt.target.classList.toggle("like-button_active");
    });


    newCardsElement.querySelector(".cards__delete-button").addEventListener("click", function (evt) {
        evt.target.parentElement.remove();
    })


    function showImgPopup() {
        ImgPopup.classList.add("popup_opened");
    }

    newCardsElement.querySelector(".cards__image").addEventListener("click", function (evt) {
        showImgPopup();
        popupImageShown.src = evt.target.src;
        popupImageShown.alt = evt.target.alt;
        popupImageCaption.textContent = evt.target.alt;

    });

    function closeImage() {
        ImgPopup.classList.remove("popup_opened");
    }

    closeImageButton.addEventListener("click", closeImage);


}


SubmitPlace.addEventListener('submit', addNewCard);



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




