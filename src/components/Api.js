export class Api {
  constructor(options) {
    this._username = document.querySelector(".profile__name");
    this._ocupation = document.querySelector(".profile__description");
    this._avatar = document.querySelector(".popup__input_type_profile-pic");
  }

  getUserData() {
    return fetch("https://around.nomoreparties.co/v1/cohort-1-es/users/me", {
      headers: {
        authorization: "2be75b7b-0f52-418b-b96c-41c3ad1377b3",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // si el servidor devuelve un error, rechaza el promise
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getInitialCards() {
    return fetch("https://around.nomoreparties.co/v1/cohort-1-es/cards", {
      headers: {
        authorization: "2be75b7b-0f52-418b-b96c-41c3ad1377b3",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  saveProfileData() {
    return fetch("https://around.nomoreparties.co/v1/cohort-1-es/users/me", {
      method: "PATCH",
      headers: {
        authorization: "2be75b7b-0f52-418b-b96c-41c3ad1377b3",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this._username.textContent,
        about: this._ocupation.textContent,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  updateProfilePic() {
    return fetch(
      "https://around.nomoreparties.co/v1/cohort-1-es/users/me/avatar",
      {
        method: "PATCH",
        headers: {
          authorization: "2be75b7b-0f52-418b-b96c-41c3ad1377b3",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar: this._avatar.value,
        }),
      }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  addCardToServer(data) {
    return fetch("https://around.nomoreparties.co/v1/cohort-1-es/cards", {
      method: "POST",
      headers: {
        authorization: "2be75b7b-0f52-418b-b96c-41c3ad1377b3",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  deleteCard(cardId) {
    return fetch("https://around.nomoreparties.co/v1/cohort-1-es/cards/" + cardId, {
      method: "DELETE",
      headers: {
        authorization: "2be75b7b-0f52-418b-b96c-41c3ad1377b3",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  addLike(cardId) {
    return fetch(
      "https://around.nomoreparties.co/v1/cohort-1-es/cards/likes/" + cardId,
      {
        method: "PUT",
        headers: {
          authorization: "2be75b7b-0f52-418b-b96c-41c3ad1377b3",
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  removeLike(cardId) {
    return fetch(
      "https://around.nomoreparties.co/v1/cohort-1-es/cards/likes/" + cardId,
      {
        method: "DELETE",
        headers: {
          authorization: "2be75b7b-0f52-418b-b96c-41c3ad1377b3",
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}
