import {Simple} from '../common/simple';
/**
 * Class: Card
 */
export declare class Card extends Simple {
  canActivate: boolean;
  canCheck: boolean;
  canDelete: boolean;
  checked: boolean;
  style: object;
  label: string;
  data: any;
  onClick: (event) => void;
  constructor();
  constructor(options: Object);
}
