import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Inicetextarea } from './nicetextarea.model';

@Component({
  selector: 'nice-textarea',
  template: `
    <div class="nice-field-wrapper">
      <div class="nice-field-container">
        <textarea class="nice-textarea" [id]="id" [ngClass]="classes" (input)="OnInput($event)"
              [required]="required" [disabled]="disabled" [readonly]="readonly"></textarea>
        <span class="nice-span-container" aria-hidden="true">
          <span class="nice-span-ripple"></span>
          <span class="nice-span" [innerHTML]="highlight()"></span>
        </span>
        <div class="nice-label-wrapper">
          <label [ngClass]="value.length ? 'nice-label-can-float': ''" [for]="id">{{label}}<sup *ngIf="required">*</sup></label>
        </div>
      </div>
    </div>
  `,
  styleUrls: [ "nicetextarea.scss"  ]
})
export class NicetextareaComponent implements OnInit, Inicetextarea {

  @Input() id:  string = "nicetextarea_id";
  @Input() label: string = "Label";
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
    let el = $event.target;
    this.value = el.value;
    //setTimeout(function(){
      el.style.cssText = 'height:auto; padding:0';
      // for box-sizing other than "content-box" use:
      // el.style.cssText = '-moz-box-sizing:content-box';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    //},0);    
    this.notify.emit(this.value);
  }

}
