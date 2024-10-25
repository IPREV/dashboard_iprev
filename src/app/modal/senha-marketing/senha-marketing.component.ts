import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-senha-marketing',
  templateUrl: './senha-marketing.component.html',
  styleUrls: ['./senha-marketing.component.css']
})
export class SenhaMarketingComponent implements OnInit {

  credencial: FormGroup;
  senha: string;
  data_agendamento: any;
  arquivo: File;

  constructor(private _formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data,
              private dialogRef: MatDialogRef<SenhaMarketingComponent>,) { }

  ngOnInit() {
    this.credencial = this._formBuilder.group({
      senha: ['', Validators.required],
    });
  }

  inserirSenha(valor) {
    if (this.senha == 'Iprev123') {
      this.dialogRef.close(valor);
    }else {
      alert('Tente Novamente');
    }
    // console.log(this.senha)
  }

  close(valor) {
    // console.log(valor);
    this.dialogRef.close(valor);
  }

}
