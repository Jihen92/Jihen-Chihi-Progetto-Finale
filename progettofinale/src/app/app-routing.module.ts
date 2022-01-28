import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ComuniListComponent } from './comuni-list/comuni-list.component'
import { DetailClientComponent } from './detail-client/detail-client.component';
import { DetailComuneComponent } from './detail-comune/detail-comune.component';
import { FattureListComponent } from './fatture-list/fatture-list.component';
import { HomeComponent } from './home/home.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NewFattureComponent } from './new-fatture/new-fatture.component';
import { ProvinceListComponent } from './province-list/province-list.component';
import { UpdateClientComponent } from './update-client/update-client.component';

const routes: Routes = [
  {path:'Province', component: ProvinceListComponent},
  {path:'Comuni', component: ComuniListComponent},
  {path:'Clienti', component: ClientListComponent},
  {path:'Fatture', component: FattureListComponent},
  {path:'NuovoCliente', component:NewClientComponent},
  {path:'Clienti/:id', component: DetailClientComponent},
  {path:'Clienti/:id/update', component: UpdateClientComponent},
  {path:'Comune/:id', component: DetailComuneComponent},
  {path:'NuovoFatture', component:NewFattureComponent},
  {path:'', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
