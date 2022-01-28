import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ProvinceListComponent } from './province-list/province-list.component';
import { ComuniListComponent } from './comuni-list/comuni-list.component';
import { ClientListComponent } from './client-list/client-list.component';
import{HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http';
import { FooterComponent } from './footer/footer.component'
import { HttpinterseptorInterceptor } from './httpinterseptor.interceptor';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { NewClientComponent } from './new-client/new-client.component';
import { FormsModule } from '@angular/forms';
import { FattureListComponent } from './fatture-list/fatture-list.component';
import { DetailComuneComponent } from './detail-comune/detail-comune.component';
import { NewFattureComponent } from './new-fatture/new-fatture.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProvinceListComponent,
    ComuniListComponent,
    ClientListComponent,
    FooterComponent,
    DetailClientComponent,
    UpdateClientComponent,
    NewClientComponent,
    FattureListComponent,
    DetailComuneComponent,
    NewFattureComponent,
    HomeComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
   // {
    //  provide: HTTP_INTERCEPTORS,
    //  useClass: HttpinterseptorInterceptor,
    //  multi: true,
  // }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
