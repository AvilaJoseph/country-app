import { Component } from '@angular/core';
import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-capital-page',
  imports: [
    CountrySearchInputComponent,
    CountryTableComponent
  ],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent { 

}
