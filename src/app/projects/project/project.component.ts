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

  onClick(){
    window.open(this.project.Link, "_blank");
  }
}
