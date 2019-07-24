import * as Library from '../library/index';
import * as Constant from '../constant';

function _number(value, token) {
  let result = true;
  switch (token.equality) {
    case Constant.Equality.GreaterThanOrEqual:
      result = Math.trunc(value) >= token.value;
      break;
    case Constant.Equality.LessthanOrEqual:
      result = Math.trunc(value) < token.value;
      break;
    case Constant.Equality.Equal:
      result = Math.trunc(value) === Math.trunc(token.value);
      break;
    case Constant.Equality.Not:
      result = !(Math.trunc(value) === Math.trunc(token.value));
      break;
  }
  return result;
}

function _float(value, token) {
  let result = true;
  switch (token.equality) {
    case Constant.Equality.GreaterThanOrEqual:
      result = value >= token.value;
      break;
    case Constant.Equality.LessthanOrEqual:
      result = value < token.value;
      break;
    case Constant.Equality.Equal:
      result = value === token.value;
      break;
    case Constant.Equality.Not:
      result = !(value === token.value);
      break;
  }
  return result;
}

/**
 * startsWith()
 * @param o
 * @returns {boolean}
 */
export function standard(value, column) {
  const filter = column.filter;
  const criteria = column.filterCriteria.toLowerCase();
  const operator = column.filterOperator.toLowerCase();
  const evaluations = [];

  if (filter.hasTokens()) {
    for (const token of filter.tokens) {
      let result = true;

      switch (filter.dataType) {
        case 'float':
          result = _float(value, token);
          break;
        case 'number':
          result = _number(value, token);
          break;
        case 'boolean':
          switch (filter.equality) {
            case Constant.Equality.Not:
              result = !value === token.value;
            default:
              result = value === token.value;
              break;
          }
          break;
        default:
          switch (criteria) {
            case 'startswith':
              switch (column.filter.equality) {
                case Constant.Equality.Not:
                  result = !Library.startsWith(token.value, value);
                  break;
                default:
                  result = Library.startsWith(token.value, value);
                  break;
              }
              break;
                case 'exactmatch':
                switch (column.filter.equality) {
                  case Constant.Equality.Not:
                    result = !Library.exactMatch(token.value, value);
                    break;
                  default:
                    result = Library.exactMatch(token.value, value);
                    break;
                }
                break;

            case 'exact':
              switch (column.filter.equality) {
                case Constant.Equality.Not:
                  result = !Library.exact(token.value, value);
                  break;
                default:
                  result = Library.exact(token.value, value);
                  break;
              }
              break;
            case 'contains':
              switch (column.filter.equality) {
                case Constant.Equality.Not:
                  result = !Library.contains(token.value, value);
                  break;
                default:
                  result = Library.contains(token.value, value);
                  break;
              }
              break;
          }
          break;
      }

      evaluations.push(result);
    }
  }

  switch (operator) {
    case 'and':
      return !evaluations.includes(false);
    case 'or':
      return evaluations.includes(true);
  }
}

export default {
  standard
};
