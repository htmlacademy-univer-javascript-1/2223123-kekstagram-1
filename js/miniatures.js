//import {getRandomPhoto} from './data.js';
//import {usersIds} from './util.js';
import {comparePicturesComments} from './util.js';
import {shuffle} from './sort-filters.js';
const picturesTemplate = document.querySelector('#picture').content.querySelector('a');
const picturesContainer = document.querySelector('.pictures.container');
const removePictures = () => {
  const pictures = picturesContainer.querySelectorAll('.picture');

  pictures.forEach((picture) => {
    picture.remove();
  });
};
const renderPictures = function(userPictures, picturesCount, countStart, filter){
  const fragment = document.createDocumentFragment();
  if (filter === 'random'){
    const randomPictures = shuffle(userPictures.slice());
    randomPictures
      .slice()
      .slice(countStart, picturesCount)
      .forEach((photo) =>{
        const imgItem = picturesTemplate.cloneNode(true);
        const img = imgItem.querySelector('.picture__img');
        const likes = imgItem.querySelector('.picture__likes');
        const comments = imgItem.querySelector('.picture__comments');
        img.src = photo.url;
        likes.textContent = photo.likes;
        comments.textContent = photo.comment;
        fragment.appendChild(imgItem);
      });
  }
  if(filter === 'default'){
    userPictures
      .slice()
      .slice(countStart, picturesCount)
      .forEach((photo) =>{
        const imgItem = picturesTemplate.cloneNode(true);
        const img = imgItem.querySelector('.picture__img');
        const likes = imgItem.querySelector('.picture__likes');
        const comments = imgItem.querySelector('.picture__comments');
        img.src = photo.url;
        likes.textContent = photo.likes;
        comments.textContent = photo.comment;
        fragment.appendChild(imgItem);
      });
  }
  if(filter === 'discuessed'){
    userPictures
      .slice()
      .sort(comparePicturesComments)
      .slice(countStart, picturesCount)
      .forEach((photo) =>{
        const imgItem = picturesTemplate.cloneNode(true);
        const img = imgItem.querySelector('.picture__img');
        const likes = imgItem.querySelector('.picture__likes');
        const comments = imgItem.querySelector('.picture__comments');
        img.src = photo.url;
        likes.textContent = photo.likes;
        comments.textContent = photo.comment;
        fragment.appendChild(imgItem);
      });
  }
  removePictures();
  picturesContainer.appendChild(fragment);
};

export {renderPictures};
