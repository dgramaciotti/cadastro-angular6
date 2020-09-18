import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PessoasService} from '../pessoas.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private PessoasService:PessoasService) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      login: ['', [Validators.required, Validators.minLength(3)]],
      senha: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      status: [true, [Validators.required]],
    });
  }
  get f(){
    return this.form.controls;
  }
  formSubmit(){
    this.PessoasService.postPessoa(this.form.value).subscribe((res)=>{
      alert('Pessoa adicionada!');
    });
  }
  ngOnInit(): void {
  }

}
