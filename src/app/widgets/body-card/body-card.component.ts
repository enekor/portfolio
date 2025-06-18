import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AboutMeComponent } from "./about-me/about-me.component";
import { ProjectsComponent } from "./projects/projects.component";
import { CvComponent } from "./cv/cv.component";
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-body-card',
  standalone: true,
  imports: [AsyncPipe, CommonModule, AboutMeComponent, ProjectsComponent, CvComponent],
  template: `
    <div class="bodyCard">
      <ng-container [ngSwitch]="pageService.currentPage$ | async">
        <app-about-me *ngSwitchCase="0"></app-about-me>
        <app-projects *ngSwitchCase="1"></app-projects>
        <app-cv *ngSwitchCase="2"></app-cv>
      </ng-container>
    </div>
  `,
  styleUrl: './body-card.component.css'
})
export class BodyCardComponent {
  constructor(public pageService: PageService) {}
}
