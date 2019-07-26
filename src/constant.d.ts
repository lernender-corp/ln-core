
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

export declare enum MessageStatus {
  Undefined = 0,
  Success = 1,
  Error = 2
}

export declare enum ColumnCategory {
  Undefined = 0,
  Specific = 2,
  Interline = 4,
  Reference = 8,
  SupportInformation = 16
}

export declare enum HelpType {
  Undefined = 0,
  Default = 1,
  Information = 2,
  Warning = 3,
  Error = 4,
}

export declare enum DropdownType {
  Undefined = 0,
  Standard = 1,
  Transparent = 2,
  Chip = 3
}

export declare enum ListboxType {
  Undefined = 0,
  Standard = 1,
  Checkbox = 2,
  MultiSelect = 3,
  Folder = 4
}


export declare enum ChipType {
  Undefined = 0,
  Standard = 1,
  Flag = 2
}

export declare enum Connection {
  Connecting = 0,
  Open = 1,
  Closing = 2,
  Closed = 3,
  Aborted = 4
}

export declare enum Address {
  Business = 0,
  Home = 1,
  Other = 2,
  Work = 3
}

export declare enum File {
  MicrosoftWord = 0,
  MicrosoftExcel = 1,
  Text = 2
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

export declare enum MapType {
  Undefined = 0,
  KeyValue = 1,
  ValueKey = 2
}


export declare enum SelectionType {
  None = 0,
  Single = 1,
  MultiSelect = 2,
  MultiChecked = 3
}

export declare enum Case {
  None = 0,
  UpperCase = 1,
  LowerCase = 2,
  CamelCase = 3
}

export declare enum Layout {
  None = 0,
  Horizontal = 1,
  Vertical = 2
}

export declare enum GridView {
  None = 0,
  Card = 1,
  Grid = 2
}

export declare enum TableView {
  None = 0,
  Card = 1,
  Table = 2
}

export declare enum Direction {
  Undefined = 0,
  Ascending = 1,
  Descending = 2
}


export declare enum WindowState {
  None = 0,
  Normal = 1,
  Open = 2,
  Closed = 3,
  Minimized = 4,
  Maximized = 5,
}

export declare enum Dock {
  None = 0,
  Top = 1,
  Bottom = 2,
  Left = 3,
  Right = 4
}

export declare enum Command {
  Undefined = 0,
  Activated = 1,
  Deactivated = 2,
  Add = 3,
  Edit = 4,
  Delete = 5,
  Search = 6,
  Update = 7,
  Revert = 8,
  Download = 9,
  View = 10,
  OK = 11,
  Cancel = 12,
}

export declare enum Environment {
  None = 0,
  Default = 1,
  Localhost = 2,
  Development = 3,
  E2E = 4,
  Production = 5,
  QA = 6,
  Stage = 7,
  Test = 8
}

export declare enum Component {
  AppMenu = 1,
  Banner = 2,
  Button = 3,
  Calendar = 4,
  CalendarCard = 5,
  Card = 6,
  CardProfile = 7,
  Category = 8,
  Checkbox = 9,
  Clock = 10,
  Command = 11,
  ComponentViewer = 12,
  Currency = 13,
  Date = 14,
  DatePicker = 15,
  DropDown = 16,
  DropdownType = 50,
  Footer = 17,
  Header = 18,
  Help = 19,
  Html = 20,
  Hyperlink = 23,
  Icon = 24,
  Image = 25,
  Json = 26,
  Message = 27,
  NavContainer = 28,
  NavMenu = 29,
  NavSideBar = 30,
  Notification = 31,
  Number = 32,
  Pagination = 33,
  Panel = 34,
  Percent = 35,
  RadioButton = 36,
  Search = 37,
  SearchGroup = 38,
  Tab = 39,
  TabContent = 40,
  Table = 41,
  TableFilter = 42,
  TableFooter = 43,
  TaskBar = 44,
  Text = 45,
  TextArea = 46,
  Toolbar = 47,
  ToolTip = 48,
  TypeAhead = 49,
  Undefined = 0,
}

export declare enum SetTimoutDelay {
  Short = 10,
  Medium = 100,
  Long = 250
}

export declare enum NotificationTimeout {
  Standard = 5000
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

export declare enum Checkbox {
  Checked = 1,
  Unchecked = 2,
  Deselect = 3
}
