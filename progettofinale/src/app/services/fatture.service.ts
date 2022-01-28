import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataFattura } from '../classes/data-fattura';
import { Fatture } from '../classes/fatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

    UrlAPI='http://epicode.online/epicodebeservice_v2/api/fatture?page=0&size=20&sort=id,ASC';
  tenantID = 'fe_0621';
  bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA5ODIyMSwiZXhwIjoxNjQzOTYyMjIxfQ.2SgF85Ps7IQmx9oUKnLtukvC3Sy44rWsUEDUEIkFS2_M-8qVKzMkWEZDQgvVAexUUhp7G_vdbpUx75w3dlFVpQ';
  
  headers= new HttpHeaders();
  constructor( private http :HttpClient) { 
     this.headers = this.headers
              .set("Authorization",this.bearerToken)
              .set("X-TENANT-ID", this.tenantID) }
  
    getAllFatture(){
      return this.http.get<DataFattura>(this.UrlAPI,{headers:this.headers})
  
    }
    getFattura(){
      return this.http.get<DataFattura>(this.UrlAPI,{headers:this.headers})
  
    }
    addFatture(fatture: Fatture) {
      return this.http.post<Fatture>(this.UrlAPI,{headers:this.headers})
    }
    removeProvince(item:any){
      return this.http.delete<Fatture>(this.UrlAPI,{headers:this.headers})
     }
  }
  

