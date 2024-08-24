import { Component } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { SparePartsTableComponent } from '../../components/spare-parts-tables/spare-parts-table/spare-parts-table.component';
import { SparePartAdmin } from '../../shared/interfaces/spare-part-admin';
import { SparePartsTableUserComponent } from '../../components/spare-parts-tables/spare-parts-table-user/spare-parts-table-user.component';
import { SparePartUser } from '../../shared/interfaces/spare-part-user';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    SearchFormComponent,
    SparePartsTableComponent,
    SparePartsTableUserComponent,
  ],
  templateUrl: './search.page.html',
  styleUrl: './search.page.css',
  host: {
    class: 'flex flex-col items-center px-4',
  },
})
export class SearchPage {
  spare_parts: SparePartAdmin[] = [
    {
      brand: 'ACCURIDE',
      article: '397310101201',
      name: 'Направляющая втулка клапана DC11/DSC12 (114/124) старый образец (VAG96314)',
      remainder: 100,
      price: 10000,
      sum: 100000,
      quantity: 10,
      supplier: 'Комтранс',
      price_two: 10000,
      price_three: 10000,
      code: '00031426',
    },
    {
      brand: 'ACCURIDE',
      article: '397310101202',
      name: 'Направляющая втулка клапана DC11/DSC12 (114/124) старый образец (VAG96314)',
      remainder: 100,
      price: 10000,
      sum: 100000,
      quantity: 10,
      supplier: 'Комтранс',
      price_two: 10000,
      price_three: 10000,
      code: '00031426',
    },
    {
      brand: 'ACCURIDE',
      article: '397310101203',
      name: 'Направляющая втулка клапана DC11/DSC12 (114/124) старый образец (VAG96314)',
      remainder: 100,
      price: 10000,
      sum: 100000,
      quantity: 10,
      supplier: 'Комтранс',
      price_two: 10000,
      price_three: 10000,
      code: '00031426',
    },
  ];
  quantity_emitter(spare_part_user: SparePartUser): void {
    console.log(spare_part_user.quantity);
  }
}
