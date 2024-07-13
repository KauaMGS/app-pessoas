import { Component, Input } from '@angular/core';
import { Pessoa } from 'src/app/interfaces/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabela-pessoas',
  templateUrl: './tabela-pessoas.component.html',
  styleUrls: ['./tabela-pessoas.component.css']
})
export class TabelaPessoasComponent {
  constructor(private pessoaService: PessoaService, private router: Router) { }

  @Input() pessoas: Pessoa[] = [];

  delete(pessoaId: string){
    this.pessoaService.delete(pessoaId).subscribe(result => {
      Swal.fire({
        title: 'Pessoa excluída com sucesso!',
        icon: 'error'
      }).then(() => {
        window.location.reload();
      });
    });
  }

}
