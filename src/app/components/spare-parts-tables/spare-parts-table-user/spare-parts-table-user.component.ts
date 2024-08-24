import {
  Component,
  ElementRef,
  Input,
  output,
  OutputEmitterRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { SparePartUser } from '../../../shared/interfaces/spare-part-user';
import { PlusComponent } from '../../svg/plus/plus.component';
import { MinusComponent } from '../../svg/minus/minus.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-spare-parts-table-user',
  standalone: true,
  imports: [PlusComponent, MinusComponent, FormsModule],
  templateUrl: './spare-parts-table-user.component.html',
  styleUrl: './spare-parts-table-user.component.css',
})
export class SparePartsTableUserComponent {
  @ViewChildren('quantity_input') quantity_inputs!: QueryList<
    ElementRef<HTMLInputElement>
  >;
  @Input() spare_parts: SparePartUser[] = [];
  quantity_emitter: OutputEmitterRef<SparePartUser> = output<SparePartUser>();
  private old_index: number | null = null;
  private old_quantity_basket: number | null = null;

  find_sum(quantity: number, price: number): number {
    return quantity * price;
  }

  submit(spare_part_user: SparePartUser): void {
    this.quantity_emitter.emit(spare_part_user);
  }

  change_quantity(spare_part_user: SparePartUser, index: number): void {
    let quantity_input: HTMLInputElement =
      this.quantity_inputs.get(index)!.nativeElement;
    if (
      spare_part_user.quantity_basket < 0 ||
      spare_part_user.quantity_basket === null
    ) {
      spare_part_user.quantity_basket = 0;
      quantity_input.value = spare_part_user.quantity_basket.toString();
    } else if (spare_part_user.quantity_basket > spare_part_user.quantity) {
      spare_part_user.quantity_basket = spare_part_user.quantity;
      quantity_input.value = spare_part_user.quantity_basket.toString();
    }
    quantity_input.value = spare_part_user.quantity_basket.toString();
    if (
      this.old_index === index &&
      this.old_quantity_basket === spare_part_user.quantity_basket
    ) {
      return;
    }
    this.old_index = index;
    this.old_quantity_basket = spare_part_user.quantity_basket;
    this.submit(spare_part_user);
  }

  minus(spare_part_user: SparePartUser): void {
    if (spare_part_user.quantity_basket <= 0) {
      return;
    }
    --spare_part_user.quantity_basket;
    this.submit(spare_part_user);
  }

  add(spare_part_user: SparePartUser): void {
    if (spare_part_user.quantity_basket >= spare_part_user.quantity) {
      return;
    }
    ++spare_part_user.quantity_basket;
    this.submit(spare_part_user);
  }
}
