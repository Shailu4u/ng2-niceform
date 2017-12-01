import { Component } from '@angular/core';
import { Iniceinput } from './niceinput/niceinput.model';
import { Inicetextarea } from './nicetextarea/nicetextarea.model';
import { Inicecheckbox } from './nicecheckbox/nicecheckbox.model';
import { Iniceradiobutton } from './niceradiobutton/niceradiobutton.model';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styles: []
})
export class AppComponent {
 
  niceInputData: Iniceinput;
  niceTextareaData: Inicetextarea;
  niceCheckboxData1: Inicecheckbox;
  niceCheckboxData2: Inicecheckbox;
  niceRadiobuttonData1: Iniceradiobutton;
  niceRadiobuttonData2: Iniceradiobutton;

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
    this.niceCheckboxData1 = {
      id: "niceCheckbox1",
      label: "Check me1!",
      checked: true,
      disabled: false,
      readonly: false
    }
    this.niceCheckboxData2 = {
      id: "niceCheckbox2",
      label: "Check me2!",
      checked: false,
      disabled: false,
      readonly: false
    }
    //Radio buttons
    this.niceRadiobuttonData1 = {
      id: "niceRadiobuttonbox1",
      label: "Start",
      name: "niceradio",
      checked: true,
      disabled: false,
      readonly: false
    }
    this.niceRadiobuttonData2 = {
      id: "niceRadiobuttonbox2",
      label: "End",
      name: "niceradio",
      checked: false,
      disabled: false,
      readonly: false
    }
  }

  //on input text change
  OninputChange(value: string): void {
    console.log("On input change",value);
  }

  //on textarea text change
  OnTextareaChange(value: string): void {
    console.log("On textarea change",value);
  }
}
