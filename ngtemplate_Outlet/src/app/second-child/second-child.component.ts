import { Component, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent {
  @Input() templateRef!: TemplateRef<any>;
  @Input() values: string[] = [];
  @Input() listLabel: string = '';
  
  constructor() {
  }
}
