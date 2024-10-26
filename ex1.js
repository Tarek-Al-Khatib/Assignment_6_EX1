var input = prompt("Enter number of rows");
var rows = parseInt(input);
var emptySpace = " ";
var star = "*";
// string repeat : https://www.w3schools.com/jsref/jsref_repeat.asp
for (var i = 1; i < rows; i++) {
  console.log(emptySpace.repeat(rows - i) + star.repeat(2 * i - 1));
}

for (var i = rows - 2; i >= 1; i--) {
  console.log(emptySpace.repeat(rows - i) + star.repeat(2 * i - 1));
}
