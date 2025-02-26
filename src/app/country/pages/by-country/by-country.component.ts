import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './by-country.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryComponent { }
