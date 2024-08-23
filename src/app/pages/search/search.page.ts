import { Component } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { SparePartsTableComponent } from '../../components/tables/spare-parts-table/spare-parts-table.component';
import { SparePart } from '../../shared/interfaces/spare-part';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearchFormComponent, SparePartsTableComponent],
  templateUrl: './search.page.html',
  styleUrl: './search.page.css',
  host: {
    class: 'flex flex-col items-center',
  },
})
export class SearchPage {
  spare_parts: SparePart[] = [
    {
      brand: 'Бренд',
      article: 'Артикул',
      name: 'Наименование',
      remainder: 0,
      price: 0,
    },
    {
      brand: 'Бренд',
      article: 'Артикул',
      name: 'Наименование',
      remainder: 0,
      price: 0,
    },
    {
      brand: 'Бренд',
      article: 'Артикул',
      name: 'Наименование',
      remainder: 0,
      price: 0,
    },
    {
      brand: 'Бренд',
      article: 'Артикул',
      name: 'Наименование',
      remainder: 0,
      price: 0,
    },
    {
      brand: 'Бренд',
      article: 'Артикул',
      name: 'Наименование',
      remainder: 0,
      price: 0,
    },
  ];
}
