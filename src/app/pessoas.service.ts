import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  URL = 'http://localhost:3000'
  getPessoas(){
    return this.http.get(this.URL+'/pessoas');
  }
  deletePessoa(id){
    return this.http.delete(this.URL+'/pessoas/'+id);
  }
  postPessoa(pessoa){
    return this.http.post(this.URL+'/pessoas/',pessoa);
  }
  constructor(private http:HttpClient) { }
}
