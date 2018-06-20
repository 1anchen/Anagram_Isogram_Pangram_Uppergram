const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  lowerphrase = phrase.toLowerCase();
  testPhrase = lowerphrase.replace(/\s/gi,'').split('');
}

PangramFinder.prototype.isPangram = function () {
  let alphabetArray = Array.from(this.alphabet);
  let newArray = Array.from(testPhrase);
  let tempArray = [];
  let dupArray = [];

  let condition = 0;
  newArray.forEach((letter) => {

    if(alphabetArray.includes(letter)){
      if(tempArray.includes(letter)){
        dupArray.push(letter);
      }else{
        tempArray.push(letter);
      }
    }

  });
  if (tempArray.length === 26){
    condition = true;
  }else{
    condition = false;
  }
  return condition;



}

module.exports = PangramFinder;
