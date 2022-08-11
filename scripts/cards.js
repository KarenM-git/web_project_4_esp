
import {ImgPopup, closeImageButton, popupImageShown, popupImageCaption, placeNameInput, placeImageInput, initialCards} from "./script.js"


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


export const renderNewCard = () => {
    const card = new newCard(placeNameInput, placeImageInput, "#cards-template");
    const cardElement = card.generateCard();
    placeImageInput.value = "";
    placeNameInput.value = "";

    document.querySelector(".cards").prepend(cardElement);

    
   
}




