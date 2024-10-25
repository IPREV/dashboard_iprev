import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { RequisicaoService } from '../../api/requisicao.service';
import Swal from 'sweetalert2'
import { MatDialog } from '@angular/material';
import { SenhaMarketingComponent } from '../../modal/senha-marketing/senha-marketing.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

  arquivo: File;
  senha: any;
  formData: FormData;
  data_agendamento: any;
  credencial: FormGroup;

  constructor(public snackBar: MatSnackBar,
              private api: RequisicaoService,
              private _dialog: MatDialog,
              private _formBuilder: FormBuilder,
              private router: Router) {}


   ngOnInit() {
      this.credencial = this._formBuilder.group({
        senha: ['', Validators.required],
       });
   }

    onChange(event) {
      const selectedFiles = <FileList>event.srcElement.files;
      // console.log(selectedFiles[0].type.includes('pdf'));
      const tamanhoArquivo = (selectedFiles[0].size / 1024) / 1024; // transformando byte em MB.

      if (tamanhoArquivo > 10) {
        alert('O tamanho do arquivo deve ser menor que 10MB.');
      } else if (!selectedFiles[0].type.includes('pdf') && !selectedFiles[0].type.includes('png') &&
        !selectedFiles[0].type.includes('bmp') && !selectedFiles[0].type.includes('jpg') &&
        !selectedFiles[0].type.includes('jpeg')) {

        alert('O arquivo deve ser do tipo foto (PNG, BMP, JPG ou JPEG).');
      } else {
        document.getElementById(event.target.labels[0].id).innerHTML = selectedFiles[0].name;

          this.arquivo = selectedFiles[0];
      }
    }

  onUpload() {
    if (this.arquivo) {
      const caixa = this._dialog.open(SenhaMarketingComponent, {
        data: { },
        hasBackdrop: true,
        width: '600px',
        disableClose: true
      });

      caixa.afterClosed().subscribe(
        result => {
          if (result !== 0) {
            this.api.upload(this.arquivo, this.data_agendamento).subscribe(res => console.log('Upload Success', res));
            alert('Upload realizado com sucesso!');
            this.router.navigate(['/dashboard']);
          }
        });
      // console.log(this.data_agendamento);
      // this.api.upload(this.arquivo, this.data_agendamento).subscribe(res => console.log('Upload Success', res));
      // alert('Upload realizado com sucesso!');
    }
  }

}
