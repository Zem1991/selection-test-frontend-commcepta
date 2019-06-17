import { Component, OnInit, Input } from '@angular/core';

import { BoxDados } from '../box-dados';

@Component({
  selector: 'app-box-menor',
  templateUrl: './box-menor.component.html',
  styleUrls: ['./box-menor.component.css']
})
export class BoxMenorComponent implements OnInit {

  @Input() dados: BoxDados;

  constructor() { }

  ngOnInit() {
  }

}
