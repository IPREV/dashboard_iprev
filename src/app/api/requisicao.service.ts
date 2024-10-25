import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ChamadoTi } from '../api/model/chamado-ti';
import { ChamadoLogistica } from '../api/model/chamado-logistica';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private baseUrl = environment.API;
  private baseRH = environment.API_RH;
  private baseFrequencia = environment.API_FREQUENCIA;

  constructor(private http: HttpClient) { }

  buscarNoticias(): any{
    return this.http.get('https://iprev.ma.gov.br/wp-json/wp/v2/posts?categories=10&per_page=12');
  }

  buscarNoticiasDestaque(): any{
    return this.http.get('https://iprev.ma.gov.br/wp-json/wp/v2/posts?categories=5&orderby=date&per_page=3');
  }

  buscarImagemNoticia(url): any {
    return this.http.get(url);
  }

  buscarImagemDestaque(): any {
    return this.http.get(this.baseUrl + '/imagem-destaque', {
      responseType: 'blob' as 'json'
    });
  }

  buscarNoticias2(): any{
   return this.http.get('http://painel.iprev.ma.gov.br/api/wp-json/wp/v2/posts?categories=8');
  }

  buscarDadosPrevidenciariosComponent(): any{
    return this.http.get('http://painel.iprev.ma.gov.br/api/wp-json/wp/v2/posts?categories=11');
  }

  abrirChamadoTI(chamadoTi: ChamadoTi): Observable<ChamadoTi>{
    return this.http.post<ChamadoTi>(this.baseUrl + '/chamado-ti', JSON.stringify(chamadoTi), this.httpOptions)
  }

  listarChamadoTI(): any {
    return this.http.get(this.baseUrl + '/chamados-ti');
  }

  abrirChamadoLogistica(chamadoLogistica: ChamadoLogistica): Observable<ChamadoLogistica>{
    return this.http.post<ChamadoLogistica>(this.baseUrl + '/chamado-logistica', JSON.stringify(chamadoLogistica), this.httpOptions)
  }

  listarChamadoLogistica(): any {
    return this.http.get(this.baseUrl + '/chamados-logistica');
  }

  listarRamais(): any {
    return this.http.get(this.baseUrl + '/ramais');
  }

  listarFerias(): any {
    return this.http.get(this.baseRH + '/listarFerias');
  }

  upload(file: File, data_agendamento: string) {
    const formData = new FormData();
    formData.append('arquivo', file, file.name);
    formData.append('data_agendamento', data_agendamento);
    return this.http.post(this.baseUrl + '/upload', formData);
  }

  listarIprevPlay(): any {
    return this.http.get(this.baseUrl + '/iprev-play');
  }

  gerarPDF(cpf, ano, mes): any {
    return this.http.get(this.baseFrequencia + `/gerarPdf?cpf=${cpf}&ano=${ano}&mes=${mes}`, { responseType: 'blob' as 'json'})
  }
  

}
