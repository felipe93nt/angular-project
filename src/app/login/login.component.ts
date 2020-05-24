import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {email: '',password: ''}
  token = '';
  validUser = false;
  retorno: any;
  usuario: any = {email: '', name: '', id: '', idEmpresa: '', role: ''};

  constructor(private loginService: LoginService, private rota: Router) { }

  ngOnInit(): void {
  }

  public resetValidUser(){
      this.validUser = false;
  }

  public validar(){
    this.loginService.validarAcesso(this.user).subscribe(

      Sucesso => {
        this.retorno = Sucesso;
        this.usuario.email = this.retorno.user.email;
        this.usuario.name = this.retorno.user.name;
        this.usuario.id = this.retorno.user._id;
        this.usuario.idEmpresa = this.retorno.user.idEmpresa;
        this.usuario.role = this.retorno.user.role;

        localStorage.setItem('token', this.retorno.token);
        localStorage.setItem('dadosUsuario', JSON.stringify(this.usuario));
        this.rota.navigate(['home']);
      },
      Falha => {
        console.log('Falha de login');
        this.validUser = true;
      }

    );
  }
}
