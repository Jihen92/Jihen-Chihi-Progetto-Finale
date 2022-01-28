import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../classes/client';
import { Clienti } from '../classes/clienti';
import { DatClient } from '../classes/dat-client';


@Injectable({
  providedIn: 'root'
})
export class ClientiService {
  UrlAPI='http://epicode.online/epicodebeservice_v2/api/clienti?page=0&size=20&sort=id,ASC';
  tenantID = 'fe_0621';
  bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA5ODIyMSwiZXhwIjoxNjQzOTYyMjIxfQ.2SgF85Ps7IQmx9oUKnLtukvC3Sy44rWsUEDUEIkFS2_M-8qVKzMkWEZDQgvVAexUUhp7G_vdbpUx75w3dlFVpQ';
 
  headers= new HttpHeaders();
  constructor( private http :HttpClient) { 
     this.headers = this.headers
              .set("Authorization",this.bearerToken)
              .set("X-TENANT-ID", this.tenantID) }

  getAllclients(){

    return this.http.get<Clienti>(this.UrlAPI,{headers:this.headers})
   
  }
  getcliente(id:number){
    return this.http.get<Clienti>(this.UrlAPI,{headers:this.headers});
    //environment.clienti+id+'api/clienti?page=0&size=20&sort=id,ASC'
   //return this.http.get<Client>(this.UrlAPI,{headers:this.headers});
  }


  addClient(client: Clienti) {
    return this.http.post<Clienti>(this.UrlAPI,{headers:this.headers})
  }
  getTipoClient(){
    return this.http.get<string[]>(this.UrlAPI,{headers:this.headers});
  }

  update(id:number) {
   return this.http.put<Clienti>(this.UrlAPI,{headers:this.headers});
  }

  removeClient(id:number) {
   return this.http.delete<Clienti>(environment.clienti+id+'api/clienti?page=0&size=20&sort=id,ASC');
}
}