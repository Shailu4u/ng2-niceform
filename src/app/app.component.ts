import { Component } from '@angular/core';
import { Iniceinput } from './niceinput/niceinput.modal'

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styles: []
})
export class AppComponent {
 
  niceInputData: Iniceinput;

  constructor() {
    this.niceInputData = {
      id: "niceUserName",
      label: "User Name",
      type: "text",
      value: "",
      classes: "form-control",
      required: true
    }
  }

  OninputChange(value: string): void {
    console.log("On input change",value);
  }
}
