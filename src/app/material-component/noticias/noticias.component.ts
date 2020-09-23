import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../../api/requisicao.service';
import { NoticiaCompletaComponent } from '../../modal/noticia-completa/noticia-completa.component';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  all_noticias = [];


  constructor(
    private dialog: MatDialog,
    private api: RequisicaoService) {
  }

  ngOnInit(): void {
    this.api.buscarNoticias().subscribe(
      data => {
       for (let i = 0; i < data.length; i++) {
            if (data[i].featured_media !== 0) {
             this.api.buscarImagemNoticia(data[i]._links['wp:featuredmedia'][0].href).subscribe(
               resultado => {
                  // const imagem = imagens_post['media_details'].sizes.large;
                 data[i].imagem = resultado.media_details.sizes.large.source_url;
                 data[i].imagem_leitura = resultado.media_details.sizes.medium.source_url;

                 this.all_noticias.push(data[i]);
                }
              );
            }
        }
        console.log(data);
        // this.lista_noticias = data;
      }
    );
  }

  openDialog(noticia): void {
    const dialogRef = this.dialog.open(NoticiaCompletaComponent, {
      data: { noticia }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }


}
