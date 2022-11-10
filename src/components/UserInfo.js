export class UserInfo {
  constructor({ nameSelector, ocupationSelector, avatarSelector }) {
    this._username = document.querySelector(nameSelector);
    this._ocupation = document.querySelector(ocupationSelector);
    this._avatar = document.querySelector(avatarSelector);
    this._nameInput = document.querySelector(".popup__input_type_name");
    this._jobInput = document.querySelector(".popup__input_type_about-me");
    this._avatarInput = document.querySelector(".popup__input_type_profile-pic");
  }

  getUserInfo() {
    return {
      name: this._nameInput.value,
      about: this._jobInput.value,
    };
  }

  setUserInfo(userInfo) {
    this._username.textContent = userInfo.name;
    this._ocupation.textContent = userInfo.about;
   // this._avatar.src = userInfo.avatar;
    
  }

  setAvatar(data) {
    this._avatar.src = data.avatar;
  }

}
