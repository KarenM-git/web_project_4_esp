export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        
    }


    open() {
        this._popup.classList.add("popup_opened");
        this.setEventListeners();
        this._handleEscClose();
    }


    close() {
        this._popup.classList.remove("popup_opened");
    }


    _handleEscClose() {
        document.addEventListener("keydown",  (evt) => {
            if (evt.key === "Escape") {
                this.close();
            }

        })
    }


    setEventListeners() {
        this._popup.querySelector(".close-button").addEventListener("click", () => {
            this.close();
        });

        document.onclick = (evt) => {
            if (evt.target.classList.contains("popup")) {
                this.close();
            }
        }
    }


}