import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { SparePartsTableComponent } from '../../components/spare-parts-tables/spare-parts-table/spare-parts-table.component';
import { SparePartAdmin } from '../../shared/interfaces/spare-part-admin';
import { SparePartsTableUserComponent } from '../../components/spare-parts-tables/spare-parts-table-user/spare-parts-table-user.component';
import { SparePartUser } from '../../shared/interfaces/spare-part-user';
import { SparePartsTableAdminComponent } from '../../components/spare-parts-tables/spare-parts-table-admin/spare-parts-table-admin.component';
import { SparePartCardComponent } from '../../components/lists-spare-parts-cards/list-spare-parts-cards/spare-part-card/spare-part-card.component';
import { ListSparePartsCardsComponent } from '../../components/lists-spare-parts-cards/list-spare-parts-cards/list-spare-parts-cards.component';
import { ListSparePartsCardsUserComponent } from '../../components/lists-spare-parts-cards/list-spare-parts-cards-user/list-spare-parts-cards-user.component';
import { ListSparePartsCardsAdminComponent } from '../../components/lists-spare-parts-cards/list-spare-parts-cards-admin/list-spare-parts-cards-admin.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SpinnerLoadComponent } from '../../components/svg/spinner-load/spinner-load.component';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    SearchFormComponent,
    SparePartsTableComponent,
    SparePartsTableUserComponent,
    SparePartsTableAdminComponent,
    SparePartCardComponent,
    ListSparePartsCardsComponent,
    ListSparePartsCardsUserComponent,
    ListSparePartsCardsAdminComponent,
    SpinnerLoadComponent,
  ],
  templateUrl: './search.page.html',
  styleUrl: './search.page.css',
  host: {
    class: 'flex flex-col items-center px-4',
  },
})
export class SearchPage implements OnInit, OnDestroy {
  is_loaded: boolean = false;
  is_error: boolean = false;
  spare_parts: SparePartAdmin[] = [];
  is_screen_small: boolean = false;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public authService: AuthService,
  ) {
    for (let i = 0; i < 13; i++) {
      this.spare_parts.push({
        brand: 'ACCURIDE',
        article: `39731010120${i}`,
        name: 'Направляющая втулка клапана DC11/DSC12 (114/124) старый образец (VAG96314)',
        quantity: 10,
        price: 10000,
        sum: 10000,
        quantity_basket: 10,
        supplier: 'Комтранс',
        price_two: 10000,
        price_three: 10000,
        code: '00031426',
        search_index: Math.floor(Math.random() * 1000000).toString(),
      });
    }
  }

  ngOnInit(): void {
    let max_width: string = '(max-width: 600px)';
    if (this.authService.isAuth()) {
      switch (this.get_role()) {
        case 'user': max_width = '(max-width: 1000px)'; break;
        case 'admin': max_width = '(max-width: 1100px)'; break;
      }
    }
    this.breakpointObserver.observe(max_width).subscribe((result) => {
      this.is_screen_small = result.matches;
    });
    this.is_loaded = true;
  }

  quantity_emitter(spare_part: SparePartUser): void {
    console.log(spare_part.search_index);
  }

  search_query_emitter(search_query: string): void {

  }

  ngOnDestroy(): void {
    this.breakpointObserver.ngOnDestroy();
  }

  get_role(): string {
    return localStorage.getItem('role') ?? 'null';
  }
}
