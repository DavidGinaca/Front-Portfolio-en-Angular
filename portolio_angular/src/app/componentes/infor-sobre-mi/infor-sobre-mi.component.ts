import { Component, OnInit } from '@angular/core';
import { PortfolioFrontEndService } from 'src/app/servicios/portfolio-front-end.service';
import * as Aos from 'aos';
import { AuthService } from 'src/app/servicios/auth.service';
import { SharingService } from 'src/app/servicios/sharing.service';
import { Observable } from 'rxjs';
import { ReactiveFormsModule, FormControl, FormBuilder } from '@angular/forms';
import { __values } from 'tslib';




@Component({
  selector: 'app-infor-sobre-mi',
  templateUrl: './infor-sobre-mi.component.html',
  styleUrls: ['./infor-sobre-mi.component.css']
})
export class InforSobreMiComponent implements OnInit {

  acerca : any;
  data$: Observable<Boolean>;
 
 
  
  constructor(private datosPortfolio: PortfolioFrontEndService,  private authService: AuthService, private sharingService: SharingService) {
    this.data$ = sharingService.sharingObservable;    
  }

  ngOnInit(): void { 
 
    this.datosPortfolio.acercaDeDatos().subscribe(data => {

      this.acerca=data[0];     
  });
  Aos.init();
}




}
