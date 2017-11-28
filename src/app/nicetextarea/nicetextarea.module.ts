import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NicetextareaComponent } from './nicetextarea.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NicetextareaComponent
  ],
  exports: [ NicetextareaComponent ]
})
export class NicetextareaModule { }
