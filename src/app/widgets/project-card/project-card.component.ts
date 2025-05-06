import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() projectImage: string = "";
  @Input() projectInfo: string = "";
  @Input() projectName: string = "";
  @Input() projectLink: string = "";
  @Input() playStoreLink?: string;
  @Input() projectWebLink: string = "";

  openInBrowser(link:string){
    if(link != "")
      window.open(link, "_blank");
  }
}
