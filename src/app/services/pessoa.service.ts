import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../interfaces/pessoa';
import { PessoaSemId } from '../interfaces/pessoa-sem-id';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  api = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) { }

  save(newPessoa: PessoaSemId): Observable<PessoaSemId>{
    return this.http.post<PessoaSemId>(this.api, newPessoa);
  }

  getAll(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.api);
  }

  getById(pessoaId: string): Observable<Pessoa>{
    return this.http.get<Pessoa>(this.api + '/' + pessoaId);
  }
  
  update(savePessoa: PessoaSemId, pessoaId: string): Observable<PessoaSemId>{
    return this.http.put<PessoaSemId>(this.api + "/" + pessoaId, savePessoa);
  }

  delete(pessoaId: string): Observable<void>{
    return this.http.delete<void>(this.api + '/' + pessoaId); 
  }

}
