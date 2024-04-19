import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-door',
  standalone: true,
  imports: [NgClass, NgIf, MatCardModule],
  templateUrl: './door.component.html',
  styleUrl: './door.component.css',
})
export class DoorComponent {
  // saa arvot ylikomponentilta (CalendarComponent)
  @Input() status!: string;
  @Input() number!: string;
  @Input() image!: string;
}
