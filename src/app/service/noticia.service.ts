import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NoticiaViewModel } from '../models/NoticiaViewModel/NoticiaViewModel';

@Injectable({
  providedIn: 'root'
})

export class NoticiaService
{
  constructor(private httpClient: HttpClient) {}

  private readonly baseUrl = environment["endPoint"];

  ListarNoticias()
  {
    return this.httpClient.post<Array<NoticiaViewModel>>
    (`${this.baseUrl}/ListaNoticiasCustomizada/`, null);
  }

  AdicionarNoticia(noticia: NoticiaViewModel)
  {
    return this.httpClient.post<any>
    (`${this.baseUrl}/AdicionarNoticia/`, noticia);
  }

}
