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

console.log(reverseString("Sttr"));

module.exports = {
   capitalize,
   reverseString
};