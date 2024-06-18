import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Project } from '../../../models/Project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() project:Project = new Project("","", "",[],"")
  @Input() id:number = 0
  @Input() onMouseEnter:Function = (p:Project) => {}
  @Input() onMouseLeave:Function = (p:Project) => {}

  onHover() {
    let body = document.getElementById(this.id.toString())
    body?.classList.add("open")
    body?.classList.remove('hidden')
    
    body = document.getElementById('c'+this.id.toString())
    body?.classList.add("open")
    body?.classList.remove('hidden')

    this.onMouseEnter(this.project)

  }

  onLeave(){
    let body = document.getElementById(this.id.toString())
    body?.classList.remove("open")
    body?.classList.add('hidden')

    body = document.getElementById('c'+this.id.toString())
    body?.classList.remove("open")
    body?.classList.add('hidden')

    this.onMouseLeave(this.project)
  }

}
