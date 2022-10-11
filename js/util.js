let getRandomNumber = function (minNumber, maxNumber) {
  if (minNumber >= maxNumber) {
    return 'Левое значение должно быть меньше правого';
  } else {
    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }
};

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

// let checkStringLength = function (string, maxLength){
//     let stringLength = string.length;
//     return (stringLength <= maxLength);
// };

export {getRandomNumber, getRandomDifferentNumber, commentsIds, photosIds, usersIds}
