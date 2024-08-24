import { Component, Input } from '@angular/core';
import { SparePartsTableUserComponent } from '../spare-parts-table-user/spare-parts-table-user.component';
import { FormsModule } from '@angular/forms';
import { MinusComponent } from '../../svg/minus/minus.component';
import { PlusComponent } from '../../svg/plus/plus.component';
import { SparePartAdmin } from '../../../shared/interfaces/spare-part-admin';

@Component({
  selector: 'app-spare-parts-table-admin',
  standalone: true,
  imports: [FormsModule, MinusComponent, PlusComponent],
  templateUrl: './spare-parts-table-admin.component.html',
  styleUrl: './spare-parts-table-admin.component.css',
})
export class SparePartsTableAdminComponent extends SparePartsTableUserComponent {
  @Input() override spare_parts: SparePartAdmin[] = [];
}
