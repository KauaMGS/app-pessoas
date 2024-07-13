import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasListComponent } from './components/pessoas-list/pessoas-list.component';
import { HeaderComponent } from './components/header/header.component';
import { PessoaCriarComponent } from './components/pessoa-criar/pessoa-criar.component';
import { TabelaPessoasComponent } from './components/tabela-pessoas/tabela-pessoas.component';
import { PessoaEditarComponent } from './components/pessoa-editar/pessoa-editar.component';


@NgModule({
  declarations: [
    AppComponent,
    PessoasListComponent,
    HeaderComponent,
    PessoaCriarComponent,
    TabelaPessoasComponent,
    PessoaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
