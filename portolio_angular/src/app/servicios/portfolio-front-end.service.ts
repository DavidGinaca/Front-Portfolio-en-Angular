import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioFrontEndService {

  acercaDe: string = 'http://localhost:7070/ver/AcercaDe';
  educacion: string = 'http://localhost:7070/ver/educacion';
  expLaboral: string = 'http://localhost:7070/ver/expLab';
  


  constructor( private http: HttpClient) {}

  acercaDeDatos(): Observable<any> {
    
     return this.http.get(this.acercaDe);
     
  }

  educacionDatos(): Observable<any> {

    return this.http.get(this.educacion);
  }

  expLabDatos(): Observable<any>{

    return this.http.get(this.expLaboral);
  }

}
