import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit {
  @Inject(MAT_DIALOG_DATA) public data: any;
  constructor(public dialogRef: MatDialogRef<DestaqueComponent>
    ) { }

  ngOnInit() {
    
  }

}
