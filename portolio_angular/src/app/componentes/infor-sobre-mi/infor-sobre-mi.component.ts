import { Component, OnInit } from '@angular/core';
import { PortfolioFrontEndService } from 'src/app/servicios/portfolio-front-end.service';
import * as Aos from 'aos';
import { AuthService } from 'src/app/servicios/auth.service';



@Component({
  selector: 'app-infor-sobre-mi',
  templateUrl: './infor-sobre-mi.component.html',
  styleUrls: ['./infor-sobre-mi.component.css']
})
export class InforSobreMiComponent implements OnInit {

  acerca : any;
  isLogged= false;
 
  
  constructor(private datosPortfolio: PortfolioFrontEndService,  private authService: AuthService) {
  
  }

  ngOnInit(): void { 
 
    this.datosPortfolio.acercaDeDatos().subscribe(data => {

      this.acerca=data[0];     
  });
  Aos.init();
}


}
