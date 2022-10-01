export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add("popup_opened");
  }

  close() {
    this._popup.classList.remove("popup_opened");
  }

  _handleEscClose(evt) {
    if (this._popup.classList.contains("popup_opened")) {
      if (evt.key === "Escape") {
        this.close();
      }
    } else {
      return;
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

    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }
}
