import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoticiaService } from '../../service/noticia.service';
import { NoticiaViewModel } from '../../models/NoticiaViewModel/NoticiaViewModel';

@Component({
  selector: 'app-add-noticia',
  templateUrl: './add-noticia.component.html',
  styleUrls: ['./add-noticia.component.scss']
})
export class AddNoticiaComponent implements OnInit {
  addNoticiaForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router, private noticiaService: NoticiaService) { }

  ngOnInit(): void {
    this.addNoticiaForm = this.formbuilder.group(
      {
        titulo: ['', [Validators.required]],
        informacao: ['', [Validators.required]]
      });
  }

  submitAddNoticia()
  {
    const dadosNovaNoticia = this.addNoticiaForm.getRawValue() as NoticiaViewModel;

    var noticia = new NoticiaViewModel();
    noticia.titulo = dadosNovaNoticia.titulo;
    noticia.informacao = dadosNovaNoticia.informacao;

    this.noticiaService.AdicionarNoticia(noticia)
    .subscribe(erro =>
      {
        this.router.navigate(["/noticias"]);
      },
      error => {
        alert("Erro!")
      })

  }

}
