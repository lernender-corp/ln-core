import {Enum} from './system/enum';

export const FILTER_TYPE_NONE = 0;
export const FILTER_TYPE_INTERNAL = 1;
export const FILTER_TYPE_EXTERNAL = 2;
export const FILTER_TYPE_INTERNAL_EXTERNAL = 4;

export const HelpType = new Enum({
  Error: { value: 4, description: 'Error' },
  Warning: { value: 3, description: 'Warning' },
  Information: { value: 2, description: 'Standard' },
  Default: { value: 1, description: 'Default' },
  Undefined: { value: 0, description: 'Undefined' }
});

export const ColumnCategory = new Enum({
  Specific: { value: 2, description: 'Specific' },
  Interline: { value: 4, description: 'Interline' },
  Reference: { value: 8, description: 'Reference' },
  SupportInformation: { value: 16, description: 'SupportInformation' },
  Undefined: { value: 0, description: 'Undefined' }
});

export const DropdownType = new Enum({
  Chip: { value: 3, description: 'Chip' },
  Transparent: { value: 2, description: 'Transparent' },
  Standard: { value: 1, description: 'Standard' },
  Undefined: { value: 0, description: 'Undefined' }
});

export const ListboxType = new Enum({
  Folder: { value: 4, description: 'Folder' },
  MultiSelect: { value: 3, description: 'MultiSelect' },
  Checkbox: { value: 2, description: 'Checkbox' },
  Standard: { value: 1, description: 'Standard' },
  Undefined: { value: 0, description: 'Undefined' }
});

export const ChipType = new Enum({
  Flag: { value: 2, description: 'Flag' },
  Standard: { value: 1, description: 'Standard' },
  Undefined: { value: 0, description: 'Undefined' }
});

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

export const MessageStatus = new Enum({
  Success: { value: 1, description: 'Success' },
  Error: { value: 2, description: 'Error' },
  Undefined: { value: 0, description: 'Undefined' }
});

export const Connection = new Enum({
	Connecting: { value: 0, description: 'Connecting' },
	Open: { value: 1, description: 'Open' },
	Closing: { value: 2, description: 'Closing' },
	Closed: { value: 3, description: 'Closed' },
	Aborted: { value: 4, description: 'Aborted' }
});

export const Address = new Enum({
  Business: { value: 0, description: 'Business' },
  Home: { value: 1, description: 'Home' },
  Other: { value: 2, description: 'Other' },
  Work: { value: 3, description: 'Work' }
});

