import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';

@Component({
  selector: 'country-information-app',
  imports: [],
  templateUrl: './country-information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryInformationComponent {

  country = input.required<Country>()

 }
