function capitalize(word) {
   let string = word;
   if(typeof string.at(0) !== 'string') {
      return null;
   }
   let firstLetter = string.slice(0,1).toUpperCase();
   return firstLetter + string.slice(1);
}

function reverseString(string) {
   return string.split("").reverse().join("");
}

function add(a,b) {
   return a + b;
}

function subtract(a,b) {
   return a - b;
}

function multiply(a, b) {
   return a * b;
}

function divide(a,b) {
   return a / b;
}

function caesarCipher(word, shift) {
   let finalArr = [];

   for (let letter of word) {
      if (/[A-Z]/.test(letter)) { // Uppercase letters
         let shiftedCharCode = ((letter.charCodeAt(0) - 65 + shift) % 26 + 26) % 26 + 65;
         finalArr.push(String.fromCharCode(shiftedCharCode));
      } else if (/[a-z]/.test(letter)) { // Lowercase letters
         let shiftedCharCode = ((letter.charCodeAt(0) - 97 + shift) % 26 + 26) % 26 + 97;
         finalArr.push(String.fromCharCode(shiftedCharCode));
      } else { // Non-alphabetic characters remain unchanged
         finalArr.push(letter);
      }
   }
   
   return finalArr.join("");
}

// console.log(reverseString("Sttr"));
// console.log(caesarCipher("ABC", 3));

module.exports = {
   capitalize,
   reverseString,
   add,
   subtract,
   multiply,
   divide,
   caesarCipher
};