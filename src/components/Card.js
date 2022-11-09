export class Card {
  constructor(
    data,
    cardSelector,
    userId,
    { handleCardClick, handleDeleteBttn, handleCardLike }
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._isLiked = false;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._cardId = data._id;

    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteBttn = handleDeleteBttn;
    this._handleCardLike = handleCardLike;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".cards__element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".cards__image").src = this._link;
    this._element.querySelector(".cards__caption").textContent = this._name;
    this._element.querySelector(".cards__image").alt = this._name;
    this._element.querySelector(".like-count").textContent = this._likes.length;
    this.disableDeleteBttn();

    return this._element;
  }

  disableDeleteBttn() {
    if (this._ownerId === this._userId) {
      return;
    } else {
      const deleteBttn = this._element.querySelector(".cards__delete-button");
      deleteBttn.remove();
    }
  }

  changeLikesNumber(data) {
    return this._element.querySelector(".like-count").textContent = data.likes.length;
  }

  _changeLikeState(evt) {
    this._isLiked = !this._isLiked;
    console.log(this._isLiked);
    if (this._isLiked) {
      evt.target.classList.add("like-button_active");
    }
    else {
      evt.target.classList.remove("like-button_active");
    }
  }

  _setEventListeners() {
    this._element
      .querySelector(".like-button")
      .addEventListener("click", (evt) => {
        this._changeLikeState(evt);
       // evt.target.classList.toggle("like-button_active");
        this._handleCardLike(this._isLiked, this._cardId);
      });

    this._element
      .querySelector(".cards__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteBttn(this._cardId);
      });

    this._element
      .querySelector(".cards__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._link, this._name);
      });
  }
}
