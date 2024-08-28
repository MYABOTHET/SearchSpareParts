import { Component, Input } from '@angular/core';
import { SparePart } from '../../../shared/interfaces/spare-part';

@Component({
  selector: 'app-spare-parts-table',
  standalone: true,
  imports: [],
  templateUrl: './spare-parts-table.component.html',
  styleUrl: './spare-parts-table.component.css',
})
export class SparePartsTableComponent {
  @Input() spare_parts: SparePart[] = [];
  protected readonly Number = Number;
}
