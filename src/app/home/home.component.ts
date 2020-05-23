import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  aba = 'home';

  constructor(private rota: Router) {
  }

  ngOnInit(): void {
  }
  public direcionar(){
    this.rota.navigate(['informacoes']);
  }

  public removerToken(){
    localStorage.clear();
  }
}
