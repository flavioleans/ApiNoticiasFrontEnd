import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../service/noticia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  constructor(private noticiaService : NoticiaService, private router: Router) { }

  noticias: any;

  ngOnInit(): void {
    this.ListarNoticias();
  }

  ListarNoticias()
  {
    this.noticiaService.ListarNoticias()
    .subscribe(noticias =>
      {
        this.noticias = noticias;
      },
      error => {
        this.router.navigate(["/login"]);
      })
  }
}
