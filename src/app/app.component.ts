import { Component, effect, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavigationLink } from './shared/interfaces/navigation-link';
import { environment } from '../environments/environment';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  project_title: NavigationLink = {
    title: environment.project_title,
    href: '/',
  };
  navigation_links: NavigationLink[] = [];

  constructor(private authService: AuthService) {
    effect(() => {
      this.navigation_links = [];
      if (this.authService.isAuth()) {
        this.navigation_links.push(
          {
            title: localStorage.getItem('name') ?? 'Пользователь',
            href: '/authorization',
          },
          {
            title: 'Корзина',
            href: '/spare-parts-basket',
          },
        );
      } else {
        this.navigation_links.push({
          title: 'Авторизация',
          href: '/authorization',
        });
      }
      this.navigation_links.push({ title: 'О нас', href: '/about-us' });
    });
  }
}
