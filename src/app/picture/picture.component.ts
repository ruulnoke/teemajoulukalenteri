import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { PictureService } from '../picture.service';
// import { Picture } from '../picture';
import { Response } from '../response';
import { Record } from '../record';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [NgOptimizedImage, NgIf, NgFor],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css',
})
export class PictureComponent implements OnInit {
  // picture!: Picture;
  response!: Response;
  records: Record[] = [];
  imageUrls: string[] = [];

  constructor(private pictureService: PictureService) {}

  ngOnInit(): void {
    this.getPicture();
  }

  getPicture(): void {
    // tilataan (subscribe) observable -> otetaan vastaan observablen välittämä tieto
    this.pictureService.getPicture().subscribe((response) => {
      this.response = response;
      // testausta varten
      console.log(this.response);
    });
  }
}
