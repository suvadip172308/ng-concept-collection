import { AfterContentChecked, Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { Photo } from '../../share/model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterContentChecked {
  @Input() photos: Photo[] = [];

  slectedPhotoIndex = 0;

  @ContentChild(PhotoComponent) photoPreviewComp!: PhotoComponent;


  ngAfterContentChecked(): void {
    if(!this.photoPreviewComp.selectedImg) {
      this.changeSlide(0) ;
    }
  }

  changeSlide(inc: number) {
    const nextIndex = ( this.slectedPhotoIndex + inc ) % this.photos.length;
    this.slectedPhotoIndex = nextIndex < 0 ? this.photos.length - 1 : nextIndex;

    this.photoPreviewComp.selectedImg = this.photos[this.slectedPhotoIndex];
  }
}
