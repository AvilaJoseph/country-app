import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'country-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './CountryPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPageComponent { }
