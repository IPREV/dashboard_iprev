import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { RequisicaoService } from '../../api/requisicao.service';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit {
  @Inject(MAT_DIALOG_DATA) public data: any;
  file: Blob;
  url: string;
  constructor(public dialogRef: MatDialogRef<DestaqueComponent>,
    private api: RequisicaoService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    
    this.api.buscarImagemDestaque().subscribe(
      data => {
        const urlCreator = window.URL;
        // console.log(data);
        const file = new Blob([data], {type: data.type});
        this.url = urlCreator.createObjectURL(file);
        // console.log(this.sanitizer.bypassSecurityTrustUrl(this.url));
        // const img = new Image();
        // img.src = this.url;
        // document.body.appendChild(img);
        // console.log(data)
      });
}

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
