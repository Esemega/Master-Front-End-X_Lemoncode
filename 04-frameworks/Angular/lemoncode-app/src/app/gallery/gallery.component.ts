import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image-service.service';
import { ImageEntity } from '../model/ImageEntity';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  imageData: Array<ImageEntity> = [];

  selectedImageIndex: number = 0;
  selectedImageSrc: string;

  size: number = 500;

  delay: number = 2000;
  intervalID: number | undefined;
  isPlaying: boolean = false;

  start: number = 0;
  end: number = this.start + 3;
  groupSize: number = 3;

  constructor(private imageService: ImageService) {
    this.selectedImageSrc = '../../assets/img/001.jpg';
  }

  ngOnInit(): void {
    this.imageService.getImagesData().subscribe((data) => {
      this.imageData = data;
      this.setSelectedImageSrc(this.selectedImageIndex);
    });
  }

  setSelectedImageSrc(id: number) {
    this.selectedImageIndex = id;
    this.selectedImageSrc = `../../assets/img/${this.imageData[id].src}`;
  }

  next() {
    this.selectedImageIndex++;
    this.setSelectedImageSrc(this.selectedImageIndex);
  }

  previous() {
    this.selectedImageIndex--;
    this.setSelectedImageSrc(this.selectedImageIndex);
  }

  getBigger() {
    this.size = this.size + 25;
  }

  getSmaller() {
    this.size = this.size - 25;
  }

  play() {
    this.intervalID = window.setInterval(() => {
      if (this.selectedImageIndex === this.imageData.length - 1) {
        this.selectedImageIndex = -1;
      }
      this.setSelectedImageSrc(++this.selectedImageIndex);
    }, this.delay);

    this.isPlaying = true;
  }

  stop() {
    window.clearInterval(this.intervalID);
    this.isPlaying = false;
  }

  nextGroup() {
    this.start += this.groupSize;
    this.end += this.groupSize;
  }

  previousGroup() {
    this.start -= this.groupSize;
    this.end -= this.groupSize;
  }
}
