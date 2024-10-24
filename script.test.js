const utils = require('./script');

describe('Capitalize', () => {
   test('man will be equal to Man', () => {
      expect(utils.capitalize('man')).toBe('Man');
   });
   test('elephant', () => {
      expect(utils.capitalize('elephant')).toBe('Elephant');
   });
   test('goat', () => {
      expect(utils.capitalize('goat')).toBe('Goat');
   });
});

describe('reverseString', () => {
   test('Man should give us naM', () => {
      expect(utils.reverseString("Man")).toBe("naM");
   });
   test('Animal', () => {
      expect(utils.reverseString("Animal")).toBe("laminA");
   });
   test('Sttrught', () => {
      expect(utils.reverseString("Sttrught")).toBe("thgurttS");
   });
   test('Dog', () => {
      expect(utils.reverseString("Dog")).toBe("goD");
   });
});

describe('Calculator', () => {
   test("2 + 2 is equal 4", () => {
      expect(utils.add(2,2)).toBe(4);
   });
   test("2 - 2 is equal 0", () => {
      expect(utils.subtract(2,2)).toBe(0);
   });
   test("2 * 3 is equal 6", () => {
      expect(utils.multiply(2,3)).toBe(6);
   });
   test("2 / 2 is equal 1", () => {
      expect(utils.divide(2,2)).toBe(1);
   });
});

describe('Caesar CIpher', () => {
   test('ABC', () => {
      expect(utils.caesarCipher("ABC", 3)).toBe("DEF");
   });
})
