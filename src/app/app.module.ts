import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NiceinputModule } from './niceinput/niceinput.module';
import { NicetextareaModule } from './nicetextarea/nicetextarea.module';
import { NicecheckboxModule } from './nicecheckbox/nicecheckbox.module';
import { NiceradiobuttonModule } from './niceradiobutton/niceradiobutton.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    NiceinputModule,
    NicetextareaModule,
    NicecheckboxModule,
    NiceradiobuttonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
