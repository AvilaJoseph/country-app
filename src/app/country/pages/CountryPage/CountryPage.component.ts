import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'country-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './CountryPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPageComponent {

  CountryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryServices = inject(CountryService);
  countryResources = rxResource({
    request: () => ({ code: this.CountryCode }),
    loader: ({ request }) =>{
      return this.countryServices.searchCountrybyAlphaCode(request.code)
    }
  })

 }
