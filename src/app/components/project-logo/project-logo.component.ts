import { Component } from '@angular/core';

@Component({
  selector: 'app-project-logo',
  standalone: true,
  imports: [],
  templateUrl: './project-logo.component.svg',
  host: {
    // Ставим логотип по центру
    class: 'flex',
  }
})
export class ProjectLogoComponent {}
