import { Component, Input, OnInit } from '@angular/core';
import { AboutMeComponent } from "./about-me/about-me.component";
import { ProjectsComponent } from "./projects/projects.component";
import { CvComponent } from "./cv/cv.component";
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-body-card',
  standalone: true,
  imports: [AboutMeComponent, ProjectsComponent, CvComponent],
  templateUrl: './body-card.component.html',
  styleUrl: './body-card.component.css'
})
export class BodyCardComponent implements OnInit{

  constructor(private pageService:PageService){}

  page:number = 0;

  ngOnInit(): void {
    this.pageService.currentPage.subscribe(page => this.page = page);
  }
}
