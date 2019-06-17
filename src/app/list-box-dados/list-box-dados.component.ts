import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BoxDados } from './box-dados';

const pathDados = 'assets/arquivos do teste/Dados/dados.json';

@Component({
  selector: 'app-list-box-dados',
  templateUrl: './list-box-dados.component.html',
  styleUrls: ['./list-box-dados.component.css']
})
export class ListBoxDadosComponent implements OnInit {

  listDados: BoxDados[];
  selecionado: BoxDados;

  constructor(private http: HttpClient) {
    this.http.get<BoxDados[]>(pathDados)
    .subscribe(
      data => {
        this.listDados = data;
        if (data.length > 0){
          this.selecionado = data[0];
        }
      }
    );
  }

  ngOnInit() {
  }

  novaSelecao(dados: BoxDados){
    this.selecionado = dados;
  }
}
