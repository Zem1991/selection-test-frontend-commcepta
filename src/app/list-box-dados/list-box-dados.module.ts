import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBoxDadosComponent } from './list-box-dados.component';
import { BoxMenorComponent } from './box-menor/box-menor.component';
import { BoxMaiorComponent } from './box-maior/box-maior.component';

@NgModule({
  declarations: [
    ListBoxDadosComponent,
    BoxMenorComponent,
    BoxMaiorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListBoxDadosComponent
  ]
})
export class ListBoxDadosModule { }
