import * as Validator from "./validate";

describe('library/validator', () => {

  it ('expect validator email to be well formed', () => {
    expect(Validator.isEmail(null)).toBe(false);
    expect(Validator.isEmail(undefined)).toBe(false);
    expect(Validator.isEmail(123)).toBe(false);
    expect(Validator.isEmail('123.com')).toBe(false);
    expect(Validator.isEmail('123@')).toBe(false);
    expect(Validator.isEmail('sean@larkinscom')).toBe(false);
    expect(Validator.isEmail('sean@larkins.org')).toBe(true);
    expect(Validator.isEmail('sean@larkins.com')).toBe(true);
  });

  it ('expect validator isInRange to be well formed', () => {
    expect(Validator.isInRange(null)).toBe(false);
    expect(Validator.isInRange(undefined)).toBe(false);
    expect(Validator.isInRange(123)).toBe(false);
    expect(Validator.isInRange(123, 0, 120)).toBe(false);
    expect(Validator.isInRange(123, 0, 123)).toBe(true);
    expect(Validator.isInRange(0, 0, 123)).toBe(true);
    expect(Validator.isInRange(-1, 0, 120)).toBe(false);
  });

  it ('expect validator isWordCountInRange to be well formed', () => {
    const text = 'Here now!';
    expect(Validator.isWordCountInRange(null)).toBe(false);
    expect(Validator.isWordCountInRange(undefined)).toBe(false);
    expect(Validator.isWordCountInRange(text)).toBe(false);
    expect(Validator.isWordCountInRange(text, 3)).toBe(true);
    expect(Validator.isWordCountInRange(text, 2)).toBe(true);
    expect(Validator.isWordCountInRange(text, 1)).toBe(false);
  });

});
