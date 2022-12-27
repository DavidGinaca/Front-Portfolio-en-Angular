import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/servicios/sharing.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  
  form1:FormGroup;
  data$: Observable<Boolean>;

  
  constructor(private formBuilder :FormBuilder, private authService: AuthService, private ruta:Router, private sharingService: SharingService)  { 

    this.data$ = sharingService.sharingObservable; 
    this.form1 = this.formBuilder.group(
      {
        nombreUsuario:['',[Validators.required]],
        password:['', Validators.required]
      })


    }

  

  ngOnInit(): void {
    
    Aos.init();
  }

  get nombreUsuario(){

    return this.form1.get('nombreUsuario');
  }
  get password(){

    return this.form1.get('password');
  }

  OnEnviar(event: Event){
    event.preventDefault;
    this.authService.IniciarSesion(this.form1.value).subscribe(data =>{
      this.ruta.navigate(['/portfolio']); 
    this.sharingService.sharingObservableData = false;      
      
    })
  }

  OnCerrar(){
    return this.authService.CerrarSesion;  
  }



}