import { Component } from '@angular/core';
import { InfoChipComponent } from "../info-chip/info-chip.component";
import { GithubComponent } from "../icons/github/github.component";
import { MailComponent } from "../icons/mail/mail.component";
import { LinkedinComponent } from "../icons/linkedin/linkedin.component";

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [InfoChipComponent, GithubComponent, MailComponent, LinkedinComponent],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  openLinkInNewTab(url: string): void {
    window.open(url, '_blank');
  }
}
