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

  highestScoreFrom: function(wordArray) {
    var scoresWithWords = [],
        tiedScoredWords = [],
        wordScores = [],
        maxScore = 0,
        maxWord = "";

    for ( var i = 0; i < wordArray.length; i++ ) {
      var score = Scoring.score(wordArray[i]);
      if ( score > maxScore ) {
        maxScore = score;
        maxWord = wordArray[i];
      }
    }

    for ( var j = 0; j < wordArray.length; j++ ) {
      var scoreTwice = Scoring.score(wordArray[j]);
      if (scoreTwice == maxScore) {
        tiedScoredWords.push(maxWord);
        tiedScoredWords.push(wordArray[j]);
      }
    }

    if (tiedScoredWords.length > 0) {
      var shortest = tiedScoredWords.reduce(function (a, b) { return a.length < b.length ? a : b; });
      return shortest;
    }

    return maxWord
  }
};

var Player = function(name) {
  this.name = name;
  this.plays = [];
  this.totalScore = 0;
}

Player.prototype.hasWon = function() {
  if ( this.totalScore >= 100 ) {
    return true;
  } else {
    return false;
  }
}

Player.prototype.play = function(word) {
  if (this.hasWon() === false) {
    var score = Scoring.score(word);
    this.plays.push(word);
    this.totalScore += score;
  }
}

Player.prototype.highestScoringWord = function(allWordsPlayed) {
  var highestWord = Scoring.highestScoreFrom(allWordsPlayed);
  return highestWord;
}

Player.prototype.highestWordScore = function(allWordsPlayed) {
  var highestWord = Scoring.highestScoreFrom(allWordsPlayed);
  highestScore = Scoring.score(highestWord);
  return highestScore;
}


///////// TESTING ////////////

// Check score
// console.log(Scoring.score("box"))

// Check highestScoringWord
// console.log(Scoring.highestScoringWord(["aa","bb","x","ss","dddd"]))

// Create a player
var janey = new Player("Janey");

// Play some words
janey.play("zzz")
janey.play("uyu")
janey.play("abc")

// Test instance properties
console.log("plays array: " + janey.plays)
console.log("total score: " + janey.totalScore)

// Test instance functions
console.log("highestScoringWord: " + janey.highestScoringWord(janey.plays))
console.log("highestWordScore: " + janey.highestWordScore(janey.plays))








module.exports = Scrabble;
