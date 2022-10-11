const COMMENTS_VARIANTS = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES_VARIANTS = [
    'Артем',
    'Александр',
    'Анастасия',
    'Алексей',
    'Маргарита',
];

let getRandomNumber = function (minNumber, maxNumber) {
  if (minNumber >= maxNumber) {
    return 'Левое значение должно быть меньше правого';
  } else {
    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }
};

// let checkStringLength = function (string, maxLength){
//     let stringLength = string.length;
//     return (stringLength <= maxLength);
// };

let getNumbersArray = function (amount) {
  let numbersArray = [];
  for (let i = 0; i < amount; i++) {
    numbersArray[i] = i + 1;
  }
  return numbersArray;
};

let commentsIds = getNumbersArray(100);
let photosIds = getNumbersArray(25);
let usersIds = getNumbersArray(25);

let getRandomDifferentNumber = function (array) {
  let randomIndex = getRandomNumber(0, array.length - 1);
  if (array[randomIndex] === '') {
    return getRandomDifferentNumber(array);
  } else {
    let randomNumber = array[randomIndex];
    array[randomIndex] = '';
    return randomNumber;
  }
};

let getRandomComment = function () {
  let comment = {
    id: getRandomDifferentNumber(commentsIds),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS_VARIANTS[getRandomNumber(0, COMMENTS_VARIANTS.length - 1)],
    name: NAMES_VARIANTS[getRandomNumber(0, NAMES_VARIANTS.length - 1)],
  };
  return comment;
};

let getRandomPhoto = function () {
  let user = {
    id: getRandomDifferentNumber(usersIds),
    url: `photos/${getRandomDifferentNumber(photosIds)}.jpg`,
    description: 'Описание фото',
    likes: getRandomNumber(15, 200),
    comment: getRandomComment(),
  };
  return user;
};

let getRandomPeople = function () {
  let randomObjectPeople = [];
  for (let i = 0; i < 25; i++) {
    randomObjectPeople[i] = getRandomPhoto();
  }
  return randomObjectPeople;
};

console.log(getRandomPeople());