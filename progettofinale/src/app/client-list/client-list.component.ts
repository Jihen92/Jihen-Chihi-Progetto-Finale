import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../classes/client';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit{

  //data: any;
 // date: Date = new Date();

  clienti:Client[]=[];

  constructor(private  router:Router, private  clientiService:ClientiService,
    ) { }
   

  ngOnInit(): void {
    this.clientiService.getAllclients().subscribe(data=> this.clienti=data.content);
  }

  //this.data = setInterval(() => { 
    //this.date = new Date()
    //console.log(this.date);
  //}, 1000)
  //console.log('ProductsComponent ngOnInit');
//}
  detail(id:number){
   // Clienti/:id
    //alert(id)
   this.router.navigate(['Clienti',id])
  }



remove(id:number){
  
    this.clientiService.removeClient(id).subscribe(data=>console.log('elemento eliminato'+data))

}
}
 
  


  

