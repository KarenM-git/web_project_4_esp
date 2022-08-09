

const ImgPopup = document.querySelector(".img-popup");
const closeImageButton = document.querySelector(".img-popup__close");
const popupImageShown = document.querySelector(".img-popup__image");
const popupImageCaption = document.querySelector(".img-popup__caption");
const placeNameInput = document.querySelector(".popup__input_type_place");
const placeImageInput = document.querySelector(".popup__input_type_image");
const SubmitPlace = document.querySelector(".popup__form_add_place");


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


class Card{
    constructor(cardSelector) {
        this._cardSelector = cardSelector
        
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector(".cards__element")
            .cloneNode(true);

        return cardElement
    
    }

    generateCard() {
        
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector(".cards__image").src = this._link;
        this._element.querySelector(".cards__caption").textContent = this._name;
        this._element.querySelector(".cards__image").alt = this._name;

        return this._element
    }

    

    _handleOpenPopup() {
        popupImageShown.src = this._link;
        popupImageShown.alt = this._name;
        popupImageCaption.textContent = this._name;
        ImgPopup.classList.add("popup_opened");
       
    }

    _handleClosePopup() {
        ImgPopup.classList.remove("popup_opened");
    }

    _setEventListeners() {
        this._element.querySelector(".like-button").addEventListener("click", (evt) => {
            evt.target.classList.toggle("like-button_active");
        });


        this._element.querySelector(".cards__delete-button").addEventListener("click", (evt) => {
            evt.target.parentElement.remove();
        })

        this._element.querySelector(".cards__image").addEventListener("click", ()=> {
            this._handleOpenPopup();

        });

        closeImageButton.addEventListener("click", this._handleClosePopup);

    }

    
}


class initialCard extends Card {
    constructor(data, cardSelector) {
        super (cardSelector)
        this._link = data.link;
        this._name = data.name;
    }

    
}


class newCard extends Card {
    constructor(nameInput, linkInput, cardSelector) {
        super(cardSelector)
        this._name = nameInput.value;
        this._link = linkInput.value;
        
        
    }


}


initialCards.forEach((item) => {
    const card = new initialCard(item, "#cards-template");
    const cardElement = card.generateCard();

    document.querySelector(".cards").append(cardElement);

})


const renderNewCard = () => {
    const card = new newCard(placeNameInput, placeImageInput, "#cards-template");
    const cardElement = card.generateCard();

    document.querySelector(".cards").prepend(cardElement);
   
}


SubmitPlace.addEventListener('submit', (evt) => {
    evt.preventDefault();
    renderNewCard();
    closePopupAddPlace();
    placeImageInput.value = "";
    placeNameInput.value = "";
})

