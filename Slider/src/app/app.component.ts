import { Component, OnInit } from '@angular/core';
import { PHOTOS } from './share/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly photos = PHOTOS;
}

