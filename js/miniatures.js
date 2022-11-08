import {getRandomPhoto} from "./data.js"
import {usersIds} from "./util.js"
const picturesTemplate = document.querySelector("#picture").content.querySelector('.picture');
const userPictures = () => Array.from({length: usersIds}, getRandomPhoto);
const fragment = document.createDocumentFragment();
userPictures.forEach(() =>{
   const imgItem = picturesTemplate.cloneNode(true);
   const img = imgItem.querySelector(".picture__img");
   const likes = imgItem.querySelector(".picture__likes");
   const comments = imgItem.querySelector(".picture__comments");
   img.src = userPictures.url;
   likes.textContent = userPictures.likes;
   comments.textContent = userPictures.comment;
   fragment.appendChild(imgItem);
});

console.log(fragment.forEach())