import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.css']
})
export class InformacoesComponent implements OnInit {

  usuario: any = {};

  constructor() { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('dadosUsuario'));
  }
  public removerToken(){
    localStorage.clear();
  }
}
