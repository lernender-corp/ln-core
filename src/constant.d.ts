
export const FILTER_TYPE_NONE = 0;
export const FILTER_TYPE_INTERNAL = 1;
export const FILTER_TYPE_EXTERNAL = 2;
export const FILTER_TYPE_INTERNAL_EXTERNAL = 4;

export declare enum EventType {
  Undefined = 0,
  Add = 1,
  Edit = 2,
  Delete = 3,
  Select = 4,
  Click = 5,
  Remove = 6,
  Push = 7,
  Pull = 8,
  Notification = 9,
  Informational = 10,
  Warning = 11,
}

export declare enum ContextType {
  Undefined = 0,
  Component = 1,
  Account = 2,
  Module = 3,
  Service = 4,
  RestAPI = 5,
  SecurityContext = 6,
  UserProfile = 7,
  ClearNotification=8
}

export declare enum Email {
  Business = 0,
  Home = 1,
  Other = 2,
  Work = 3
}

export declare enum Phone {
  Business = 0,
  Home = 1,
  Other = 2,
  Work = 3
}

export declare enum Status {
  Undefined = 0,
  Active = 1,
  InActive = 2
}

export declare enum GridView {
  None = 0,
  Card = 1,
  Grid = 2
}

export declare enum Direction {
  Undefined = 0,
  Ascending = 1,
  Descending = 2
}

export declare enum GridSchemaSelection {
  Single = 1,
  Multi = 2,
  None = 0
}

export declare enum Equality {
  LessThan = 1,
  GreaterThan = 2,
  Equal = 3,
  LessthanOrEqual = 4,
  GreaterThanOrEqual =  5,
  Between = 6,
  Not = 7,
  None = 0
}
