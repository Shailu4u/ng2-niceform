import { Component } from '@angular/core';
import { Iniceinput } from './niceinput/niceinput.model';
import { Inicetextarea } from './nicetextarea/nicetextarea.model';
import { Inicecheckbox } from './nicecheckbox/nicecheckbox.model';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styles: []
})
export class AppComponent {
 
  niceInputData: Iniceinput;
  niceTextareaData: Inicetextarea;
  niceCheckboxData: Inicecheckbox;

  constructor() {
    //Input box
    this.niceInputData = {
      id: "niceUserName",
      label: "User Name (Input)",
      type: "text",
      value: "",
      classes: "form-control",
      required: true,
      disabled: false,
      readonly: false
    };
    //textarea
    this.niceTextareaData = {
      id: "niceComments",
      label: "Nice Comments (Textarea)",
      value: "",
      classes: "form-control",
      required: false,
      disabled: false,
      readonly: false
    }
    //Checkbox
    this.niceCheckboxData = {
      id: "niceCheckbox",
      label: "Check me!",
      checked: false,
      disabled: false,
      readonly: false
    }
  }

  //on input text change
  OninputChange(value: string): void {
    console.log("On input change",value);
  }
}
