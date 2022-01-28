import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { ComuneService } from '../services/comune.service';

@Component({
  selector: 'app-detail-comune',
  templateUrl: './detail-comune.component.html',
  styleUrls: ['./detail-comune.component.css']
})
export class DetailComuneComponent implements OnInit {
  dataComune:Comune= new Comune() ;
  constructor(
    private route:ActivatedRoute ,
    private router:Router,
    private comuneService:ComuneService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.comuneService.getComune(params['id']).subscribe(data=> this.dataComune=this.dataComune);
     
    });
  }
  }
