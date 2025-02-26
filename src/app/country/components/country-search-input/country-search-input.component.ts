import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

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
  placeholder = input('Buscar');
  value = output<string>();
}
