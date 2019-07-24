import {Simple} from './simple';
import * as Constant from "../constant";
/**
 * Class: Message
 */
export declare class Message extends Simple {
  event: Constant.EventType;
  context: Constant.ContextType;
  content: any;
  action: any;
  read: boolean;
  status: any;
  label: string;
  type: any;
  constructor();
  constructor(options: Object);
}
