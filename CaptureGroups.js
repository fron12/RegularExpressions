let wrongText = "The ocean is red.";
let redRegex = /red/;
let result = wrongText.replace(redRegex, "blue");
// console.log(result);

let myDog = "My dog Rocky".replace(/(\w+)\s(\w+)\s(\w+)/, "$3 $2 $1");
// console.log(myDog);

let repeatWord = "Salad Salad Salad";
let repeatRegex = /(\w+)\s\1\s\1/;
let regexTest = repeatRegex.test(repeatWord);
let regexMatch = repeatWord.match(repeatRegex);
console.log(regexMatch);
