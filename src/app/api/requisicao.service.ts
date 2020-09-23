import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

//private baseUrl = ""

  constructor(private http: HttpClient) { }

  buscarNoticias(): any{
    return this.http.get('https://iprev.ma.gov.br/wp-json/wp/v2/posts?categories=10&per_page=12');
  }

  buscarNoticiasDestaque(): any{
    return this.http.get('https://iprev.ma.gov.br/wp-json/wp/v2/posts?categories=5&per_page=3');
  }

  buscarImagemNoticia(url): any {
    return this.http.get(url);
  }


  buscarNoticias2(): any{
   return this.http.get('http://painel.iprev.ma.gov.br/api/wp-json/wp/v2/posts?categories=8');
  }

  buscarArquivos(): any{
    return this.http.get('http://painel.iprev.ma.gov.br/api/wp-json/wp/v2/posts?categories=11');
  }
}
