import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './country-search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountrySearchInputComponent {
  placeholder = input('Buscar');
  value = output<string>();

  inputValue = signal<string>('');
  debouceTime = input(500);

  debouceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, this.debouceTime());

    onCleanup(()=>{
      clearInterval(timeout);
    })
  });
}
