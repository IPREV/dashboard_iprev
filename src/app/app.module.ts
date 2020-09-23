
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { ButtonsModule, WavesModule, CardsModule} from 'angular-bootstrap-md';
import { DestaqueComponent } from './modal/destaque/destaque.component';
import { NoticiaCompletaComponent } from './modal/noticia-completa/noticia-completa.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingService } from './interceptor/loading.service';





@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    DestaqueComponent,
    NoticiaCompletaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    NgxSpinnerModule,
    RouterModule.forRoot(AppRoutes),
    MDBBootstrapModule.forRoot(),
    ButtonsModule,
    WavesModule,
    CardsModule
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
  entryComponents: [DestaqueComponent, NoticiaCompletaComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
