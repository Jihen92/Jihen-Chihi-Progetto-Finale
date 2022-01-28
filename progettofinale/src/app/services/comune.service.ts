import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comune } from '../classes/comune';
import { DataComune } from '../classes/data-comune';


@Injectable({
  providedIn: 'root'
})
export class ComuneService {
  UrlAPI='http://epicode.online/epicodebeservice_v2/api/comuni?page=0&size=20&sort=id,ASC';
tenantID = 'fe_0621';
bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA5ODIyMSwiZXhwIjoxNjQzOTYyMjIxfQ.2SgF85Ps7IQmx9oUKnLtukvC3Sy44rWsUEDUEIkFS2_M-8qVKzMkWEZDQgvVAexUUhp7G_vdbpUx75w3dlFVpQ';

headers= new HttpHeaders();
constructor( private http :HttpClient) { 
   this.headers = this.headers
            .set("Authorization",this.bearerToken)
            .set("X-TENANT-ID", this.tenantID) }

  getAllComune(){
    return this.http.get<DataComune>(this.UrlAPI,{headers:this.headers})

  }
  getComune(id:number){
    return this.http.get<DataComune>(this.UrlAPI,{headers:this.headers})

  }
  removeComune(item:any) {
    return this.http.delete<DataComune>(this.UrlAPI,{headers:this.headers})
  }
}
