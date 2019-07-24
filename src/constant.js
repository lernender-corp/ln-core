import {Enum} from './system/enum';

export const FILTER_TYPE_NONE = 0;
export const FILTER_TYPE_INTERNAL = 1;
export const FILTER_TYPE_EXTERNAL = 2;
export const FILTER_TYPE_INTERNAL_EXTERNAL = 4;

export const EventType = new Enum({
  Add: { value: 1, description: 'Add' },
  Edit: { value: 2, description: 'Edit' },
  Delete: { value: 3, description: 'Delete' },
  Select: { value: 4, description: 'Select' },
  Click: { value: 5, description: 'Click' },
  Remove: { value: 6, description: 'Remove' },
  Push: { value: 7, description: 'Push' },
  Pull: { value: 8, description: 'Pull' },
  Notification: { value: 9, description: 'Notification' },
  Informational: { value: 10, description: 'Informational' },
  Warning: { value: 11, description: 'Warning' },
  Undefined: { value: 0, description: 'Undefined' }
});

export const ContextType = new Enum({
  Component: { value: 1, description: 'Component' },
  Account: { value: 2, description: 'Account' },
  Module: { value: 3, description: 'Module' },
  Service: { value: 4, description: 'Service' },
  RestAPI: { value: 5, description: 'RestAPI' },
  SecurityContext: { value: 6, description: 'SecurityContext' },
  UserProfile: { value: 7, description: 'UserProfile' },
  ClearNotification: { value: 8, description: 'ClearNotification' },
  Undefined: { value: 0, description: 'Undefined' }
});

export const Email = new Enum({
  Business: { value: 0, description: 'Business' },
  Home: { value: 1, description: 'Home' },
  Other: { value: 2, description: 'Other' },
  Work: { value: 3, description: 'Work' }
});

export const Phone = new Enum({
  Business: { value: 0, description: 'Business' },
  Cell: { value: 1, description: 'Cell' },
  Home: { value: 2, description: 'Home' },
  Other: { value: 3, description: 'Other' },
  Work: { value: 4, description: 'Work' }
});

export const Status = new Enum({
  Active: { value: 1, description: 'Active' },
  InActive: { value: 2, description: 'InActive' },
  Undefined: { value: 0, description: 'Undefined' }
});

export const Direction = new Enum({
  Ascending: { value: 1, description: 'Ascending' },
  Descending: { value: 2, description: 'Descending' },
  Undefined: { value: 0, description: 'Undefined' }
});

export const GridView = new Enum({
  Card: { value: 1, description: 'Card' },
  Grid: { value: 2, description: 'Grid' },
  None: { value: 0, description: 'None' }
});

export const GridSchemaSelection = new Enum({
  Single: { value: 1, description: 'single' },
  Multi: { value: 2, description: 'multi' },
  None: { value: 0, description: 'none' }
})

export const Equality = new Enum({
  LessThan: { value: 1, description: 'LessThan' },
  GreaterThan: { value: 2, description: 'GreaterThan' },
  Equal: { value: 3, description: 'Equal' },
  LessthanOrEqual: { value: 4, description: 'LessthanOrEqual' },
  GreaterThanOrEqual: { value: 5, description: 'GreaterThanOrEqual' },
  Between: { value: 6, description: 'Between' },
  Not: { value: 7, description: 'Not' },
  None: { value: 0, description: 'None' }
});
