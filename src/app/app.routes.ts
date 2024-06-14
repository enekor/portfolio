import { Routes } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'', component:PortadaComponent },
    {path:'about-me', component: HomeComponent},
    {path:'**', component: PortadaComponent}
  ];
