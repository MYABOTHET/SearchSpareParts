import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {NavigationLink} from "./shared/component-data/interfaces/navigation-link";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  project_title: NavigationLink = {
    title: environment.project_title, href: '/'
  }
  navigation_links: NavigationLink[] = [
    { title: 'maxpower', href: '/authorization' },
    { title: 'Корзина', href: '/spare-parts-basket' },
    { title: 'О нас', href: '/about-us' }
  ]
}
