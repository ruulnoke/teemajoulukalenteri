import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-door',
  standalone: true,
  imports: [NgClass, MatCardModule],
  templateUrl: './door.component.html',
  styleUrl: './door.component.css',
})
export class DoorComponent {
  @Input() status!: string;
  @Input() number!: string;
  @Input() image!: string;
}
