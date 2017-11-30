import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Inicecheckbox } from './nicecheckbox.model';

@Component({
  selector: 'nice-checkbox',
  template: `
  <label class="nice-checkbox-layout" [for]="id" [ngClass]="{'nice-checkbox-checked': checked, 'nice-checkbox-unchecked': !checked, 'nice-checkbox-disabled' : disabled, 'nice-checkbox-readonly': readonly }">
    <div class="nice-checkbox-inner-container">
      <input class="nice-checkbox-input cdk-visually-hidden" type="checkbox" [id]="id" tabindex="0" [checked]="checked" (change)="checked = !checked"
             [attr.aria-checked]="checked" [required]="required" [disabled]="disabled" [readonly]="readonly">
      <div class="nice-checkbox-ripple nice-ripple" matripple=""></div>
      <div class="nice-checkbox-frame"></div>
      <div class="nice-checkbox-background">
        <svg xml:space="preserve" class="nice-checkbox-checkmark" focusable="false" version="1.1" viewBox="0 0 24 24">
          <path class="nice-checkbox-checkmark-path" d="M4.1,12.7 9,17.6 20.3,6.3" fill="none" stroke="white" stroke-width="3"></path>
        </svg>
      </div>
    </div>
    <span class="nice-checkbox-label"><span style="display:none">&nbsp;</span>{{label}}</span>
  </label>
  `,
  styleUrls: [ "nicecheckbox.scss" ]
})
export class NicecheckboxComponent implements OnInit, Inicecheckbox {

  @Input() id:  string = "nicecheckbox_id";
  @Input() label: string = "Check me!";
  @Input() checked: boolean = false;
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;  
  
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();  

  constructor() {  
  }

  ngOnInit() {
  }

  //on input change
  OnInput($event) {
    this.checked = $event.target.value;
    this.notify.emit(this.checked);
  }

}
