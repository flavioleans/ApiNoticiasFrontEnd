import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http"

@Injectable(
  {
    providedIn: "root"
  }
)
export class LoginService
{
  /**
   *
   */
  constructor(private httpClient: HttpClient) {}

  private readonly baseUrl = environment["endPoint"];

  LoginUsuario(objeto: any)
  {
    return this.httpClient.post<any>
    (`${this.baseUrl}/CriarTokenIdentity/`, objeto);
  }
}
