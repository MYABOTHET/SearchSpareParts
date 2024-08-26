import { Component } from '@angular/core';
import { SparePartsTableComponent } from '../../spare-parts-tables/spare-parts-table/spare-parts-table.component';
import { SparePartCardComponent } from './spare-part-card/spare-part-card.component';

@Component({
  selector: 'app-list-spare-parts-cards',
  standalone: true,
  imports: [SparePartCardComponent],
  templateUrl: './list-spare-parts-cards.component.html',
  styleUrl: './list-spare-parts-cards.component.css',
})
export class ListSparePartsCardsComponent extends SparePartsTableComponent {}
