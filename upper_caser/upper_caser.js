const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
  let uppercaseArray = this.words.map((word) => word.toUpperCase());
  return uppercaseArray;
}

module.exports = UpperCaser;
