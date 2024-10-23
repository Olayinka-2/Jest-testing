function capitalize(word) {
   let string = word;
   if(typeof string.at(0) !== 'string') {
      return null;
   }
   let firstLetter = string.slice(0,1).toUpperCase();
   return firstLetter + string.slice(1);
}

console.log(capitalize("man"));

module.exports = {
   capitalize
};