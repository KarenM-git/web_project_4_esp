export class Api {
  constructor({ address, token, username, avatar, ocupation }) {
    this._address = address;
    this._token = token;
    this._username = username;
    this._ocupation = ocupation;
    this._avatar = avatar;
  }

  async getUserData() {
    const res = await fetch(`${this._address}/users/me`, {
      headers: {
        authorization: this._token,
      },
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Error: ${res.status}`);
  }

  async getInitialCards() {
    const res = await fetch(`${this._address}/cards`, {
      headers: {
        authorization: this._token,
      },
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Error: ${res.status}`);
  }

  async saveProfileData() {
    const res = await fetch(`${this._address}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this._username.textContent,
        about: this._ocupation.textContent,
      }),
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Error: ${res.status}`);
  }

  async updateProfilePic() {
    const res = await fetch(`${this._address}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: this._avatar.value,
      }),
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Error: ${res.status}`);
  }

  async addCardToServer(data) {
    const res = await fetch(`${this._address}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Error: ${res.status}`);
  }

  async deleteCard(cardId) {
    const res = await fetch(`${this._address}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Error: ${res.status}`);
  }

  async addLike(cardId) {
    const res = await fetch(`${this._address}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Error: ${res.status}`);
  }

  async removeLike(cardId) {
    const res = await fetch(`${this._address}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Error: ${res.status}`);
  }
}

