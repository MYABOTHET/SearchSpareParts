import { Component } from "@angular/core";
import {
  SparePartTotalBasketCardComponent
} from "./spare-part-total-basket-card/spare-part-total-basket-card.component";
import {
  SparePartsTotalBasketComponent
} from "../../spare-parts-tables/spare-parts-total-basket/spare-parts-total-basket.component";

@Component({
  selector: 'app-list-spare-parts-total-basket',
  standalone: true,
  imports: [
    SparePartTotalBasketCardComponent
  ],
  templateUrl: './list-spare-parts-total-basket.component.html',
  styleUrl: './list-spare-parts-total-basket.component.css'
})
export class ListSparePartsTotalBasketComponent extends SparePartsTotalBasketComponent {

}
