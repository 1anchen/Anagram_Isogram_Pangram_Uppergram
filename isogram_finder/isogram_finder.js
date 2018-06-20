const IsogramFinder = function (word) {
  lowerWord = word.toLowerCase();
  testWord = lowerWord.replace(/\s/gi,'').split('');
  wordObject = {};
}

IsogramFinder.prototype.isIsogram = function () {
  let newArray = Array.from(testWord);
  let condition = true;

  newArray.forEach((letter) => {

    if(wordObject[letter]){
      wordObject[letter]++;
    }
    else{
      wordObject[letter] = 1;
    }

  });

  for(letter in wordObject){
    if(wordObject[letter] > 1){
      condition = false;
    }
  }
  
  return condition;

}

module.exports = IsogramFinder;
