import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Iniceradiobutton } from './niceradiobutton.model';

@Component({
  selector: 'nice-radiobutton',
  template: `
  <label class="nice-radio-label" [for]="id"
    [ngClass]="{'nice-radio-checked': niceradio.checked, 'nice-radio-unchecked': !niceradio.checked, 'nice-radio-disabled' : niceradio.disabled, 'nice-radio-readonly': niceradio.readonly }">
    <input class="nice-radio-input cdk-visually-hidden" type="radio" [id]="id" [attr.name]="name" (change)="Onchange($event)" #niceradio
        [attr.aria-checked]="niceradio.checked" [required]="required" [disabled]="disabled" [readonly]="readonly">
    <div class="nice-radio-container">
      <div class="nice-radio-outer-circle"></div>
      <div class="nice-radio-inner-circle"></div>
      <div class="nice-radio-ripple nice-ripple"></div>
    </div>    
    <div class="nice-radio-label-content">
      <span style="display:none">&nbsp;</span> {{label}}
    </div>
  </label>
  `,
  styleUrls: [ "niceradiobutton.scss" ]
})
export class NiceradiobuttonComponent implements OnInit, Iniceradiobutton, AfterViewInit  {

  @Input() id:  string = "niceradio_id";
  @Input() label: string = "Radio!";
  @Input() name: string = "niceradio_name";
  @Input() checked: boolean = false;
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;  

  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();   

  @ViewChild('niceradio') niceradio: ElementRef;

  constructor() { 

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //set default radio button status
    setTimeout(() =>{
      this.niceradio.nativeElement.checked = this.checked;
    });
  }

  //on input change
  Onchange($event) {
    this.checked = $event.target.checked;
    this.notify.emit(this.checked);
  }
}
