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
import { SparePartsTableComponent } from '../spare-parts-table/spare-parts-table.component';

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

  submit(spare_part: SparePartUser): void {
    this.quantity_emitter.emit(spare_part);
  }

  change_quantity(spare_part: SparePartUser, index: number): void {
    let quantity_input: HTMLInputElement | undefined =
      this.quantity_inputs.get(index)?.nativeElement;
    if (spare_part.quantity_basket < 0 || spare_part.quantity_basket === null) {
      spare_part.quantity_basket = 0;
    } else if (spare_part.quantity_basket > spare_part.quantity) {
      spare_part.quantity_basket = spare_part.quantity;
    }
    if (quantity_input) {
      quantity_input.value = spare_part.quantity_basket.toString();
    }
    if (
      this.old_index === index &&
      this.old_quantity_basket === spare_part.quantity_basket
    ) {
      return;
    }
    this.old_index = index;
    this.old_quantity_basket = spare_part.quantity_basket;
    this.submit(spare_part);
  }

  minus(spare_part: SparePartUser): void {
    if (spare_part.quantity_basket <= 0) {
      return;
    }
    --spare_part.quantity_basket;
    this.submit(spare_part);
  }

  add(spare_part: SparePartUser): void {
    if (spare_part.quantity_basket >= spare_part.quantity) {
      return;
    }
    ++spare_part.quantity_basket;
    this.submit(spare_part);
  }
}
