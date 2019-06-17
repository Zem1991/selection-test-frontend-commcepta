import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { BoxMenorModule } from './box-menor/box-menor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    BoxMenorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
