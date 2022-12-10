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

const renderCards = new Section(
  {
    renderer: (item) => {
      const card = new Card(
        item,
        "#cards-template",
        "7ff4cbebe1137a7c57e5d511",
        {
          handleCardClick: (link, name) => {
            const imagePopup = new PopupWithImage(".img-popup", link, name);
            imagePopup.open();
          },
          handleDeleteBttn: (cardId) => {
            const deleteConfirmation = new PopupWithConfirmation(
              ".popup_delete-card",
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
        }
      );

      const cardElement = card.generateCard();
      renderCards.addItem(cardElement);
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
    //callback usado para hacer loose coupling
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
        const card = new Card(res, "#cards-template", res.owner._id, {
          handleCardClick: (link, name) => {
            const imagePopup = new PopupWithImage(".img-popup", link, name);
            imagePopup.open();
          },
          handleDeleteBttn: (cardId) => {
            const deleteConfirmation = new PopupWithConfirmation(
              ".popup_delete-card",
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

const api = new Api({
  address: "https://around.nomoreparties.co/v1/cohort-1-es",
  token: "2be75b7b-0f52-418b-b96c-41c3ad1377b3",
  username: document.querySelector(".profile__name"),
  ocupation: document.querySelector(".profile__description"),
  avatar: document.querySelector(".popup__input_type_profile-pic"),
});

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
