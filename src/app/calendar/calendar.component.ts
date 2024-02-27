import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { PictureService } from '../picture.service';
import { Response } from '../response';
import { Record } from '../record';
import { DoorComponent } from '../door/door.component';
import { NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgFor,
    MatCardModule,
    DoorComponent,
    SearchComponent,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent implements OnInit {
  response!: Response;
  records: Record[] = [];

  constructor(private pictureService: PictureService) {}

  ngOnInit(): void {}

  getPicture(searchTerm: string): void {
    // tilataan (subscribe) observable -> otetaan vastaan observablen välittämä tieto
    this.pictureService.getPicture(searchTerm).subscribe((response) => {
      this.response = response;
      // testausta varten
      console.log(this.response);
    });
  }

  openDoor(index: number) {}
}
