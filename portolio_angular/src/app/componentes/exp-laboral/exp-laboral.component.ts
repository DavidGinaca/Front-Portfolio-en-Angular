import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { PortfolioFrontEndService } from 'src/app/servicios/portfolio-front-end.service';



@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css']
})
export class ExpLaboralComponent implements OnInit {

  experiencia: any;
  constructor( private datoPorf: PortfolioFrontEndService) { }

  ngOnInit(): void {

    this.datoPorf.expLabDatos().subscribe(data => {

     this.experiencia = data;
    })

   Aos.init(); 
  }

}
