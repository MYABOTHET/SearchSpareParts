import { Routes } from '@angular/router';
import {SearchPage} from "./pages/search/search.page";
import {SparePartsBasketPage} from "./pages/spare-parts-basket/spare-parts-basket.page";
import {AboutUsPage} from "./pages/about-us/about-us.page";
import {AuthorizationPage} from "./pages/authorization/authorization.page";

export const routes: Routes = [
  { path: '', component: SearchPage, title: 'Поисковик' },
  { path: 'spare-parts-basket', component: SparePartsBasketPage, title: 'Корзина' },
  { path: 'about-us', component: AboutUsPage, title: 'О нас' },
  { path: 'authorization', component: AuthorizationPage, title: 'Авторизация' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
