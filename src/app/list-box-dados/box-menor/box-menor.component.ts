import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BoxDados } from '../box-dados';
import { pathFotos } from '../list-box-dados.component';

@Component({
  selector: 'app-box-menor',
  templateUrl: './box-menor.component.html',
  styleUrls: ['./box-menor.component.scss']
})
export class BoxMenorComponent implements OnInit {

  @Input() dados: BoxDados;
  @Input() selecionado: boolean;
  @Output() clickEvent = new EventEmitter();

  imgSource: string;

  constructor() { }

  ngOnInit() {
    this.imgSource = pathFotos + this.dados.foto;
  }

  Clicked() {
    this.clickEvent.emit(this.dados);
  }
}
