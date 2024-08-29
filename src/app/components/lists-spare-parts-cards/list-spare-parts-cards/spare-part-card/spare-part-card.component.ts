import { Component, Input } from '@angular/core';
import { SparePart } from '../../../../shared/interfaces/spare-part';

@Component({
  selector: 'app-spare-part-card',
  standalone: true,
  imports: [],
  templateUrl: './spare-part-card.component.html',
  styleUrl: './spare-part-card.component.css',
})
export class SparePartCardComponent {
  @Input({ required: true }) spare_part!: SparePart;
}
