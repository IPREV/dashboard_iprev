import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from './../../api/requisicao.service';
import { Ramais } from '../../api/model/ramais'

@Component({
  selector: 'app-telefones',
  templateUrl: './telefones.component.html',
  styleUrls: ['./telefones.component.css']
})
export class TelefonesComponent implements OnInit {

  ramais: any = [];
  listaRamais: Ramais[];
  filter;

  constructor(private api: RequisicaoService) { }

  ngOnInit() {
    this.api.listarRamais().subscribe( 
      data => {
        console.log(data)
        this.ramais =  data;
    })
  }

}