export const File = new Enum({
  MicrosoftWord: { value: 0, description: 'Microsoft Word' },
  MicrosoftExcel: { value: 1, description: 'Microsoft Excel' },
  Text: { value: 2, description: 'Text' }
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

export const MapType = new Enum({
  KeyValue: { value: 1, description: 'Key -> Value' },
  ValueKey: { value: 2, description: 'Value -> Key' },
  Undefined: { value: 0, description: 'Undefined' }
});

export const Direction = new Enum({
  Ascending: { value: 1, description: 'Ascending' },
  Descending: { value: 2, description: 'Descending' },
  Undefined: { value: 0, description: 'Undefined' }
});

export const SelectionType = new Enum({
  Single: { value: 1, description: 'Single' },
  MultiSelect: { value: 2, description: 'MultiSelect' },
  MultiChecked: { value: 3, description: 'MultiChecked' },
  None: { value: 0, description: 'None' }
});

export const Case = new Enum({
  UpperCase: { value: 1, description: 'UpperCase' },
  LowerCase: { value: 2, description: 'LowerCase' },
  CamelCase: { value: 3, description: 'CamelCase' },
  None: { value: 0, description: 'None' }
});

export const Layout = new Enum({
  Horizontal: { value: 1, description: 'Horizontal' },
  Vertical: { value: 2, description: 'Vertical' },
  None: { value: 0, description: 'None' }
});

export const GridView = new Enum({
  Card: { value: 1, description: 'Card' },
  Grid: { value: 2, description: 'Grid' },
  None: { value: 0, description: 'None' }
});

export const TableView = new Enum({
  Card: { value: 1, description: 'Card' },
  Table: { value: 2, description: 'Table' },
  None: { value: 0, description: 'None' }
});

export const WindowState = new Enum({
  None: { value: 0, description: 'None' },
  Normal: { value: 1, description: 'Normal' },
  Open: { value: 2, description: 'Open' },
  Closed: { value: 3, description: 'Closed' },
  Minimized: { value: 4, description: 'Minimized' },
  Maximized: { value: 5, description: 'Maximized' },
});

export const Dock = new Enum({
  None: { value: 0, description: 'None' },
  Top: { value: 1, description: 'Top' },
  Bottom: { value: 2, description: 'Bottom' },
  Left: { value: 3, description: 'Left' },
  Right: { value: 4, description: 'Right' }
});

export const Command = new Enum({
  Undefined: { value: 0, description: 'Undefined' },
  Activated: { value: 1, description: 'Activated' },
  Deactivated: { value: 2, description: 'Deactivated' },
  Add: { value: 3, description: 'Add' },
  Edit: { value: 4, description: 'Edit' },
  Delete: { value: 5, description: 'Delete' },
  Search: { value: 6, description: 'Search' },
  Update: { value: 7, description: 'Update' },
  Revert: { value: 8, description: 'Revert' },
  Download: { value: 9, description: 'Download' },
  View: { value: 10, description: 'View' },
  OK: { value: 11, description: 'OK' },
  Cancel: { value: 12, description: 'Cancel' },
});

export const Environment = new Enum({
  None: { value: 0, description: 'None' },
  Default: { value: 1, description: 'Default' },
  Localhost: { value: 2, description: 'Localhost' },
  Development: { value: 3, description: 'Development' },
  E2E: { value: 4, description: 'E2E' },
  Production: { value: 5, description: 'Production' },
  QA: { value: 6, description: 'QA' },
  Stage: { value: 7, description: 'Stage' },
  Test: { value: 8, description: 'Test' },
});

export const Component = new Enum({
  AppMenu: { value: 1, description: 'AppMenu' },
  Banner: { value: 2, description: 'Banner' },
  Button: { value: 3, description: 'Button' },
  Calendar: { value: 4, description: 'Calendar' },
  CalendarCard: { value: 5, description: 'CalendarCard' },
  Card: { value: 6, description: 'Card' },
  CardProfile: { value: 7, description: 'CardProfile' },
  Category: { value: 8, description: 'Category' },
  Checkbox: { value: 9, description: 'Checkbox' },
  Clock: { value: 10, description: 'Clock' },
  Command: { value: 11, description: 'Command' },
  ComponentViewer: { value: 12, description: 'ComponentViewer' },
  Currency: { value: 13, description: 'Currency' },
  Date: { value: 14, description: 'Date' },
  DatePicker: { value: 15, description: 'DatePicker' },
  DropDown: { value: 16, description: 'DropDown' },
  DropdownType: { value: 50, description: 'DropdownType' },
  Footer: { value: 17, description: 'Footer' },
  Header: { value: 18, description: 'Header' },
  Help: { value: 19, description: 'Help' },
  Hyperlink: { value: 23, description: 'Hyperlink' },
  Icon: { value: 24, description: 'Icon' },
  Image: { value: 25, description: 'Image' },
  Json: { value: 26, description: 'Json' },
  Message: { value: 27, description: 'Message' },
  NavContainer: { value: 28, description: 'NavContainer' },
  NavMenu: { value: 29, description: 'NavMenu' },
  NavSideBar: { value: 30, description: 'NavSideBar' },
  Notification: { value: 31, description: 'Notification' },
  Number: { value: 32, description: 'Number' },
  Pagination: { value: 33, description: 'Pagination' },
  Panel: { value: 34, description: 'Panel' },
  Percent: { value: 35, description: 'Percent' },
  RadioButton: { value: 36, description: 'RadioButton' },
  Search: { value: 37, description: 'Search' },
  SearchGroup: { value: 38, description: 'SearchGroup' },
  Tab: { value: 39, description: 'Tab' },
  TabContent: { value: 40, description: 'TabContent' },
  Table: { value: 41, description: 'Table' },
  TableFilter: { value: 42, description: 'TableFilter' },
  TableFooter: { value: 43, description: 'TableFooter' },
  TaskBar: { value: 44, description: 'TaskBar' },
  Text: { value: 45, description: 'Text' },
  TextArea: { value: 46, description: 'TextArea' },
  Toolbar: { value: 47, description: 'Toolbar' },
  ToolTip: { value: 48, description: 'ToolTip' },
  TypeAhead: { value: 49, description: 'TypeAhead' },
  Undefined: { value: 0, description: 'Undefined' },
});

export const SetTimoutDelay = new Enum({
  Short: { value: 10, description: 'Short' },
  Medium: { value: 100, description: 'Medium' },
  Long: { value: 250, description: 'Long' }
});

export const NotificationTimeout = new Enum({
  Standard: { value: 5000, description: 'Standard' }
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

export const Checkbox = new Enum({
  Checked: { value: 1, description: 'checked' },
  Unchecked: { value: 2, description: 'unchecked' },
  Deselect: { value: 3, description: 'deselect' }
});
