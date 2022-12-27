import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { InforSobreMiComponent } from './componentes/infor-sobre-mi/infor-sobre-mi.component';
import { ExpLaboralComponent } from './componentes/exp-laboral/exp-laboral.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioIniComponent } from './componentes/portfolio-ini/portfolio-ini.component';
import { Error404Component } from './componentes/error404/error404.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CoreModule } from './core/core.module';






@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InforSobreMiComponent,
    ExpLaboralComponent,
    EducacionComponent,
    PortfolioIniComponent,
    Error404Component,
    ContactoComponent,
    FooterComponent,
    
    
      
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
