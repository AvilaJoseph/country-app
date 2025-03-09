import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'country-information-app',
  imports: [
    CommonModule
  ],
  templateUrl: './country-information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryInformationComponent {

  country = input.required<Country>()

  currentYear = (()=>{
    return new Date().getFullYear();
  })

 }
