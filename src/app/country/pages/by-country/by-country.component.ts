import { CommonModule, DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, resource, signal } from '@angular/core';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-country',
  standalone: true,
  imports: [
    CommonModule,
    CountrySearchInputComponent,
    CountryTableComponent,
  ],
  templateUrl: './by-country.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryComponent {

  query = signal('')
  countryService = inject(CountryService)

  CountryResources = resource({
    request: ()=>({query: this.query()}),
    loader: async({request})=>{
      if(!request.query) return []

      return await firstValueFrom(
        this.countryService.searchByCountry(request.query)
      )
    }
  })

}
