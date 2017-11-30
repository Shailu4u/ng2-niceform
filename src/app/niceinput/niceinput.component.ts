import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Iniceinput } from './niceinput.model';

@Component({
  selector: 'nice-input',
  template: `
  <div class="nice-field-wrapper">
    <div class="nice-field-container">
      <input [type]="type" class="nice-input" [value]="value" (input)="OnInput($event)" [id]="id" [ngClass]="classes"
              [required]="required" [disabled]="disabled" [readonly]="readonly"/>
      <div class="nice-span-container" aria-hidden="true">
        <span class="nice-span-ripple"></span>
        <span class="nice-span" [innerHTML]="highlight()"></span>
      </div>
      <div class="nice-label-wrapper">
        <label [ngClass]="value.length ? 'nice-label-can-float': ''" [for]="id">{{label}}<sup *ngIf="required">*</sup></label>
      </div>
    </div>
  </div>
  `,
  styleUrls: [ "niceinput.scss" ]
})

export class NiceinputComponent implements OnInit, Iniceinput {

  @Input() type: string = "text";
  @Input() id:  string = "niceinput_id";
  @Input() label: string;
  @Input() value: any = "";
  @Input() classes: string;
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;  

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 
  }

  ngOnInit() {
  }

  highlight() {    
    return this.value.replace(/ /g, '\u00a0'); //replace empty spaces with &nbsp;
  }

  //on input change
  OnInput($event) {
    this.value = $event.target.value;
    this.notify.emit(this.value);
  }
  
}
