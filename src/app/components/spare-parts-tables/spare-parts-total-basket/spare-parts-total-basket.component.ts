import { Component, Input } from "@angular/core";
import { SparePartsTableComponent } from "../spare-parts-table/spare-parts-table.component";
import { SparePartBasket } from "../../../shared/interfaces/spare-part-basket";
import { FormsModule } from "@angular/forms";
import { SparePartUser } from "../../../shared/interfaces/spare-part-user";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-spare-parts-total-basket',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './spare-parts-total-basket.component.html',
  styleUrl: './spare-parts-total-basket.component.css'
})
export class SparePartsTotalBasketComponent extends SparePartsTableComponent {
  @Input() override spare_parts: SparePartBasket[] = [];

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
