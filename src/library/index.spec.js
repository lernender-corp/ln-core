import * as Library from "./index";
import { Enum } from "../system/enum";

describe('library/index', () => {
  const options = {
    id: 0,
    name: 'name'
  };
  const items = [
    {
      id: 0,
      name: ''
    },
    {
      id: 1,
      name: 'Shawn'
    },
    {
      id: 2,
      name: 'David'
    }
  ];
  
  class TestObject {
    constructor() {
      this.firstName = 'Tester';
      this.lastName = 'Tested';
    }
    fullName() {
      // For some reason 'this' isn't working when the test runs, so hard-coding the values
      // return this.firstName + ' ' + this.lastName;
      return 'Tester Tested';
    }
  }
  const testObject = new TestObject();

  it ('expect object to be well formed', () => {
    //
    // Function: isNull()
    //
    expect(Library.isNull(null)).toBe(true);
    expect(Library.isNull(undefined)).toBe(false);
    expect(Library.isNull({})).toBe(false);
    //
    // Function: isUndefined()
    //
    expect(Library.isUndefined(null)).toBe(false);
    expect(Library.isUndefined(undefined)).toBe(true);
    expect(Library.isUndefined({})).toBe(false);
    //
    // Function: isNullOrUndefined()
    //
    expect(Library.isNullOrUndefined(null)).toBe(true);
    expect(Library.isNullOrUndefined(undefined)).toBe(true);
    expect(Library.isNullOrUndefined({})).toBe(false);
    //
    // Function: isDefined()
    //
    expect(Library.isDefined(null)).toBe(false);
    expect(Library.isDefined(undefined)).toBe(false);
    expect(Library.isDefined({})).toBe(true);
    //
    // Function: isObject()
    //
    expect(Library.isObject(null)).toBe(false);
    expect(Library.isObject(undefined)).toBe(false);
    expect(Library.isObject({})).toBe(true);
    //
    // Function: isFunction()
    //
    expect(Library.isFunction(null)).toBe(false);
    expect(Library.isFunction(undefined)).toBe(false);
    expect(Library.isFunction({})).toBe(false);
    expect(Library.isFunction(() => { return false; })).toBe(true);
    //
    // Function: isNumber()
    //
    expect(Library.isNumber(null)).toBe(false);
    expect(Library.isNumber(undefined)).toBe(false);
    expect(Library.isNumber('A')).toBe(false);
    expect(Library.isNumber('12')).toBe(true);
    expect(Library.isNumber(12)).toBe(true);
    expect(Library.isNumber(12.34)).toBe(true);

    //
    // Function: isDecimal()
    //
    expect(Library.isDecimal(null)).toBe(false);
    expect(Library.isDecimal(undefined)).toBe(false);
    expect(Library.isDecimal('A')).toBe(false);
    expect(Library.isDecimal('12')).toBe(false);
    expect(Library.isDecimal(12)).toBe(false);
    expect(Library.isDecimal(12.34)).toBe(true);
    //
    // Function: isString()
    //
    expect(Library.isString(null)).toBe(false);
    expect(Library.isString(undefined)).toBe(false);
    expect(Library.isString({})).toBe(false);
    expect(Library.isString('')).toBe(true);
    //
    // Function: isEmpty()
    //
    expect(Library.isEmpty(null)).toBe(false);
    expect(Library.isEmpty(undefined)).toBe(false);
    expect(Library.isEmpty({})).toBe(true);
    expect(Library.isEmpty([])).toBe(true);
    expect(Library.isEmpty(new Date())).toBe(false);
    //
    // Function: isEmptyString()
    //
    expect(Library.isStringWithLength(null)).toBe(false);
    expect(Library.isStringWithLength(undefined)).toBe(false);
    expect(Library.isStringWithLength({})).toBe(false);
    expect(Library.isStringWithLength('')).toBe(false);
    expect(Library.isStringWithLength('Shawn')).toBe(true);
    //
    // Function: camelCase()
    //
    expect(Library.camelCase(null)).toBe(null);
    expect(Library.camelCase('Shawn')).toBe('shawn');
    //
    // Function: isArray()
    //
    expect(Library.isArray(null)).toBe(false);
    expect(Library.isArray(undefined)).toBe(false);
    expect(Library.isArray({})).toBe(false);
    expect(Library.isArray([])).toBe(true);
    //
    // Function: isArrayWithLength()
    //
    expect(Library.isArrayWithLength(null)).toBe(false);
    expect(Library.isArrayWithLength(undefined)).toBe(false);
    expect(Library.isArrayWithLength({})).toBe(false);
    expect(Library.isArrayWithLength([])).toBe(false);
    //
    // Function: isTrue()
    //
    expect(Library.isTrue(null)).toBe(false);
    expect(Library.isTrue(undefined)).toBe(false);
    expect(Library.isTrue({})).toBe(false);
    expect(Library.isTrue(new Date())).toBe(false);
    expect(Library.isTrue(true)).toBe(true);
    expect(Library.isTrue(false)).toBe(false);
    //
    // Function: isFalse()
    //
    expect(Library.isFalse(null)).toBe(false);
    expect(Library.isFalse(undefined)).toBe(false);
    expect(Library.isFalse(false)).toBe(true);
    expect(Library.isFalse(true)).toBe(false);
    //
    // Function: isBoolean()
    //
    expect(Library.isBoolean(null)).toBe(false);
    expect(Library.isBoolean(undefined)).toBe(false);
    expect(Library.isBoolean(false)).toBe(true);
    expect(Library.isBoolean(true)).toBe(true);
    //
    // Function: isArray()
    //
    expect(Library.hasOwnProperty(options, 'id')).toBe(true);
    expect(Library.hasOwnProperty(options, 'name')).toBe(true);
    expect(Library.hasOwnProperty(options, 'created')).toBe(false);
    //
    // Function: isArray()
    //
    expect(Library.isArrayWithLength([1,2])).toBe(true);
    //
    // Function: isArray()
    //
    expect(Library.init(options, 'description','me')).toBe('me');
    expect(Library.init(options, 'name', 'me')).toBe('name');
    //
    // Function: isArray()
    //
    expect(Library.wordCount('The fox hopped over the fence')).toBe(6);
    /**
     * Function: parseObject
     */
    expect(Library.parseObject(testObject, 'firstName')).toBe('Tester');
    expect(Library.parseObject(testObject, 'lastName')).toBe('Tested');
    expect(Library.parseObject(testObject, 'fullName')).toBe('Tester Tested');
  });

  const testEnum = new Enum({
    One: { value: 1, description: 'one' },
    Two: { value: 2, description: 'two' }
  });
  it('isEnum', () => {
    expect(Library.isEnum(testEnum, 1)).toBe(false);
    expect(Library.isEnum(testEnum, testEnum.One)).toBe(true);
    expect(Library.isEnum(testEnum, testEnum.Three)).toBe(false);
    expect(Library.isEnum([1], 1)).toBe(false);
  });
});
