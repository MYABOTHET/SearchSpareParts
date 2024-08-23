import { Component, output, OutputEmitterRef } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { LoupeComponent } from '../svg/loupe/loupe.component';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgOptimizedImage, LoupeComponent],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css',
})
export class SearchFormComponent {
  search_query: FormControl<string | null> = new FormControl('');
  search_query_emitter: OutputEmitterRef<string> = output<string>();
  submit(): void {
    this.search_query_emitter.emit(this.search_query.value ?? '');
    this.search_query.reset();
  }
}
