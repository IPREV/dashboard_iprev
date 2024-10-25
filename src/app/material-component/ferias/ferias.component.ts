import { Component, OnInit } from '@angular/core';
import { Ferias } from '../../api/model/ferias';
import { RequisicaoService } from '../../api/requisicao.service';

@Component({
  selector: 'app-ferias',
  templateUrl: './ferias.component.html',
  styleUrls: ['./ferias.component.css']
})
export class FeriasComponent implements OnInit {

  ferias: any = [];
  listaFerias: Ferias[];
  filter;

  constructor(private api: RequisicaoService) { }

  ngOnInit() {
    this.api.listarFerias().subscribe( 
      data => {
        console.log(data)
        this.ferias =  data;
    })
  }

}
