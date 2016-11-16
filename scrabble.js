var Scrabble = function(word) {
  this.word = word;
};

var Scoring = {
  scoreChart: {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      D: 2,
      G: 2,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5,
      J: 8,
      X: 8,
      Q: 10,
      Z: 10,
  },

  score: function(word) {
    var score = 0,
        word = word.toUpperCase();

    for (var i = 0; i < word.length; i++) {
      score += this.scoreChart[word[i]];
    }

    if (word.length == 7) {
      score += 50;
    }

    return score
  },

  highestScoringWord: function(wordArray) {
    var scoresWithWords = new Object();

    for ( var i = 0; i < wordArray.length; i++ ) {
      var word = wordArray[i],
          score = this.score(word);

      scoresWithWords[word] = score;
    }

    for ( var x = 0; x < wordArray.length; x++ ) {
      var max = -Infinity;

      if ( scoresWithWords[wordArray[x]] > max ) {
        max = Object.keys(scoresWithWords)[x];
      }
    }

    return max
  }
};




// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

// var myGame = new Scrabble("BOX")   ??!?!?!??!

// console.log(Scoring.score("box"))

console.log(Scoring.highestScoringWord(["a","b","x"]))









module.exports = Scrabble;
