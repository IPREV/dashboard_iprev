import { RequisicaoService } from './../../api/requisicao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arquivos',
  templateUrl: './arquivos.component.html',
  styleUrls: ['./arquivos.component.css']
})
export class ArquivosComponent implements OnInit {

  lista_arquivos = [];

  constructor(private api: RequisicaoService) {


  }

  ngOnInit() {

    this.api.buscarArquivos().subscribe(
			data => {
				console.log(data[0]);
        this.lista_arquivos = data;
			}
		)
  }

}
