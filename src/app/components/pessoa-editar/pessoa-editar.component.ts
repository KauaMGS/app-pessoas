import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/interfaces/pessoa';
import { PessoaSemId } from 'src/app/interfaces/pessoa-sem-id';
import { PessoaService } from 'src/app/services/pessoa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pessoa-editar',
  templateUrl: './pessoa-editar.component.html',
  styleUrls: ['./pessoa-editar.component.css']
})
export class PessoaEditarComponent implements OnInit {
  constructor(private pessoaService: PessoaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  pessoaSelecionada!: Pessoa;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let pessoaId: string = params['id'];

      this.pessoaService.getById(pessoaId).subscribe((pessoaBuscada: Pessoa) => {
        this.pessoaSelecionada = pessoaBuscada;

        this.preencherPessoaForm();
      })
    });
  }

  pessoaForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
    age: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]+$')]),
    role: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    isActive: new FormControl(''),
    country: new FormControl(''),
    experience: new FormControl('')
  })
 
  preencherPessoaForm(){
    this.pessoaForm.setValue({
      name: this.pessoaSelecionada.name,
      age: this.pessoaSelecionada.age.toString(),
      role: this.pessoaSelecionada.role,
      email: this.pessoaSelecionada.email,
      isActive: this.pessoaSelecionada.isActive ? 'true' : 'false',
      country: this.pessoaSelecionada.country,
      experience: this.pessoaSelecionada.experience
    });  
  }

  submit(){
    const pessoa: PessoaSemId = {
      name: this.pessoaForm.value.name!,
      age: parseInt(this.pessoaForm.value.age!),
      role: this.pessoaForm.value.role!,
      email: this.pessoaForm.value.email!,
      isActive: this.pessoaForm.value.isActive === 'true',
      country: this.pessoaForm.value.country ?? '',
      experience: this.pessoaForm.value.experience ?? ''
    }

    this.pessoaService.update(pessoa, this.pessoaSelecionada.id).subscribe(result => {
      Swal.fire({
        title: 'Pessoa atualizada com sucesso!',
        icon: 'success'
      })
      this.router.navigateByUrl('/home');
    })
  }

  onCancel(){
    Swal.fire({
      title: 'Operação cancelada!',
      icon: 'error'
    })
    this.router.navigateByUrl('/home');
  }
}
