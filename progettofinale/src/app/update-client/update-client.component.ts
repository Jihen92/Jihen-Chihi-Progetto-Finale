import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
 ///client:Client[]=[];

 
constructor(
  private  router:Router,
  private  clientiService:ClientiService,
  private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    
  
  }
  update(id:number){
    this.router.navigate(['Clienti'])
  }
 
}




 
