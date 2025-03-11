import { Component, Input } from '@angular/core';
import { GithubComponent } from "../icons/github/github.component";
import { OpenInBrowserComponent } from "../icons/open-in-browser/open-in-browser.component";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [GithubComponent, OpenInBrowserComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() projectImage: string = "";
  @Input() projectInfo: string = "";
  @Input() projectName: string = "";
  @Input() projectLink: string = "";
  @Input() projectWebLink: string = "";

}
