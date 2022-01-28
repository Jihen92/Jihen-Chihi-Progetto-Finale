import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  client: Clienti = new Clienti();
  tipoCliente:string[]=[];

  constructor(private router:Router, private  clientiService:ClientiService
    ) { }

  ngOnInit(): void {
    this.clientiService.getTipoClient().subscribe(data=>{
      this.tipoCliente=data;
    })
  
  }
  
    create(){
      this.clientiService.addClient(this.client).subscribe(data => {
        //console.log(data);
        this.router.navigate(['Clienti']);
      });
    }
  
  
  
}

