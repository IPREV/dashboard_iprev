import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../../api/requisicao.service';
import { ChamadoTi } from '../../api/model/chamado-ti'
import swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestao',
  templateUrl: './gestao.component.html',
  styleUrls: ['./gestao.component.css']
})
export class GestaoComponent implements OnInit {

  chamadoTI: ChamadoTi
  chamadoAtual: any = {};
  forms: FormGroup;
  email: boolean;
 

  constructor(
    private api: RequisicaoService,
  ) { }

  ngOnInit() {
     /* this.api.listarChamadoTI().subscribe( 
       data => {
         console.log(data)
     }) */
  }


  numberLimit(e: any) {
    let charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab

    if (charCode != 8 && charCode != 9) {
      // charCode 48 equivale a 0   
      // charCode 57 equivale a 9
      let max = 15;

      if (charCode != 46 && (charCode < 48 || charCode > 57) || (e.target.value.length >= max)) return false;
    }
  }


 
  abrirChamado(){
    const er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    console.log(this.chamadoAtual.email)

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

    let rm: ChamadoTi = {
      nome_solicitante: this.chamadoAtual.nome_solicitante,
      email: this.chamadoAtual.email,
      setor: this.chamadoAtual.setor,
      ip: this.chamadoAtual.ip,
      localizacao: this.chamadoAtual.localizacao,
      descricao: this.chamadoAtual.descricao
    }
    console.log(this.chamadoAtual)
    this.api.abrirChamadoTI(rm).subscribe( (res) => {
      this.chamadoAtual.nome_solicitante = res.nome_solicitante,
      this.chamadoAtual.email = res.email,
      this.chamadoAtual.setor = res.setor,
      this.chamadoAtual.ip = res.ip,
      this.chamadoAtual.localizacao = res.localizacao,
      this.chamadoAtual.descricao = res.descricao
      console.log(res)
      swal.fire('Informação', 'Chamado aberto com sucesso!', 'success')
    })
  }


}
