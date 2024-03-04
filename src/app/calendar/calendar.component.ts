import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { PictureService } from '../picture.service';
import { Response } from '../response';
import { Record } from '../record';
import { DoorComponent } from '../door/door.component';
import { NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from '../search/search.component';
import { Door } from '../door';
import { LocalStorageService } from '../local-storage.service';

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
  doors: Door[] = [];

  constructor(
    private pictureService: PictureService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    console.log('haetaan storagesta');
    this.doors = this.localStorageService.getDoors();
  }

  getPicture(searchTerm: string): void {
    // tilataan (subscribe) observable -> otetaan vastaan observablen välittämä tieto
    this.pictureService
      .getPicture(searchTerm)
      .subscribe((response: Response) => {
        if (response.resultcount === 24) {
          // testausta varten
          console.log(response);
          let imageRecords: Record[] = [];
          let number = 0;
          this.doors = [];
          for (let record of response.records) {
            number = number + 1;
            imageRecords.push(record);
            this.doors.push({
              status: 'closed',
              number: number.toString(),
              image: `https://www.finna.fi${record.images[0]}`,
            } as Door);
          }
          // sekoitetaan luukut
          this.doors = this.shuffleArray(this.doors);
          console.log('sijoitetaan kalenteriin');
          // tallennetaan storageen
          this.localStorageService.saveDoors(this.doors);
        } else {
          console.log('ei tarpeeksi tuloksia');
        }
      });
  }

  // luukun avaaminen
  openDoor(index: number): void {
    console.log('luukku avataan');
    // klikatun luukun statukseksi vaihtuu open
    this.doors[index].status = 'open';
    this.localStorageService.saveDoors(this.doors);
  }

  // taulukon sekoitus
  shuffleArray(anArray: any[]): any[] {
    return anArray
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  }
}
