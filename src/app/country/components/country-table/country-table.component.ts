import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'country-table',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './country-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryTableComponent { }
