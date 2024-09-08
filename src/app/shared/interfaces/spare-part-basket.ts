import { SparePartUser } from './spare-part-user';

export interface SparePartBasket extends SparePartUser {
  total_quantity_basket: string;
  total_sum: string;
}
