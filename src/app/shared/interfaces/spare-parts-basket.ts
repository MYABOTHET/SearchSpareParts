import { SparePartUser } from './spare-part-user';
import { SparePartBasket } from './spare-part-basket';

export interface SparePartsBasket {
  basket_confirmed: boolean;
  basket_processed: boolean;
  spare_parts: SparePartUser[] & SparePartBasket[];
}
