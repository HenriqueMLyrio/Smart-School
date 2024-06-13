import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno| null;
  public textSimple: string;

  public alunos = [
    {id: 1,nome: 'Marta', sobrenome: 'Silva', Telefone: 5555555},
    {id: 2,nome: 'Paula', sobrenome: 'Silva', Telefone: 5555555},
    {id: 3,nome: 'Laura', sobrenome: 'Silva', Telefone: 5555555},
    {id: 4,nome: 'Luiza', sobrenome: 'Silva', Telefone: 5555555},
    {id: 5,nome: 'Lucas', sobrenome: 'Silva', Telefone: 5555555},
    {id: 6,nome: 'Pedro', sobrenome: 'Silva', Telefone: 5555555},
    {id: 7,nome: 'Paulo', sobrenome: 'Silva', Telefone: 5555555},
  ];


  
 
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, 
              private modalService: BsModalService) {
    this.criarForm();
   }

  ngOnInit(): void {
  }

  criarForm(){
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      Telefone: ['', Validators.required]
    });
  }

  alunoSubmit(){
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
    this.alunoSelecionado = null;
  }


}
