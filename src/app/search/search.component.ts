import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor() {}

  // output-dekoraattori: alikomponentti pystyy lähettämään tietoa ylikomponentille
  // luodaan uusi event emitter (tapahtumalähettäjä)
  @Output() searchEventEmitter = new EventEmitter<string>();

  submitSearch(searchValue: string) {
    // lähetetään tapahtuma
    this.searchEventEmitter.emit(searchValue);
  }
}
