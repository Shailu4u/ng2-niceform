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
      id: "niceEmail",
      label: "Email",
      type: "text",
      readonly: false,
      value: "",
      classes: "form-control input-text"
    }
  }

  OninputChange(msg: string): void {
    console.log(msg);
  }
}
