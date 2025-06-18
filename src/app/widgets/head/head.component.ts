import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { InfoChipComponent } from '../info-chip/info-chip.component';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [CommonModule, AsyncPipe, InfoChipComponent],
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  constructor(public pageService: PageService) {}

  navigate(page: number): void {
    this.pageService.setPage(page);
  }

  openLink(link: string): void {
    if (link.startsWith('mailto:')) {
      window.location.href = link;
    } else {
      window.open(link, '_blank', 'noopener noreferrer');
    }
  }
}
