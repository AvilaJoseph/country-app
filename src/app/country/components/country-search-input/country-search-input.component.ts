import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'country-search-input',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './country-search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountrySearchInputComponent {
  onSearch(value: string) {
    console.log({ value })
  }
}
