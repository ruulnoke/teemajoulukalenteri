import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Door } from '../door';

@Component({
  selector: 'app-door-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './door-details.component.html',
  styleUrl: './door-details.component.css',
})
export class DoorDetailsComponent {
  @Input() door?: Door;
}
