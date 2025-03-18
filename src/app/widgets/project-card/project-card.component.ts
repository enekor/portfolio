import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() projectImage: string = "";
  @Input() projectInfo: string = "";
  @Input() projectName: string = "";
  @Input() projectLink: string = "";
  @Input() projectWebLink: string = "";

  openInBrowser(link:string){
    if(link != "")
      window.open(link, "_blank");
  }
}
