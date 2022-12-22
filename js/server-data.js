import {showAlert} from './util.js';
const filters = document.querySelector('.img-filters');
const getData = (onSuccess) => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
      filters.classList.remove('img-filters--inactive');
    })
    .catch(() => {
      showAlert('Не удалось загрузить фотографии пользователей');
    });
};


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

export {sendData, getData};
