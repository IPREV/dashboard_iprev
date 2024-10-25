import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from './../../api/requisicao.service';
import { IprevPlay } from '../../api/model/iprev-play';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iprev-play',
  templateUrl: './iprev-play.component.html',
  styleUrls: ['./iprev-play.component.css']
})
export class IprevPlayComponent implements OnInit {

  linksAll: any = [];
  listaLinks: IprevPlay[];
  filter;

  constructor(private api: RequisicaoService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.api.listarIprevPlay().subscribe(
      data => {
        this.linksAll = data;
    });
  }

  transform(style) {
    console.log(this.sanitizer.bypassSecurityTrustHtml(style));
    return this.sanitizer.bypassSecurityTrustHtml(style);
    // return this.sanitizer.bypassSecurityTrustStyle(style);
    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
  }

}
