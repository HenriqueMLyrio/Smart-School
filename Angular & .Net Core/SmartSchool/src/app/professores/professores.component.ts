import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef: BsModalRef;
  public profForm: FormGroup;
  public titulo = 'Professores';
  public profSelecionado: Professor | null;
  public textSimple: string;

  public professores = [
    {id: 1,nome: 'Roberto', disciplina:'mat'},
    {id: 2,nome: 'Claudia', disciplina:'port'},
    {id: 3,nome: 'Fernanda', disciplina:'fis'},
    {id: 4,nome: 'Marcio', disciplina:'qui'},
    {id: 5,nome: 'cristiano', disciplina:'ing'},
    {id: 6,nome: 'Ruberval', disciplina:'geo'},
    {id: 7,nome: 'Cris', disciplina:'bio'},
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
    this.profForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['', Validators.required],
    });
  }

  profSubmit(){
    console.log(this.profForm.value);
  }

  
  profSelect(prof: Professor){
    this.profSelecionado = prof; 
    this.profForm.patchValue(prof);
  }

  voltar(){
    this.profSelecionado = null;
  }


}
