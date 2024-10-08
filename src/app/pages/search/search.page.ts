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
import { SearchService } from '../../shared/services/search.service';
import { SparePart } from '../../shared/interfaces/spare-part';
import { BasketService } from '../../shared/services/basket.service';
import { ChangeBasket } from '../../shared/interfaces/change-basket';
import { NewQuantityBasket } from '../../shared/interfaces/new-quantity-basket';
import { HttpErrorResponse } from "@angular/common/http";

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
  is_loaded: boolean = true;
  is_error: boolean = false;
  spare_parts: SparePart[] = [];
  spare_parts_user: SparePartUser[] = [];
  spare_parts_admin: SparePartAdmin[] = [];
  is_confirm: boolean = false;
  is_screen_small: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public authService: AuthService,
    private search_service: SearchService,
    private basket_service: BasketService,
  ) {}

  ngOnInit(): void {
    this.basket_service.basket_process().subscribe({
      next: _ => {
        this.is_confirm = true;
      },
      error: _ => {
        this.is_confirm = false;
      }
    })
    let max_width: string = '(max-width: 600px)';
    if (this.authService.isAuth()) {
      switch (this.get_role()) {
        case 'user':
          max_width = '(max-width: 1000px)';
          break;
        case 'admin':
          max_width = '(max-width: 1100px)';
          break;
      }
    }
    this.breakpointObserver.observe(max_width).subscribe((result) => {
      this.is_screen_small = result.matches;
    });
    this.search_query_emitter('');
  }

  quantity_emitter(event: [string, SparePartUser]): void {
    if (this.is_confirm) {
      event[1].quantity_basket = event[0];
      return;
    }
    let change_basket: ChangeBasket = {
      quantity_basket: this.myParseInt(event[1].quantity_basket),
      search_index: event[1].search_index,
    };
    this.basket_service.change_basket(change_basket).subscribe({
      next: (value: NewQuantityBasket) => {
        event[1].sum = value.sum;
      },
      error: (error: HttpErrorResponse) => {
        event[1].quantity_basket = event[0];
      },
    });
  }

  myParseInt(value: string): number {
    return parseInt(value.replace(/\s+/g, ''), 10);
  }

  search_query_emitter(search_query: string): void {
    this.is_loaded = false;
    this.is_error = false;
    this.spare_parts = [];
    this.spare_parts_user = [];
    this.spare_parts_admin = [];
    this.search_service.search(search_query).subscribe({
      next: (spare_parts) => {
        if (this.authService.isAuth()) {
          switch (this.get_role()) {
            case 'user': {
              this.spare_parts_user = spare_parts as SparePartUser[];
              break;
            }
            case 'admin': {
              this.spare_parts_admin = spare_parts as SparePartAdmin[];
              break;
            }
            default: {
              this.spare_parts = spare_parts as SparePart[];
            }
          }
        } else {
          this.spare_parts = spare_parts as SparePart[];
        }
        this.is_loaded = true;
      },
      error: (HttpErrorResponse) => {
        this.is_loaded = true;
        this.is_error = true;
      },
    });
  }

  ngOnDestroy(): void {
    this.breakpointObserver.ngOnDestroy();
  }

  get_role(): string {
    return localStorage.getItem('role') ?? 'null';
  }
}
