import "./index.css";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import {
  editButton,
  addButton,
  selectors,
  avatarOverlay,
} from "../utils/utils.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

function createCards(item) {
  const card = new Card(item, "#cards-template", "7ff4cbebe1137a7c57e5d511", {
    handleCardClick: (link, name) => {
      const imagePopup = new PopupWithImage(".img-popup", link, name);
      imagePopup.open();
    },
    handleDeleteBttn: (cardId) => {
      const deleteConfirmation = new PopupWithConfirmation(
        ".popup__delete-card",
        cardId,
        {
          sendForm: (cardId) => {
            api.deleteCard(cardId);
            cardElement.remove();
            deleteConfirmation.close();
          },
        }
      );
      deleteConfirmation.open();
      deleteConfirmation.setEventListeners();
    },
    handleCardLike: (isLiked, cardId) => {
      if (isLiked) {
        api
          .addLike(cardId)
          .then((res) => {
            card.changeLikesNumber(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api
          .removeLike(cardId)
          .then((res) => {
            card.changeLikesNumber(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  });
  const cardElement = card.generateCard();
  renderCards.addItem(cardElement);
}

const renderCards = new Section(
  {
    items: [],
    renderer: (item) => {
      createCards(item);
    },
  },
  ".cards"
);

const validateInfoForm = () => {
  const form = new FormValidator(selectors, ".popup__form");
  form.enableValidation();
};

const validatePlaceForm = () => {
  const form = new FormValidator(selectors, ".popup__form_add_place");
  form.enableValidation();
};

const validateAvatarForm = () => {
  const form = new FormValidator(selectors, ".popup_profile-pic");
  form.enableValidation();
};

validateInfoForm();
validatePlaceForm();
validateAvatarForm();

const setInfo = new UserInfo({
  nameSelector: ".profile__name",
  ocupationSelector: ".profile__description",
  avatarSelector: ".profile__avatar",
});

const userInfoPopup = new PopupWithForm({
  popupSelector: ".popup",
  callback: () => {
    const userInfo = setInfo.getUserInfo();
    setInfo.setUserInfo(userInfo);
    userInfoPopup.close();
    api
      .saveProfileData()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        userInfoPopup.renderLoading(false);
      });
  },
});

const addPlacePopup = new PopupWithForm({
  popupSelector: ".popup_add_place",
  callback: (item) => {
    api
      .addCardToServer(item)
      .then((res) => {
        createCards(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        addPlacePopup.renderLoading(false);
      });
    addPlacePopup.close();
  },
});

const editAvatarPopup = new PopupWithForm({
  popupSelector: ".popup_profile-pic",
  callback: () => {
    api
      .updateProfilePic()
      .then((res) => {
        setInfo.setAvatar(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        editAvatarPopup.renderLoading(false);
      });
    editAvatarPopup.close();
  },
});
editAvatarPopup.setEventListeners();

editButton.addEventListener("click", () => {
  userInfoPopup.open();
  userInfoPopup.setEventListeners();
});

addButton.addEventListener("click", () => {
  addPlacePopup.open();
  addPlacePopup.setEventListeners();
});

avatarOverlay.addEventListener("click", () => {
  editAvatarPopup.open();
});

const api = new Api();

api
  .getInitialCards()
  .then((res) => {
    const dataArray = res.reverse();
    renderCards.renderer(dataArray);
  })
  .catch((err) => {
    console.log(err);
  });

api
  .getUserData()
  .then((res) => {
    setInfo.setUserInfo(res);
    setInfo.setAvatar(res);
  })
  .catch((err) => {
    console.log(err);
  });
