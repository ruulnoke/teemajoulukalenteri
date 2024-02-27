import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-door',
  standalone: true,
  imports: [NgClass],
  templateUrl: './door.component.html',
  styleUrl: './door.component.css',
})
export class DoorComponent {
  @Input() number!: string;
  @Input() status!: string;
  @Input() image!: string;
}
