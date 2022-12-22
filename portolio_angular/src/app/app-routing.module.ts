import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Error404Component } from "./componentes/error404/error404.component";


import { PortfolioIniComponent } from "./componentes/portfolio-ini/portfolio-ini.component";



const routes: Routes = [
    {path: 'portfolio', component: PortfolioIniComponent},
    {path: '', redirectTo :'portfolio', pathMatch:'full' },
    {path: '**', component: Error404Component}
    


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}