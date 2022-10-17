const getRandomNumber = function (minNumber, maxNumber) {
  if (minNumber >= maxNumber) {
    return 'Левое значение должно быть меньше правого';
  } else {
    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }
};

const getNumbersArray = function (amount) {
  const numbersArray = [];
  for (let i = 0; i < amount; i++) {
    numbersArray[i] = i + 1;
  }
  return numbersArray;
};

const commentsIds = getNumbersArray(100);
const photosIds = getNumbersArray(25);
const usersIds = getNumbersArray(25);

const getRandomDifferentNumber = function (array) {
  const randomIndex = getRandomNumber(0, array.length - 1);
  if (array[randomIndex] === '') {
    return getRandomDifferentNumber(array);
  } else {
    const randomNumber = array[randomIndex];
    array[randomIndex] = '';
    return randomNumber;
  }
};

// let checkStringLength = function (string, maxLength){
//     let stringLength = string.length;
//     return (stringLength <= maxLength);
// };

export {getRandomNumber, getRandomDifferentNumber, commentsIds, photosIds, usersIds}
