import { Component, Input } from '@angular/core';
import { NgIf, TitleCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { Door } from '../door';

@Component({
  selector: 'app-door-details',
  standalone: true,
  imports: [NgIf, TitleCasePipe, MatCardModule],
  templateUrl: './door-details.component.html',
  styleUrl: './door-details.component.css',
})
export class DoorDetailsComponent {
  // door-olion tiedot saadaan ylikomponentilta (CalendarComponent)
  @Input() door?: Door;
}
