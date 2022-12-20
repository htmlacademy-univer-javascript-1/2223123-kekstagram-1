import {getRandomPhoto} from './data.js';
//import {usersIds} from './util.js';
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const getUsersPicturesArray = function() {
  const photosArray = [];
  for(let i = 0; i < 25; i++){
    photosArray[i] = getRandomPhoto();
  }
  return photosArray;
};

const userPictures = getUsersPicturesArray();
const fragment = document.createDocumentFragment();
userPictures.forEach((photo) =>{
  const imgItem = picturesTemplate.cloneNode(true);
  const img = imgItem.querySelector('.picture__img');
  const likes = imgItem.querySelector('.picture__likes');
  const comments = imgItem.querySelector('.picture__comments');
  img.src = photo.url;
  likes.textContent = photo.likes;
  comments.textContent = photo.comment;
  fragment.appendChild(imgItem);
});
picturesContainer.appendChild(fragment);
