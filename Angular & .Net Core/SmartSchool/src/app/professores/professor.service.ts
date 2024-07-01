import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Professor } from '../models/Professor';


@Injectable({
  providedIn: 'root'
})
export class ProfessorService{

  baseUrl = `${environment.mainUrl}/api/professor`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Professor[]> {
    return this.http.get<Professor[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.baseUrl}/${id}`);
  }

  post(professor: Professor){
    return this.http.post(`${this.baseUrl}`, professor);
  }

  put(id: number, professor: Professor): Observable<Professor>{
    return this.http.put<Professor>(`${this.baseUrl}/${id}`, professor);
  }

  delete(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
   //   <div class="mb-3">
     //   <label for="formGroupExampleInput2" class="form-label">Disciplina</label>
       // <input type="text" formControlName = "disciplina" class="form-control" >
     // </div>
