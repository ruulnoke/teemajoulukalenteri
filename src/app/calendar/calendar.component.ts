import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { OverlayModule, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';

import { DoorStorageService } from '../door-storage.service';
import { PictureService } from '../picture.service';

import { DoorComponent } from '../door/door.component';
import { SearchComponent } from '../search/search.component';
import { DoorDetailsComponent } from '../door-details/door-details.component';

import { Response } from '../response';
import { Door } from '../door';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgFor,
    MatCardModule,
    DoorComponent,
    SearchComponent,
    DoorDetailsComponent,
    PortalModule,
    OverlayModule,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent implements OnInit {
  @ViewChild(CdkPortal) portal!: CdkPortal; // EXAMPLE 2

  selectedDoor?: Door;
  doors: Door[] = [];

  constructor(
    private pictureService: PictureService,
    private doorStorageService: DoorStorageService,
    private overlay: Overlay
  ) {}

  ngOnInit(): void {
    console.log('haetaan storagesta'); // testausta varten
    this.doors = this.doorStorageService.getDoors();
  }

  getPicture(searchTerm: string): void {
    // tilataan (subscribe) observable -> otetaan vastaan observablen välittämä tieto
    this.pictureService
      .getPicture(searchTerm)
      .subscribe((response: Response) => {
        if (response.resultCount >= 24) {
          console.log(response); // testausta varten
          // alustetaan muuttujat
          let number = 0;
          this.doors = [];
          // sijoitetaan luukut doors-taulukkoon
          for (let record of response.records) {
            number = number + 1;
            this.doors.push({
              status: 'closed',
              number: number.toString(),
              image: `https://www.finna.fi${record.images[0]}`,
              title: record.title,
              year: record.year,
              organization: record.buildings[0].translated,
              collection: record.buildings[1]
                ? record.buildings[1].translated
                : '',
              authorName: record.nonPresenterAuthors[0]
                ? record.nonPresenterAuthors[0].name
                : '',
              authorRole: record.nonPresenterAuthors[0]
                ? record.nonPresenterAuthors[0].role
                : '',
            } as Door);
          }
          // sekoitetaan luukut
          this.doors = this.shuffleArray(this.doors);
          console.log('sijoitetaan kalenteriin'); // testausta varten
          // tallennetaan selaimen muistiin
          this.doorStorageService.saveDoors(this.doors);
        } else {
          console.log('ei tarpeeksi tuloksia');
        }
      });
  }

  // luukun avaaminen
  openDoor(door: Door): void {
    this.selectedDoor = door;
    console.log(this.selectedDoor); //testausta varten
    if (door.status === 'closed') {
      // klikatun luukun statukseksi vaihtuu open
      console.log('luukku avataan');
      door.status = 'open';
      this.doorStorageService.saveDoors(this.doors);
    } else {
      console.log('avataan lähikuva');
      this.openModal();
    }
  }

  // taulukon sekoitus
  shuffleArray(anArray: any[]): any[] {
    return anArray
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  }

  // modaalin luominen
  openModal() {
    const config = new OverlayConfig({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerVertically()
        .centerHorizontally(),
      width: '60%',
      hasBackdrop: true,
    });
    const overlayRef = this.overlay.create(config);
    overlayRef.attach(this.portal);
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  }
}
