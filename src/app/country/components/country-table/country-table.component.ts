import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-table',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './country-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryTableComponent {
  countries = input.required<Country[]>()

  errorMessage = input<string | unknown | null>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
}
