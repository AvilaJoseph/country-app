import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-country.interface';
import { CountryMapper } from '../../mappers/country.mapper';
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-capital-page',
  imports: [
    CountrySearchInputComponent,
    CountryTableComponent
  ],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  query = signal('')
  countryService = inject(CountryService)

  countryResources = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([])
      return  this.countryService.searchByCapital(request.query)
    }
  })
  // countryResources = resource({
  //   request: () => ({query: this.query()}),
  //   loader: async({ request })=>{
  //     if(!request.query) return []

  //     return await firstValueFrom(
  //       this.countryService.searchByCapital(request.query)
  //     )

  //   }
  // })

  // isLoading = signal(false)
  // isError = signal<string | null>(null)
  // countries = signal<Country[]>([])

  // onSearch(query: string) {

  //   if (this.isLoading()) return

  //   this.isLoading.set(true)
  //   this.isError.set(null)

  //   this.countryService.searchByCapital(query).subscribe({
  //     next:(countries)=>{
  //       this.isLoading.set(false)
  //       this.countries.set(countries)
  //     },
  //     error:(error)=>{
  //       console.log(error)
  //       this.isLoading.set(false)
  //       this.countries.set([])
  //       this.isError.set(`No se encontraron resultados con esta capital: ${query}`)
  //     }
  //   })
  // }
}
