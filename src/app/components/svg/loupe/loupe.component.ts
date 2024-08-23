import { Component } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';

@Component({
  selector: 'app-loupe',
  standalone: true,
  imports: [],
  templateUrl: './loupe.component.svg',
})
export class LoupeComponent extends SvgComponent {}
