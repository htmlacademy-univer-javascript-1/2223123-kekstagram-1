let getRandomNumber = function(minNumber,maxNumber){
  if(minNumber>=maxNumber){
    console.log('Левое значение должно быть меньше правого');
  }
  else{
  minNumber = Math.ceil(minNumber);
  maxNumber = Math.floor(maxNumber);
  return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  }
}

let checkStringLength = function (string, maxLength){
    let stringLength = string.length;
    return (stringLength<=maxLength);
}
