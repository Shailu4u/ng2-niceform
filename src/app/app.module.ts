import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NiceinputModule } from './niceinput/niceinput.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    NiceinputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
