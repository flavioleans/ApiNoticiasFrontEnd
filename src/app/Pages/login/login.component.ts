import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticaService } from 'src/app/service/autentica.service';
import { LoginModel } from '../../models/LoginModel';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formbuider: FormBuilder, private router: Router, public loginService: LoginService,
    private autenticaService : AutenticaService) { }

  ngOnInit(): void {
    this.loginForm = this.formbuider.group(
    {
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  submitLogin(){
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;

    this.loginService.LoginUsuario(dadosLogin)
    .subscribe(
      token =>
      {
        var nossoToken = token
        this.autenticaService.DefineToken(token)
        this.router.navigate(["/noticias"]);
      },
      erro => {

      })
  }
}
