import { Component } from '@angular/core';
import { SparePartsTableUserComponent } from '../../spare-parts-tables/spare-parts-table-user/spare-parts-table-user.component';
import { SparePartCardUserComponent } from './spare-part-card-user/spare-part-card-user.component';
import { SparePartCardAdminComponent } from '../list-spare-parts-cards-admin/spare-part-card-admin/spare-part-card-admin.component';

@Component({
  selector: 'app-list-spare-parts-cards-user',
  standalone: true,
  imports: [SparePartCardUserComponent, SparePartCardAdminComponent],
  templateUrl: './list-spare-parts-cards-user.component.html',
  styleUrl: './list-spare-parts-cards-user.component.css',
})
export class ListSparePartsCardsUserComponent extends SparePartsTableUserComponent {}
