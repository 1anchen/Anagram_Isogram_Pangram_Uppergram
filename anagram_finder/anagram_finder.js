const AnagramFinder = function (word) {
  lowerWord = word.toLowerCase();
  splitWord = lowerWord.split('');
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  let resultArray = [];
  let wordArray = Array.from(splitWord);
  let otherWordsArray = [];
  let finalArray = [];
  let otherFinalArray = [];
  let condition = null;

  wordArray.sort();
  finalArray.push(wordArray.join(''));

    otherWords.forEach((word) => {
    newLowerWord = word.toLowerCase();
    newSplitWord = newLowerWord.split('');
    otherWordsArray = Array.from(newSplitWord);
    otherWordsArray.sort();
    otherFinalArray.push(otherWordsArray.join(''));
    resultArray = otherFinalArray.filter((innerWord) => finalArray[0]===innerWord);
  });

  if(resultArray.length ==0){
    resultArray = [];
  }else{
    resultArray = [];
    resultArray.push(otherWords[0]);
  }


  if(otherWords.includes(lowerWord)){
    resultArray = [];
  }


  return resultArray ;
}

module.exports = AnagramFinder;
