import { Component, EventEmitter, Input, Output } from '@angular/core';

let counter = 0;

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent {
  @Output() btnClick = new EventEmitter<string>();
  isLoggedIn: boolean = true;

  constructor() {
    console.log(++counter);
  }

  onClick(){
    this.btnClick.emit('Deep');
  }
}
