import {Simple} from '../common/simple';
import { Preference } from './preference';

/**
 * Class: GridPreferenceCollection
 */
export declare class GridPreferenceCollection extends Simple {
  findByName(name: string, field?: string): Preference;
  findById(id: string | number): Preference;
  findIndex(id: string | number): number;
  getDefault(): Preference;
  getActive(): Preference;
  hasActive(): boolean;
  hasDefault(): boolean;
  hasItems(): boolean;
  setActive(id): void;
  setDefault(id): void;
  items: Preference[];
  constructor();
  constructor(options: Object);
}
