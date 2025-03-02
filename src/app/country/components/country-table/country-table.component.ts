import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-table',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './country-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryTableComponent {
  countries = input<Country[]>([])
}
