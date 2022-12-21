import {renderPictures} from './miniatures.js';
import {setUserFormSubmit} from './form.js';
import {closeUserModal} from './form.js';
import {showAlert} from './util.js';

fetch('https://26.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    renderPictures(photos);
  })
  .catch(() => {
    showAlert('Не удалось загрузить фотографии пользователей');
  });

const sendData = function(evt, onSuccess){
  const formData = new FormData(evt.target);
  fetch(
    'https://26.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: formData,
    },
  ).then((response) => {
    if(response.ok){
      onSuccess();
      showAlert('Изображение успешно загружено');
    }
    else{
      showAlert('Не удалось отправить фото');
    }
  })
    .catch(() => {
      showAlert('Не удалось отправить фото');
    });
};

setUserFormSubmit(closeUserModal);
export {sendData};
