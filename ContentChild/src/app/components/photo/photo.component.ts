import { Component } from '@angular/core';
import { Photo } from 'src/app/share/model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  selectedImg!: Photo;
}
