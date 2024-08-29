import { SparePart } from './spare-part';

export interface SparePartUser extends SparePart {
  quantity_basket: string;
  sum: string;
}
