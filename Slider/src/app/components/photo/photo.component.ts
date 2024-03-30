import { AfterContentChecked, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from 'src/app/share/model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnChanges, AfterContentChecked {
  selectedImg!: Photo;
  isFetched = false;

  ngAfterContentChecked(): void {
    console.log('In Photo After Content Checked');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('In Photo On changes');
  }

  toggleFetchData() {
    this.isFetched = !this.isFetched;
  }
}
