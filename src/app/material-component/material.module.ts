import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
import { ButtonsComponent } from './buttons/buttons.component';

import { SnackbarComponent } from './snackbar/snackbar.component';
import { NoticiasComponent } from './noticias/noticias.component';


import { TelefonesComponent } from './telefones/telefones.component';
import { OutrosServicosComponent } from './outros-servicos/outros-servicos.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SenhaMarketingComponent } from '../modal/senha-marketing/senha-marketing.component';
import { IprevPlayComponent } from './iprev-play/iprev-play.component';
import { FeriasComponent } from './ferias/ferias.component';
import { NgxMaskModule } from 'ngx-mask';
import { FrequenciaComponent } from './frequencia/frequencia.component';

import { DadosPrevidenciariosComponent } from './dados-previdenciarios/dados-previdenciarios.component';
import { GestaoComponent } from './gestao/gestao.component';
import { ProvaDeVidaComponent } from './prova-de-vida/prova-de-vida.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    Ng2SearchPipeModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  entryComponents: [],
  declarations: [
    ButtonsComponent,
    SnackbarComponent,
    NoticiasComponent,
    TelefonesComponent,
    OutrosServicosComponent,
    IprevPlayComponent,
    FeriasComponent,
    FrequenciaComponent,
    DadosPrevidenciariosComponent,
    GestaoComponent,
    ProvaDeVidaComponent,
   
  ]
})
export class MaterialComponentsModule {}
