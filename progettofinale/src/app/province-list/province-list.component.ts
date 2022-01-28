import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { Province } from '../classes/province';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.css']
})
export class ProvinceListComponent implements OnInit {
  
  dataProvince:Province[]=[];

  constructor( 
    private provinceService:ProvinceService,
    private router:Router) { }

  ngOnInit(): void {
   this.provinceService.getAllProvince().subscribe(data=>this.dataProvince=data.content);
    
  }
  remove(item: Province) {
    this.provinceService.removeProvince(item).subscribe(data=>console.log('elemento eliminato'+data))
     
  
    }
}
