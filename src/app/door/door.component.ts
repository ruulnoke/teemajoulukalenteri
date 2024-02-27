import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Door } from '../door';

@Component({
  selector: 'app-door',
  standalone: true,
  imports: [NgClass],
  templateUrl: './door.component.html',
  styleUrl: './door.component.css',
})
export class DoorComponent {
  @Input() status!: string;
  @Input() number!: string;
  @Input() image!: string;
}
