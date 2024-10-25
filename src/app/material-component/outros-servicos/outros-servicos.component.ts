import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from './../../api/requisicao.service';
import swal from 'sweetalert2';
import { ChamadoLogistica } from '../../api/model/chamado-logistica'

@Component({
  selector: 'app-outros-servicos',
  templateUrl: './outros-servicos.component.html',
  styleUrls: ['./outros-servicos.component.css']
})
export class OutrosServicosComponent implements OnInit {

  chamadoAtual: any = {};
  chamadoLogistica: ChamadoLogistica

  constructor(private api: RequisicaoService) { }

  ngOnInit() {
    /* this.api.listarChamadoLogistica().subscribe( 
      data => {
        console.log(data)
    }) */
  }

  abrirChamado(){
    const er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);

    if(!this.chamadoAtual.nome_solicitante){
      swal.fire('Ops..', 'Coloque o Nome Completo', 'error')
      return
    }

    if(!this.chamadoAtual.email){
       swal.fire('Ops..', 'Coloque o seu Email', 'error')
       return
    }

    if(!er.test(this.chamadoAtual.email)){
      swal.fire('Ops..', 'Informe um email válido!', 'error')
      return
    }

    if(!this.chamadoAtual.setor){
       swal.fire('Ops..', 'Coloque o Setor', 'error')
       return
    }

    if(!this.chamadoAtual.localizacao){
       swal.fire('Ops..', 'Coloque a Localização', 'error')
       return
    }

    if(!this.chamadoAtual.descricao){
       swal.fire('Ops..', 'Coloque a Descrição do Problema', 'error')
       return
    }

    let rm: ChamadoLogistica = {
      nome_solicitante: this.chamadoAtual.nome_solicitante,
      email: this.chamadoAtual.email,
      setor: this.chamadoAtual.setor,
      localizacao: this.chamadoAtual.localizacao,
      descricao: this.chamadoAtual.descricao
    }
    console.log(this.chamadoAtual)
    this.api.abrirChamadoLogistica(rm).subscribe( (res) => {
      this.chamadoAtual.nome_solicitante = res.nome_solicitante,
      this.chamadoAtual.email = res.email,
      this.chamadoAtual.setor = res.setor,
      this.chamadoAtual.localizacao = res.localizacao,
      this.chamadoAtual.descricao = res.descricao
      console.log(res)
      swal.fire('Informação', 'Chamado aberto com sucesso!', 'success')
    })
  }

}
