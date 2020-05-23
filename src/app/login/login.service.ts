import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public validarAcesso(user: any){
    return this.http.post("http://52.91.139.190/fsapi/users/login", user);
  }

  public estaLogado(): boolean {
    let token = localStorage.getItem('token');
    if (token){
      return true;
    }
    else{
      return false;
    }
  }
}
