import { Component } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';

@Component({
  selector: 'app-project-logo',
  standalone: true,
  imports: [],
  templateUrl: './project-logo.component.svg',
})
export class ProjectLogoComponent extends SvgComponent {}
