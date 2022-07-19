import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticaService } from '../../service/autentica.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router, private autenticaSrvice : AutenticaService) { }


  ngOnInit(): void {


  }

  sair(){
    this.autenticaSrvice.LimparToken();
    this.router.navigate(["/login"]);
  }

  novaNoticia(){
    this.router.navigate(["/addnoticia"]);
  }
}
