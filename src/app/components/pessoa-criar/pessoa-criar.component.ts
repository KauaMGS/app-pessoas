import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Router } from '@angular/router';
import { PessoaSemId } from 'src/app/interfaces/pessoa-sem-id';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pessoa-criar',
  templateUrl: './pessoa-criar.component.html',
  styleUrls: ['./pessoa-criar.component.css']
})
export class PessoaCriarComponent implements OnInit{
  constructor(private pessoaService: PessoaService, private router: Router) { }

  pessoaForm!: FormGroup;

  ngOnInit(): void {
    this.pessoaForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      age: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]+$')]),
      role: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      isActive: new FormControl(''),
      country: new FormControl(''),
      experience: new FormControl('')
    })  
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

    this.pessoaService.save(pessoa).subscribe(result => {
      Swal.fire({
        title: 'Pessoa cadastrada com sucesso!',
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
