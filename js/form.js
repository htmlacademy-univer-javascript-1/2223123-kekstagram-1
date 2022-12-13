const fileUpload = document.querySelector('#upload-file');
const uploadButtonCancel = document.querySelector('#upload-cancel');
const uploadForm = document.querySelector('.img-upload__form');
const uploadButtonSubmit = document.querySelector('.img-upload__submit');
const commentUser = uploadForm.querySelector('.text__description');
const hashtagUser = uploadForm.querySelector('.text__hashtags');

fileUpload.addEventListener('change', ()=>{
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
});

uploadButtonCancel.addEventListener('click', ()=>{
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  fileUpload.value = '';
  document.querySelector('body').classList.remove('modal-open');
});

document.addEventListener('keydown', (evt)=>{
  if(evt.keyCode === 27 && commentUser !== document.activeElement && hashtagUser !== document.activeElement){
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    fileUpload.value = '';
    document.querySelector('body').classList.remove('modal-open');
  }
});


const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text-item',
  errorClass:'img-upload__text-item--invalid',
  successClass:'img-upload__text-item--valid',
  errorTextParent:'img-upload__text-item',
  errorTextTag: 'span',
  errorTextClass:'form__error',
});

function validateComment(comment){
  return comment.length <= 140;
}

pristine.addValidator(commentUser, validateComment, 'Сообщение не больше 140 символов');

function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}

function validateHashtag(hashtags){
  hashtags.toLowerCase();
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  let flag = false;
  const hashtagsArray = hashtags.split(' ');
  for (let i =0; i<hashtagsArray.length; i++){
    if(re.test(hashtagsArray[i]) &&(hashtagsArray.length<=5) && !hasDuplicates(hashtagsArray)){
      flag = true;
    }
    else{
      flag=false;
    }
  }

  return flag;
}

pristine.addValidator(hashtagUser, validateHashtag, 'Не больше 5 уникальных хэштэгов. Хэштэг от 1 до 20 символов, включая #');

hashtagUser.addEventListener('input', () => {
  if(pristine.validate()) {
    uploadButtonSubmit.disabled = false;
  }
  else{
    uploadButtonSubmit.disabled = true;
  }
});

uploadForm.querySelector('.text__description').addEventListener('input', () => {
  if(pristine.validate()) {
    uploadButtonSubmit.disabled = false;
  }
  else{
    uploadButtonSubmit.disabled = true;
  }
});

uploadForm.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  pristine.validate();
});

