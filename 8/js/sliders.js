const biggerScaleButton = document.querySelector('.scale__control--bigger');
const smallerScaleButton = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');
const uploadForm = document.querySelector('.img-upload__form');
const effectLevel = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const STEP = 25;
let isSepia = false;

const effectRadioButtons = document.querySelectorAll('.effects__radio');
effectLevel.value = 1;

let value = parseInt(scaleValue.value.slice(0, scaleValue.value.length - 1), 10);
const isNoneEffect = function(){
  if(imgPreview.className === 'effects__preview--none'){
    effectLevelSlider.setAttribute('hidden', true);
  }
};

uploadForm.addEventListener('input', () => {
  scaleValue.value = '100%';
  value=100;
  imgPreview.style.transform = `scale(${1})`;
  imgPreview.classList.remove(imgPreview.className);
  imgPreview.classList.add('effects__preview--none');
  isNoneEffect();
  imgPreview.removeAttribute('style');
  isSepia = false;
});
isNoneEffect();
biggerScaleButton.addEventListener('click', () => {
  if(value !== 100){
    value += STEP;
    scaleValue.value = Number(value/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});
    if(value !== 100){
      imgPreview.style.transform = `scale(0.${value})`;
    }
    if(value === 100){
      imgPreview.style.transform = `scale(${1})`;
    }
  }
});

smallerScaleButton.addEventListener('click', () => {
  if(value !==25){
    value -= STEP;
    scaleValue.value = Number(value/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});
    imgPreview.style.transform = `scale(0.${value})`;
  }
});


for (const button of effectRadioButtons){
  button.addEventListener('change', () => {
    let effect = 'none';
    imgPreview.style.filter = '';
    imgPreview.classList.remove(imgPreview.className);
    if (button.checked) {
      effect = button.value;
    }
    imgPreview.classList.add(`effects__preview--${effect}`);
    if(imgPreview.className === 'effects__preview--none'){
      effectLevelSlider.setAttribute('hidden', true);
    }
    if(imgPreview.className === 'effects__preview--chrome'){
      effectLevelSlider.removeAttribute('hidden');
      isSepia = false;
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 1,
        step: 0.1
      });
    }
    if(button.value === 'sepia'){
      isSepia = true;
      effectLevelSlider.removeAttribute('hidden');
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 1,
        step: 0.1
      });
    }
    else{
      isSepia = false;
    }
    if(imgPreview.className === 'effects__preview--marvin'){
      effectLevelSlider.removeAttribute('hidden');
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100
        },
        start: 100,
        step: 1
      });
    }
    if(imgPreview.className === 'effects__preview--phobos'){
      effectLevelSlider.removeAttribute('hidden');
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3
        },
        start: 3,
        step: 0.1
      });
    }
    if(imgPreview.className === 'effects__preview--heat'){
      effectLevelSlider.removeAttribute('hidden');
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3
        },
        start: 3,
        step: 0.1
      });
    }
  });}

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (val) {
      if (Number.isInteger(val)) {
        return val.toFixed(0);
      }
      return val.toFixed(1);
    },
    from: function (val) {
      return parseFloat(val);
    },
  },
});

effectLevelSlider.noUiSlider.on('update', () => {
  effectLevel.value = effectLevelSlider.noUiSlider.get();
  if(isSepia){
    imgPreview.style.filter = `sepia(${effectLevel.value})`;
  }
  if(imgPreview.className === 'effects__preview--none'){
    imgPreview.removeAttribute('style');
  }
  if(imgPreview.className === 'effects__preview--chrome'){
    imgPreview.style.filter = `grayscale(${effectLevel.value})`;
  }
  if(imgPreview.className === 'effects__preview--marvin'){
    imgPreview.style.filter = `invert(${effectLevel.value}%)`;
  }
  if(imgPreview.className === 'effects__preview--phobos'){
    imgPreview.style.filter = `blur(${effectLevel.value}px)`;
  }
  if(imgPreview.className === 'effects__preview--heat'){
    imgPreview.style.filter = `brightness(${effectLevel.value})`;
  }
});


