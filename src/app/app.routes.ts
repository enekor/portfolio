import { Routes } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {path:'', component:PortadaComponent },
    {path:'about-me', component: HomeComponent},
    {path:'my-projects', component: ProjectsComponent},



    
    {path:'**', redirectTo:''},
  ];
