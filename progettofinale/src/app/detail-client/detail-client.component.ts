import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../classes/client';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {
  
  clienti:Clienti= new Clienti() ;
 

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private clientiService:ClientiService) { }

  ngOnInit():void {
    this.route.params.subscribe(params=>{
      this.clientiService. getcliente(params['id']).subscribe(clienti=> this.clienti=clienti);
     //

    });
}
update(id:number){
  // Clienti/:id/update
  this.router.navigate(['Clienti',id,'update'])
 }
}


