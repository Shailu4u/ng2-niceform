import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'niceinput',
  template: `
    <div class="nice-container">
   <input type="text" class="nice-input" [value]= "niceinputValue" (input)="niceinputValue = $event.target.value"
     id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter some text">
      <div class="nice-span-container">
       <span class="nice-span">{{niceinputValue}}</span>
      </div>
    </div>
  `,
  styleUrls: [ "niceinput.css" ]
})
export class NiceinputComponent implements OnInit {
  niceinputValue:string;
  constructor() { 
    this.niceinputValue = "Some text input";
  }

  ngOnInit() {
  }

}
