import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { DataComune } from '../classes/data-comune';
import { ComuneService } from '../services/comune.service';

@Component({
  selector: 'app-comuni-list',
  templateUrl: './comuni-list.component.html',
  styleUrls: ['./comuni-list.component.css']
})
export class ComuniListComponent implements OnInit {
   
  dataComune:Comune[]=[];

  constructor(
     private comuneService:ComuneService,
     private  router:Router
    ) { }

  


  ngOnInit(): void {
    this.comuneService.getAllComune().subscribe(data=> this.dataComune=data.content);
    
  }
  detail(id:number){
    // Comune/:id
     //alert(id)
    this.router.navigate(['Comune',id])
   }
 
  remove(item: Comune) {
    this.comuneService.removeComune(item).subscribe(data=>console.log('elemento eliminato'+data))
     
  
    }
  }
