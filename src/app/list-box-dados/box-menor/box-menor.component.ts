import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BoxDados } from '../box-dados';

@Component({
  selector: 'app-box-menor',
  templateUrl: './box-menor.component.html',
  styleUrls: ['./box-menor.component.css']
})
export class BoxMenorComponent implements OnInit {

  @Input() dados: BoxDados;
  @Input() selecionado: boolean;
  @Output() clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // function Clicked(){
    //   this.clickEvent.emit(this.dados);
    // }

    // document.getElementById('dados')
    // .addEventListener('click', Clicked)
  }

  Clicked() {
    this.clickEvent.emit(this.dados);
  }
}
