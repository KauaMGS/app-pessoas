import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/interfaces/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.css']
})
export class PessoasListComponent implements OnInit {
  constructor(private pessoaService: PessoaService){ }
  pessoas: Pessoa[] = [];

  ngOnInit(){
    this.pessoaService.getAll().subscribe(response => {
      this.pessoas = response;
    }, error => {
      console.error(error);
    }
   );
  }

}
