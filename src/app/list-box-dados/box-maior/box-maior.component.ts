import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { BoxDados } from '../box-dados';
import { pathFotos } from '../list-box-dados.component';

@Component({
  selector: 'app-box-maior',
  templateUrl: './box-maior.component.html',
  styleUrls: ['./box-maior.component.scss']
})
export class BoxMaiorComponent implements OnInit {

  @Input() dados: BoxDados;

  imgSource: string;

  constructor() { }

  ngOnInit() {
    this.imgSource = pathFotos + this.dados.foto;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.imgSource = pathFotos + this.dados.foto;
  }
}
