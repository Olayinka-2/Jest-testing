const utils = require('./script');
const {capitalize, reverseString} =  utils;

describe('Capitalize', () => {
   test('man will be equal to Man', () => {
      expect(capitalize('man')).toBe('Man');
   });
   test('elephant', () => {
      expect(capitalize('elephant')).toBe('Elephant');
   });
   test('goat', () => {
      expect(capitalize('goat')).toBe('Goat');
   });
});

describe('reverseString', () => {
   test('Man should give us naM', () => {
      expect(reverseString("Man")).toBe("naM");
   });
   test('Animal', () => {
      expect(reverseString("Animal")).toBe("laminA");
   });
   test('Sttrught', () => {
      expect(reverseString("Sttrught")).toBe("thgurttS");
   });
   test('Dog', () => {
      expect(reverseString("Dog")).toBe("goD");
   });
});
