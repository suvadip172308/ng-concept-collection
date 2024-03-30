import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string = 'Suvadip';

  onInputChange(event: any) {
    console.log(event.target.value)
  }

  onBtnClick(event: string) {
    this.userName = event;
  }
}
