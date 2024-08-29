import { SparePartUser } from './spare-part-user';

export interface SparePartAdmin extends SparePartUser {
  supplier: string;
  code: string;
  price_two: string;
  price_three: string;
}
