const ALERT_SHOW_TIME = 5000;

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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

// let checkStringLength = function (string, maxLength){
//     let stringLength = string.length;
//     return (stringLength <= maxLength);
// };

export {getRandomNumber, getRandomDifferentNumber,getNumbersArray, showAlert};
