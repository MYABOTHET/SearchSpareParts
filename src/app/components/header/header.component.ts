import { Component, Input } from '@angular/core';
import { ProjectLogoComponent } from '../svg/project-logo/project-logo.component';
import { RouterLink } from '@angular/router';
import { NavigationLink } from '../../shared/interfaces/navigation-link';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProjectLogoComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input({ required: true }) project_title!: NavigationLink;
  @Input({ required: true }) navigation_links!: NavigationLink[];
}
