import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Aluno } from '../models/Aluno';


@Injectable({
  providedIn: 'root'
})
export class AlunoService{

  baseUrl = `${environment.mainUrl}/api/aluno`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.baseUrl}/${id}`);
  }
  getByTelefone(Telefone: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.baseUrl}/${Telefone}`);
  }


}
