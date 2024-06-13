import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { PortadaComponent } from '../portada/portada.component';

const routes: Routes = [
  {path:'/', component:PortadaComponent },
  {path:'/MyInfo', component: HomeComponent},
  {path:'**', component: PortadaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MyModuleRoutingModule { }
