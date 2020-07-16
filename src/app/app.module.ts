import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberPeopleService } from './number-people.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  // providers: [NumberPeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
