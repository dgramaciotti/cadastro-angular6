import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { GridPessoasComponent } from './grid-pessoas/grid-pessoas.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path: 'listar', component: GridPessoasComponent},
  {path: 'cadastro', component:CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
