import { Component, Input } from '@angular/core';
import { SparePartCardUserComponent } from '../../list-spare-parts-cards-user/spare-part-card-user/spare-part-card-user.component';
import { SparePartAdmin } from '../../../../shared/interfaces/spare-part-admin';
import { MinusComponent } from '../../../svg/minus/minus.component';
import { PlusComponent } from '../../../svg/plus/plus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-spare-part-card-admin',
  standalone: true,
  imports: [MinusComponent, PlusComponent, ReactiveFormsModule, FormsModule, NgClass],
  templateUrl: './spare-part-card-admin.component.html',
  styleUrl: './spare-part-card-admin.component.css',
})
export class SparePartCardAdminComponent extends SparePartCardUserComponent {
  @Input({ required: true }) declare spare_part: SparePartAdmin;
}
