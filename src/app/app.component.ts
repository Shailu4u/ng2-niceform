import { Component } from '@angular/core';
import { Iniceinput } from './niceinput/niceinput.modal';
import { Inicetextarea } from './nicetextarea/nicetextarea.modal';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styles: []
})
export class AppComponent {
 
  niceInputData: Iniceinput;
  niceTextareaData: Inicetextarea;

  constructor() {
    //Input box
    this.niceInputData = {
      id: "niceUserName",
      label: "User Name",
      type: "text",
      value: "",
      classes: "form-control",
      required: true
    };
    //textarea
    this.niceTextareaData = {
      id: "niceComments",
      label: "Nice Comments",
      value: "",
      classes: "form-control",
      required: true
    }
  }

  //on input text change
  OninputChange(value: string): void {
    console.log("On input change",value);
  }
}
