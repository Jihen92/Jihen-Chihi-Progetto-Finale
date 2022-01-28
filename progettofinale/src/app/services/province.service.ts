import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comune } from '../classes/comune';
import { DataProvince } from '../classes/data-province';
import { Province } from '../classes/province';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

UrlAPI='http://epicode.online/epicodebeservice_v2/api/province?page=0&size=20&sort=id,Asc';
tenantID = 'fe_0621';
bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA5ODIyMSwiZXhwIjoxNjQzOTYyMjIxfQ.2SgF85Ps7IQmx9oUKnLtukvC3Sy44rWsUEDUEIkFS2_M-8qVKzMkWEZDQgvVAexUUhp7G_vdbpUx75w3dlFVpQ';

headers= new HttpHeaders();
constructor( private http :HttpClient) { 
   this.headers = this.headers
            .set("Authorization",this.bearerToken)
            .set("X-TENANT-ID", this.tenantID) }

  getAllProvince(){
    return this.http.get<DataProvince>(this.UrlAPI,{headers:this.headers})

  }
  getProvince(id:number){
   return this.http.get<DataProvince>(this.UrlAPI,{headers:this.headers})
  }
  removeProvince(item:any){
   return this.http.delete<DataProvince>(this.UrlAPI,{headers:this.headers})
  }
}
