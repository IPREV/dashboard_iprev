import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { INoticiaCompleta } from '../../types/INoticiaCompleta';
@Component({
  selector: 'app-noticia-completa',
  templateUrl: './noticia-completa.component.html',
  styleUrls: ['./noticia-completa.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NoticiaCompletaComponent implements OnInit {

  click_noticia : INoticiaCompleta;


  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<NoticiaCompletaComponent>)
     {    }

  ngOnInit() {
    console.log(this.data);
     this.click_noticia = this.data.noticia;
  }

}
