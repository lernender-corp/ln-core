import * as Library from './index';

export function isEmail(o) {
  const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (Library.isStringWithLength(o)) {
    return expression.test(o);
  }

  return false;
}

export function isInRange(value, min = 0, max = 0) {

  if (Library.isNumber(min) && Library.isNumber(max)) {
    if (min < max) {
      return (Library.isNumber(value) && (value >= min && value <= max));
    }
  }

  return false;
}

export function isWordCountInRange(value, max = 0) {

  if (Library.isStringWithLength(value)) {
    return isInRange(Library.wordCount(value), 0, max);
  }

  return false;
}

export function hasComparisonOperator(o) {
  const expression = /[<|>|=]/;

  if (Library.isStringWithLength(o)) {
    return expression.test(o);
  }

  return false;
}

export function hasInverseOperator(o) {
  const expression = /[-|!]/;

  if (Library.isStringWithLength(o)) {
    return expression.test(o);
  }

  return false;
}

export default {
  isEmail,
  isInRange,
  isWordCountInRange,
  hasComparisonOperator,
  hasInverseOperator
};
