import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Iniceinput } from './niceinput.modal'

@Component({
  selector: 'niceinput',
  template: `
  <div class="nice-field-wrapper">
    <div class="nice-field-container">
      <input type="text" class="nice-input" [value]="niceInputData.value" (input)="niceInputData.value = $event.target.value"
       [id]="niceInputData.id" [ngClass]="niceInputData.classes" (change)="OnChange()" />
      <div class="nice-span-container" aria-hidden="true">
        <span class="nice-span" [innerHTML]="highlight()"></span>
      </div>
      <div class="nice-label-wrapper">
        <label [ngClass]="niceInputData.value.length ? 'nice-form-field-can-float': ''" [for]="niceInputData.id">{{niceInputData.label}}</label>
      </div>
    </div>
  </div>
  `,
  styleUrls: [ "niceinput.css" ]
})

export class NiceinputComponent implements OnInit {

  @Input() niceInputData:Iniceinput;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 
  }

  ngOnInit() {
  }

  highlight() {    
    return this.niceInputData.value.replace(/ /g, '\u00a0'); //replace empty spaces with &nbsp;
  }

  //on input change
  OnChange() {
    this.notify.emit("changing data= "+ this.niceInputData.value);
  }
  
}
