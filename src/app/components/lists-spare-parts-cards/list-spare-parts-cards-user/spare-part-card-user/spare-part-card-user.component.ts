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
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-spare-part-card-user',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MinusComponent, PlusComponent, NgClass],
  templateUrl: './spare-part-card-user.component.html',
  styleUrl: './spare-part-card-user.component.css',
})
export class SparePartCardUserComponent {
  @Input({ required: true })
  spare_part!: SparePartUser;
  add_emitter: OutputEmitterRef<SparePartUser> = output<SparePartUser>();
  minus_emitter: OutputEmitterRef<SparePartUser> = output<SparePartUser>();
  change_quantity_emitter: OutputEmitterRef<SparePartUser> =
    output<SparePartUser>();

  change_quantity(spare_part: SparePartUser): void {
    this.change_quantity_emitter.emit(spare_part);
  }

  add(spare_part: SparePartUser): void {
    this.add_emitter.emit(spare_part);
  }

  minus(spare_part: SparePartUser): void {
    this.minus_emitter.emit(spare_part);
  }

  findSum(spare_part: SparePartUser): string {
    return (
      this.myParseInt(spare_part.quantity_basket) *
      this.myParseInt(spare_part.price)
    ).toLocaleString();
  }
  myParseInt(value: string): number {
    return parseInt(value.replace(/\s+/g, ''), 10);
  }
}
