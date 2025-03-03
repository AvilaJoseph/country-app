import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

 }
