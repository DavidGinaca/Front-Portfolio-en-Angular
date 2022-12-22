import { Component, OnInit } from '@angular/core';
import { PortfolioFrontEndService } from 'src/app/servicios/portfolio-front-end.service';
import * as Aos from 'aos';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  edu: any;
  constructor(private datoPorfolio: PortfolioFrontEndService)  { }

  ngOnInit(): void {

    this.datoPorfolio.educacionDatos().subscribe(data => {

      this.edu= data;
    });
   
    Aos.init();
  }

}