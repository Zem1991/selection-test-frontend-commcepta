import { Component, OnInit, Input } from '@angular/core';

import { BoxDados } from '../box-dados';

@Component({
  selector: 'app-box-maior',
  templateUrl: './box-maior.component.html',
  styleUrls: ['./box-maior.component.css']
})
export class BoxMaiorComponent implements OnInit {

  @Input() dados: BoxDados;

  constructor() { }

  ngOnInit() {
  }

}
