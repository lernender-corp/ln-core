import {Enum} from '../system/enum';

export const Action = new Enum({
  ADD: { value: 0, description: 'ADD' },
  DELETE: { value: 1, description: 'DELETE' },
  SELECT: { value: 2, description: 'SELECT' },
  UPDATE: { value: 3, description: 'UPDATE' }
});

export const StackAction = new Enum({
  INIT: { value: 0, description: 'INIT' },
  POP: { value: 1, description: 'POP' },
  PUSH: { value: 2, description: 'PUSH' }
});

export const HttpAction = new Enum({
  DELETE: { value: 0, description: 'DELETE' },
  ERROR: { value: 1, description: 'ERROR' },
  GET: { value: 2, description: 'GET' },
  INIT: { value: 3, description: 'INIT' },
  POST: { value: 4, description: 'POST' },
  PUT: { value: 5, description: 'PUT' },
  REQUEST: { value: 6, description: 'REQUEST' },
  RESPONSE: { value: 7, description: 'RESPONSE' },
});
