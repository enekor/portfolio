import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() titulo:string = ""
  @Input() descripcion:string = ""
  @Input() imagen:string = ""
  @Input() tecnologias:string[] = []
  @Input() id:number = 0

  onHover() {
    let body = document.getElementById(this.id.toString())
    body?.classList.add("open")
    body?.classList.remove('hidden')
    
    body = document.getElementById('c'+this.id.toString())
    body?.classList.add("open")
    body?.classList.remove('hidden')

  }

  onLeave(){
    let body = document.getElementById(this.id.toString())
    body?.classList.remove("open")
    body?.classList.add('hidden')

    body = document.getElementById('c'+this.id.toString())
    body?.classList.remove("open")
    body?.classList.add('hidden')


  }

}
