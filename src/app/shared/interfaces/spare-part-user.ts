import { SparePart } from './spare-part';

export interface SparePartUser extends SparePart {
  quantity: number;
  sum: number;
}
