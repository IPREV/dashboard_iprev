import { NoticiasComponent } from './../material-component/noticias/noticias.component';
import { MatDialog } from '@angular/material';
import { RequisicaoService } from './../api/requisicao.service';
import { Component, OnInit } from '@angular/core';

import { DestaqueComponent } from '../modal/destaque/destaque.component';
import { NoticiaCompletaComponent } from '../modal/noticia-completa/noticia-completa.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {


  lista_noticias = [];
  constructor(
    public dialog: MatDialog,
    private api: RequisicaoService) { }

  ngOnInit() {
    this.api.buscarNoticiasDestaque().subscribe(
      data => {
       for (let i = 0; i < data.length; i++) {
            if (data[i].featured_media !== 0) {
             this.api.buscarImagemNoticia(data[i]._links['wp:featuredmedia'][0].href).subscribe(
               resultado => {
                  // const imagem = imagens_post['media_details'].sizes.large;
                 data[i].imagem = resultado.media_details.sizes.large.source_url;
                 this.lista_noticias.push(data[i]);
                }
              );
            }
        }
        console.log(data);
        // this.lista_noticias = data;
      }
    );
    this.openDialog();
  }

  abrirLeiaMaisDestaque(noticia): void {
    const dialogRef = this.dialog.open(NoticiaCompletaComponent, {
      data: { noticia }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DestaqueComponent, {
      data: { name: "" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
