import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoticiasComponent } from './Pages/noticias/noticias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Interceptor } from './interceptor/interceptor';
import { AddNoticiaComponent } from './Pages/add-noticia/add-noticia.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const serviceAutentica = [Interceptor]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoticiasComponent,
    NavbarComponent,
    AddNoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [
    serviceAutentica,
    {provide : HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
