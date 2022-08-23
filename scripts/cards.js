
import {ImgPopup, closeImageButton, popupImageShown, popupImageCaption } from "./script.js"


export class Card{
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


export class InitialCard extends Card {
    constructor(data, cardSelector) {
        super (cardSelector)
        this._link = data.link;
        this._name = data.name;
    }

    
}


export class NewCard extends Card {
    constructor(nameInput, linkInput, cardSelector) {
        super(cardSelector)
        this._name = nameInput.value;
        this._link = linkInput.value;
        
        
    }


}










