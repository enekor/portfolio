import { Component } from '@angular/core';
import { Project } from '../../models/Project';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from "./project/project.component";

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    imports: [FontAwesomeModule, CommonModule, ProjectComponent]
})
export class ProjectsComponent {
  tecnologiasSeleccionadas:string[] = []
  projects = [
    new Project("Gastoscopio","/projects/gastoscopio.jpg","https://github.com/enekor/Gastoscopio",["Flutter","Firebase"],"Aplicación de gestión de gastos"),
    new Project("BTools","/projects/btools.jpg","https://github.com/enekor/BTools",["Flutter","Firebase"],"Aplicación de herramientas básicas"),
    new Project("PokeCounter","/projects/pokecounter.jpg", "https://github.com/enekor/PokeCounter",["Kotlin","Android Jetpack"],"Aplicación de conteo de racha de pokemon")
  ]

  onMouseEnter(p:Project){
    console.log('Pito gigante')
    document.getElementById('sel-proj-name')!.innerText = p.Nombre

    let lis:string[] = []
    for(let t of p.Tecnologias){
      lis.push("<li>"+t+"</li>")
    }
    document.getElementById('sel-tecnologias')!.innerHTML = lis.join('')
  }

  onMouseLeave(p:Project){
  }
}
