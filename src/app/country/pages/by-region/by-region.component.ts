import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';

@Component({
  selector: 'app-by-region',
  standalone: true,
  imports: [
    CommonModule,
    // CountryTableComponent
  ],
  templateUrl: './by-region.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionComponent { }
