import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PessoasListComponent } from './components/pessoas-list/pessoas-list.component';
import { PessoaCriarComponent } from './components/pessoa-criar/pessoa-criar.component';
import { PessoaEditarComponent } from './components/pessoa-editar/pessoa-editar.component';

const routes: Routes = [
  {path: 'home', component: PessoasListComponent},
  {path: 'pessoa/criar', component: PessoaCriarComponent},
  {path: 'pessoa/editar/:id', component: PessoaEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
