import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fatture } from '../classes/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture-list',
  templateUrl: './fatture-list.component.html',
  styleUrls: ['./fatture-list.component.css']
})
export class FattureListComponent implements OnInit {

  dataFattura:Fatture[]=[];

  constructor(
     private fattureService:FattureService,
     private router:Router,
     private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.fattureService.getFattura().subscribe(data=> this. dataFattura=data.content);
    
  }

}
