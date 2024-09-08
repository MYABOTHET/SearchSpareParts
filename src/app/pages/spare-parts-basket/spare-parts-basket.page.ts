import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasketService } from '../../shared/services/basket.service';
import { SparePartUser } from '../../shared/interfaces/spare-part-user';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeBasket } from '../../shared/interfaces/change-basket';
import { NewQuantityBasket } from '../../shared/interfaces/new-quantity-basket';
import { ListSparePartsCardsUserComponent } from '../../components/lists-spare-parts-cards/list-spare-parts-cards-user/list-spare-parts-cards-user.component';
import { SparePartsTableUserComponent } from '../../components/spare-parts-tables/spare-parts-table-user/spare-parts-table-user.component';
import { SpinnerLoadComponent } from '../../components/svg/spinner-load/spinner-load.component';
import { SparePartsBasket } from '../../shared/interfaces/spare-parts-basket';
import { HttpErrorResponse } from "@angular/common/http";
import {
  SparePartsTotalBasketComponent
} from "../../components/spare-parts-tables/spare-parts-total-basket/spare-parts-total-basket.component";
import {
  ListSparePartsTotalBasketComponent
} from "../../components/lists-spare-parts-cards/list-spare-parts-total-basket/list-spare-parts-total-basket.component";

@Component({
  selector: 'app-spare-parts-basket',
  standalone: true,
  imports: [
    ListSparePartsCardsUserComponent,
    SparePartsTableUserComponent,
    SpinnerLoadComponent,
    SparePartsTotalBasketComponent,
    ListSparePartsTotalBasketComponent
  ],
  templateUrl: './spare-parts-basket.page.html',
  styleUrl: './spare-parts-basket.page.css',
  host: {
    class: 'flex flex-col items-center px-4',
  },
})
export class SparePartsBasketPage implements OnInit, OnDestroy {
  is_loaded: boolean = false;
  is_error: boolean = false;
  spare_parts_basket!: SparePartsBasket;
  is_screen_small: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public basket_service: BasketService,
  ) {}

  ngOnDestroy(): void {
    this.breakpointObserver.ngOnDestroy();
  }

  ngOnInit(): void {
    let max_width: string = '(max-width: 1100px)';
    this.breakpointObserver.observe(max_width).subscribe((result) => {
      this.is_screen_small = result.matches;
    });
    this.basket_service.get_basket().subscribe({
      next: (spare_parts_basket) => {
        this.spare_parts_basket = spare_parts_basket;
        this.is_loaded = true;
      },
      error: (HttpErrorResponse) => {
        this.is_loaded = true;
        this.is_error = true;
      },
    });
  }

  quantity_emitter(event: [string, SparePartUser]): void {
    if (this.spare_parts_basket.basket_processed) {
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

  confirm(): void {
    this.basket_service.confirm_basket().subscribe({
      next: _ => {
        this.spare_parts_basket.basket_processed = true;
      }
    })
  }
}
