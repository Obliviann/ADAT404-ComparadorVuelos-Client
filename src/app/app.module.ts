import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//1. Shouldn't have Angular-CLI done this automatically? :
import { MyFormComponent } from "../components/my-form/my-form.component";

@NgModule({
  declarations: [
    AppComponent,
    //1. ""
    MyFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
