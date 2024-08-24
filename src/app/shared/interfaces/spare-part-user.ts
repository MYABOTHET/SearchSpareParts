import { SparePart } from './spare-part';

export interface SparePartUser extends SparePart {
  quantity_basket: number;
  sum: number;
}
