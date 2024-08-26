import { Component } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';

@Component({
  selector: 'app-spinner-load',
  standalone: true,
  imports: [],
  templateUrl: './spinner-load.component.svg',
})
export class SpinnerLoadComponent extends SvgComponent {}
