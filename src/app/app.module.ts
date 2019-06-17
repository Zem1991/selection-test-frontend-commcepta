import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { ListBoxDadosModule } from './list-box-dados/list-box-dados.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NavbarModule,
    ListBoxDadosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
