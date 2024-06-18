import { Component } from '@angular/core';
import { Project } from '../../models/Project';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from "./project/project.component";
import { Console, log } from 'console';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    imports: [FontAwesomeModule, CommonModule, ProjectComponent]
})
export class ProjectsComponent {
  selectedProject:Project = new Project("Seleccione un proyecto para ver mas información","", "",[],"")
  projects = [
    new Project("Gastoscopio","/projects/gastoscopio.jpg","https://github.com/enekor/Gastoscopio",["Flutter","Firebase"],"Aplicación de gestión de gastos"),
    new Project("BTools","/projects/btools.jpg","https://github.com/enekor/BTools",["Flutter","Firebase"],"Aplicación de herramientas básicas"),
    new Project("PokeCounter","/projects/pokecounter.jpg", "https://github.com/enekor/PokeCounter",["Kotlin","Android Jetpack"],"Aplicación de conteo de racha de pokemon")
  ]

  onMouseEnter(p:Project){
    console.log('Pito gigante')

    this.selectedProject = p
    console.log(this.selectedProject)
    
  }

  onMouseLeave(p:Project){
    this.selectedProject = new Project("Seleccione un proyecto para ver mas información","", "",[],"")
  }
}
