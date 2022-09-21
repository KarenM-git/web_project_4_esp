export class UserInfo {
    constructor({ nameSelector, ocupationSelector }) {
        this._username = document.querySelector(nameSelector);
        this._ocupation = document.querySelector(ocupationSelector);
        this._nameInput = document.querySelector(".popup__input_type_name");
        this._jobInput = document.querySelector(".popup__input_type_about-me");

        
    }

    getUserInfo() {
        return {
            name: this._nameInput.value,
            ocupation: this._jobInput.value,
        }
    

    }

    setUserInfo() {
    
        this._username.textContent = this._nameInput.value;
        this._ocupation.textContent = this._jobInput.value;
    }
}