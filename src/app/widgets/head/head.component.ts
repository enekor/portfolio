import { Component, Input, OnInit } from '@angular/core';
import { InfoChipComponent } from "../info-chip/info-chip.component";
import { GithubComponent } from "../icons/github/github.component";
import { MailComponent } from "../icons/mail/mail.component";
import { LinkedinComponent } from "../icons/linkedin/linkedin.component";
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [InfoChipComponent, GithubComponent, MailComponent, LinkedinComponent],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent implements OnInit {
  constructor(private pageService: PageService) {}
  
  page:number = 0;

  ngOnInit() {
    this.pageService.currentPage.subscribe(page => this.page = page);
  }

  changePage(page: number) {
    this.pageService.changePage(page);
  }

  openLinkInNewTab(url: string) {
    window.open(url, '_blank');
  }
}
