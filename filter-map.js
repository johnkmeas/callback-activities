var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(arr){
  //console.log(arr.x, arr.y)
  var x = Math.pow(arr.x, 2);
  var y = Math.pow(arr.y, 2);
  var z = x + y;
  z = Math.sqrt(z);
  console.log(z);
  return z;

});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
