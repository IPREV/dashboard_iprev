//import { OutrosServicosComponent } from './outros-servicos/outros-servicos.component';
//import { TelefonesComponent } from './telefones/telefones.component';
import { ProvaDeVidaComponent } from './prova-de-vida/prova-de-vida.component';
import { GestaoComponent } from './gestao/gestao.component';
import { DadosPrevidenciariosComponent } from './dados-previdenciarios/dados-previdenciarios.component';
//import { NoticiasComponent } from './noticias/noticias.component';
import { Routes } from '@angular/router';

//import { ButtonsComponent } from './buttons/buttons.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
//import { IprevPlayComponent } from './iprev-play/iprev-play.component';
//import { FeriasComponent } from './ferias/ferias.component';
//import { FrequenciaComponent } from './frequencia/frequencia.component';


export const MaterialRoutes: Routes = [
 /*  {
    path: 'button',
    component: ButtonsComponent
  },
  {
    path: 'marketing', //Marketing
    component: SnackbarComponent
  },
  {
    path: 'noticias',
    component: NoticiasComponent
  }, */
  {
    path: 'dados-previdenciarios',
    component: DadosPrevidenciariosComponent
  },
  {
    path: 'gestao',
    component: GestaoComponent
  },
  
  {
    path: 'prova-de-vida',
    component: ProvaDeVidaComponent,
  }
 /*  {
    path: 'ramal',
    component: TelefonesComponent
  },
  {
    path: 'suporte-logistica',
    component: OutrosServicosComponent
  }, */
  /* {
    path: 'iprev-play',
    component: IprevPlayComponent
  }, */
/*   {
    path: 'ferias',
    component: FeriasComponent
  },
  {
    path: 'frequencia',
    component: FrequenciaComponent,
  } */

];
