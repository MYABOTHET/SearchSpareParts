import { Component, Input } from "@angular/core";
import { SparePartBasket } from "../../../../shared/interfaces/spare-part-basket";
import { SparePartUser } from "../../../../shared/interfaces/spare-part-user";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-spare-part-total-basket-card',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './spare-part-total-basket-card.component.html',
  styleUrl: './spare-part-total-basket-card.component.css'
})
export class SparePartTotalBasketCardComponent {
  @Input() spare_part!: SparePartBasket;

  findSum(spare_part: SparePartUser): string {
    return (
      this.myParseInt(spare_part.quantity_basket) *
      this.myParseInt(spare_part.price)
    ).toLocaleString();
  }

  findTotalSum(spare_part: SparePartBasket): string {
    return (
      this.myParseInt(spare_part.total_quantity_basket) *
      this.myParseInt(spare_part.price)
    ).toLocaleString();
  }

  myParseInt(value: string): number {
    return parseInt(value.replace(/\s+/g, ""), 10);
  }
}
