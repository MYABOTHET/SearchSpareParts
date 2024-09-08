import {
  Component,
  ElementRef,
  Input,
  output,
  OutputEmitterRef,
  QueryList,
  ViewChildren
} from "@angular/core";
import { SparePartUser } from "../../../shared/interfaces/spare-part-user";
import { PlusComponent } from "../../svg/plus/plus.component";
import { MinusComponent } from "../../svg/minus/minus.component";
import { FormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-spare-parts-table-user",
  standalone: true,
  imports: [PlusComponent, MinusComponent, FormsModule, NgClass],
  templateUrl: "./spare-parts-table-user.component.html",
  styleUrl: "./spare-parts-table-user.component.css"
})
export class SparePartsTableUserComponent {
  @Input() spare_parts: SparePartUser[] = [];
  quantity_emitter: OutputEmitterRef<[string, SparePartUser]> = output<[string, SparePartUser]>();
  private old_index: string | null = null;
  private old_quantity_basket: string | null = null;

  submit(spare_part: SparePartUser, old_value: string): void {
    this.quantity_emitter.emit([old_value, spare_part]);
  }

  change_quantity(spare_part: SparePartUser, index: number, old_value: string): void {
    if (
      parseInt(spare_part.quantity_basket) < 0 ||
      spare_part.quantity_basket === null
    ) {
      spare_part.quantity_basket = "0";
    } else if (
      parseInt(spare_part.quantity_basket) > parseInt(spare_part.quantity)
    ) {
      spare_part.quantity_basket = spare_part.quantity;
    }
    if (
      this.old_index === index.toString() &&
      this.old_quantity_basket === spare_part.quantity_basket
    ) {
      return;
    }
    this.old_index = index.toString();
    this.old_quantity_basket = spare_part.quantity_basket;
    spare_part.quantity_basket = spare_part.quantity_basket.toString();
    this.submit(spare_part, old_value);
  }

  minus(spare_part: SparePartUser): void {
    if (this.myParseInt(spare_part.quantity_basket) <= 0) {
      return;
    }
    let old_value: string = spare_part.quantity_basket;
    spare_part.quantity_basket = (
      this.myParseInt(spare_part.quantity_basket) - 1
    ).toString();
    this.submit(spare_part, old_value);
  }

  add(spare_part: SparePartUser): void {
    if (
      this.myParseInt(spare_part.quantity_basket) >=
      this.myParseInt(spare_part.quantity)
    ) {
      return;
    }
    let old_value: string = spare_part.quantity_basket;
    spare_part.quantity_basket = (
      this.myParseInt(spare_part.quantity_basket) + 1
    ).toString();
    this.submit(spare_part, old_value);
  }

  findSum(spare_part: SparePartUser): string {
    return (
      this.myParseInt(spare_part.quantity_basket) *
      this.myParseInt(spare_part.price)
    ).toLocaleString();
  }

  myParseInt(value: string): number {
    return parseInt(value.replace(/\s+/g, ""), 10);
  }
}
