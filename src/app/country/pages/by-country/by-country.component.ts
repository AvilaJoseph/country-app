import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';

@Component({
  selector: 'app-by-country',
  standalone: true,
  imports: [
    CommonModule,
    CountrySearchInputComponent,
  ],
  templateUrl: './by-country.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryComponent { }
