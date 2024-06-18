import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() titulo:string = ""
  @Input() descripcion:string = ""
  @Input() imagen:string = ""
  @Input() tecnologias:string[] = []
}
