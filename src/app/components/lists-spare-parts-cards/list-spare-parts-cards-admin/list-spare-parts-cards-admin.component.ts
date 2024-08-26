import { Component } from '@angular/core';
import { SparePartsTableAdminComponent } from '../../spare-parts-tables/spare-parts-table-admin/spare-parts-table-admin.component';
import { SparePartCardUserComponent } from '../list-spare-parts-cards-user/spare-part-card-user/spare-part-card-user.component';
import { SparePartCardAdminComponent } from './spare-part-card-admin/spare-part-card-admin.component';

@Component({
  selector: 'app-list-spare-parts-cards-admin',
  standalone: true,
  imports: [SparePartCardUserComponent, SparePartCardAdminComponent],
  templateUrl: './list-spare-parts-cards-admin.component.html',
  styleUrl: './list-spare-parts-cards-admin.component.css',
})
export class ListSparePartsCardsAdminComponent extends SparePartsTableAdminComponent {}
