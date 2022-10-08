export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEsc = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEsc);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEsc);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      return this.close();
    }
  }

  setEventListeners() {
    this._popup.querySelector(".close-button").addEventListener("click", () => {
      this.close();
    });

    document.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
