import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { RequisicaoService } from '../../api/requisicao.service';
@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.component.html',
  styleUrls: ['./frequencia.component.css'],
  providers: [ ]
})


export class FrequenciaComponent implements OnInit {
  cpf: string;
  mesAno: string;



  constructor(private api: RequisicaoService) { }
  ngOnInit() {

  }

  gerarFrequencia(){
  console.log(this.mesAno);
    if(!this.cpf){
      swal.fire('Ops..', 'Informe o CPF para prosseguir.', 'error')
      return
    }
    if(!this.mesAno){
      swal.fire('Ops..', 'Informe o mês e o ano referente à frequência.', 'error')
      return
    }

    const split_ano_mes = this.mesAno.split('-')

    this.api.gerarPDF(this.cpf, split_ano_mes[0], split_ano_mes[1]).subscribe(
      data => {
        console.log(data);
        const file = new Blob([data], {
          type: 'application/pdf'
        });

        // IE
        /**
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(file);
          return;
        } */

        const blob = window.URL.createObjectURL(file);

        window.open(blob, 'newwindow', 'width=' + screen.width + ', height=' + screen.height);
        swal.fire('Informação', 'Sua folha de frequência foi gerada!', 'success');
      },
      (error) => {
        if(error.status==500){
          swal.fire('Ops..','CPF não encontrado... Tente Novamente!', 'error')

        }else{
          swal.fire('Ops..','Servidor Indisponível... Aguarde e Tente Novamente', 'error')

        }

      }
    )
  }

}
