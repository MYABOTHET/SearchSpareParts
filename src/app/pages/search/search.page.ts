import { Component } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearchFormComponent],
  templateUrl: './search.page.html',
  styleUrl: './search.page.css',
})
export class SearchPage {}
