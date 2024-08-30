import {
  Component,
  ElementRef,
  Input,
  output,
  OutputEmitterRef,
  ViewChild,
} from '@angular/core';
import { SparePartUser } from '../../../../shared/interfaces/spare-part-user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MinusComponent } from '../../../svg/minus/minus.component';
import { PlusComponent } from '../../../svg/plus/plus.component';

@Component({
  selector: 'app-spare-part-card-user',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MinusComponent, PlusComponent],
  templateUrl: './spare-part-card-user.component.html',
  styleUrl: './spare-part-card-user.component.css',
})
export class SparePartCardUserComponent {
  @ViewChild('quantity_input') quantity_input!: ElementRef<HTMLInputElement>;
  @Input({ required: true })
  spare_part!: SparePartUser;
  add_emitter: OutputEmitterRef<SparePartUser> = output<SparePartUser>();
  minus_emitter: OutputEmitterRef<SparePartUser> = output<SparePartUser>();
  change_quantity_emitter: OutputEmitterRef<SparePartUser> =
    output<SparePartUser>();

  change_quantity(spare_part: SparePartUser): void {
    this.change_quantity_emitter.emit(spare_part);
    this.quantity_input.nativeElement.value =
      spare_part.quantity_basket.toString();
  }

  add(spare_part: SparePartUser): void {
    this.add_emitter.emit(spare_part);
  }

  minus(spare_part: SparePartUser): void {
    this.minus_emitter.emit(spare_part);
  }

  findSum(spare_part: SparePartUser): string {
    return (
      parseInt(String(spare_part.quantity_basket).replace(/ /g, '')) *
      parseInt(String(spare_part.price).replace(/ /g, ''))
    ).toLocaleString();
  }

  protected readonly parseInt = parseInt;
}
