import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ProfessorService } from './professor.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef: BsModalRef;
  public professorForm: FormGroup;
  public titulo = 'Professores';
  public professorSelecionado: Professor | null;
  public textSimple: string;

  public professores: Professor[];

 
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private professorService: ProfessorService) {
    this.criarForm();
   }

  ngOnInit(): void {

    this.carregarProfessor();

  }

    criarForm(){
    this.professorForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required]
    });
  }

  carregarProfessor(){
    this.professorService.getAll().subscribe(
      (professores: Professor[]) => {
        this.professores = professores;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  salvarProfessor(professor: Professor){
    this.professorService.put(professor.id, professor).subscribe(
      (retorno: Professor) => {
        console.log(retorno);
        this.carregarProfessor();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
   }
  

  professorSubmit(){
    this.salvarProfessor(this.professorForm.value);
  }

  
  professorSelect(professor: Professor){
    this.professorSelecionado = professor; 
    this.professorForm.patchValue(professor);
  }

  voltar(){
    this.professorSelecionado = null;
  }



 }
