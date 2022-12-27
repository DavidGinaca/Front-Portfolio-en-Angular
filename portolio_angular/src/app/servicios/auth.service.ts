import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="http://localhost:7070";

  currentUserSubject : BehaviorSubject<any>;

  
  
  constructor(private http:HttpClient) {

    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
   }

   IniciarSesion(credenciales:any) : Observable<any>{
      return this.http.post(this.url + "/auth/login", credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      console.log(data);
      return data;     
    })) 
   }


   
   get UsuarioAutenticado(){
   return this.currentUserSubject.value;
   }

   CerrarSesion(){
    localStorage.removeItem('currentUser');    
  }
   
   
   
}