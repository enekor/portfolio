import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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

  onClick(){
    window.open(this.project.Link, "_blank");
  }

  onButtonClick(version:number){
    if(version == 1){
      window.open(this.project.Link, "_blank");
    }else{
      window.open(this.project.Link2, "_blank");
    }
  }
}
