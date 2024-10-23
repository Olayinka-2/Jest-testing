const utils = require('./script');
const {capitalize} =  utils;

describe('Capitalize', () => {
   test('man will be equal to Man', () => {
      expect(capitalize('man')).toBe('Man');
   });
   test('elephant', () => {
      expect(capitalize('elephant to be elephant')).toBe('Elephant to be elephant');
   });
   test('goat', () => {
      expect(capitalize('goat')).toBe('Goat');
   });
})