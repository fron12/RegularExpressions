let wrongText = "The ocean is red.";
let redRegex = /red/;
let result = wrongText.replace(redRegex, "blue");
// console.log(result);

let myDog = "My dog Rocky".replace(/(\w+)\s(\w+)\s(\w+)/, "$3 $2 $1");
console.log(myDog);