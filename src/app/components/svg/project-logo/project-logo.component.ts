import { Component } from '@angular/core';
import { BaseSvgComponent } from '../base-svg/base-svg.component';

@Component({
  selector: 'app-project-logo',
  standalone: true,
  imports: [],
  templateUrl: './project-logo.component.svg',
})
export class ProjectLogoComponent extends BaseSvgComponent {}
