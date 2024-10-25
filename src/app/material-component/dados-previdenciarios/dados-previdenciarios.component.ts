import { RequisicaoService } from './../../api/requisicao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-previdenciarios',
  templateUrl: './dados-previdenciarios.component.html',
  styleUrls: ['./dados-previdenciarios.component.css']
})
export class DadosPrevidenciariosComponent implements OnInit {

  lista_arquivos = [];

  constructor(private api: RequisicaoService) {


  }

  ngOnInit() {

    this.api.buscarDadosPrevidenciariosComponent().subscribe(
			data => {
				console.log(data[0]);
        this.lista_arquivos = data;
			}
		)
  }

}
