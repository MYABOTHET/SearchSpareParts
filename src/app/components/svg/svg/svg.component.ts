import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: '',
  host: {
    // Ставим логотип по центру
    class: 'flex',
  },
})
export abstract class SvgComponent {}
