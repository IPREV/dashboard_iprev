
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// MDB Angular Pro
import { ButtonsModule, CardsModule} from 'angular-bootstrap-md';
import { DestaqueComponent } from './modal/destaque/destaque.component';
import { NoticiaCompletaComponent } from './modal/noticia-completa/noticia-completa.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingService } from './interceptor/loading.service';
import { SenhaMarketingComponent } from './modal/senha-marketing/senha-marketing.component';
import { NgxMaskModule} from 'ngx-mask';







@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    DestaqueComponent,
    NoticiaCompletaComponent,
    SenhaMarketingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    NgxSpinnerModule,
    RouterModule.forRoot(AppRoutes , { useHash: true }),
    MDBBootstrapModule.forRoot(),
    ButtonsModule,
    CardsModule,
    NgxMaskModule.forRoot(),
  ],

  
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },{
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingService,
      multi: true
    }


    
  ],
  entryComponents: [DestaqueComponent, NoticiaCompletaComponent, SenhaMarketingComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
