import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fatture } from '../classes/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-new-fatture',
  templateUrl: './new-fatture.component.html',
  styleUrls: ['./new-fatture.component.css']
})
export class NewFattureComponent implements OnInit {

  fatture: Fatture = new Fatture();

  constructor(
    private router:Router,
    private  fattureService:FattureService
  ) { }

  ngOnInit(): void {
  }
  createFatture(){
    this.fattureService.addFatture(this.fatture).subscribe(data => {
      //console.log(data);
      this.router.navigate(['Fatture']);
    });
  }

}
