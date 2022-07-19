import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { NoticiasComponent } from './Pages/noticias/noticias.component';
import { AddNoticiaComponent } from './Pages/add-noticia/add-noticia.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "noticias", component: NoticiasComponent
  },
  {
    path: "addnoticia", component: AddNoticiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
