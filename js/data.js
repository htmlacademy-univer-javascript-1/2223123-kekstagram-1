import {getRandomNumber, getRandomDifferentNumber, commentsIds, photosIds, usersIds} from './util.js'

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

export{getRandomPeople, getRandomComment, getRandomPhoto}