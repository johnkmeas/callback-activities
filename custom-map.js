var words = ["ground", "control", "to", "major", "tom"];

var map = function(word, cb){
  var newArr= [];
  word.forEach(function(x){
    x = cb(x);
    newArr.push(x);
  });
  console.log(newArr);
  return newArr;
};

map(words, function(word) {
  return word.length;
});

// Returns
// [6, 7, 2, 5, 3]
