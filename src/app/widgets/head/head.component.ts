import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { InfoChipComponent } from '../info-chip/info-chip.component';
import { TooltipComponent } from '../../shared/tooltip/tooltip.component';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [CommonModule, AsyncPipe, InfoChipComponent, TooltipComponent],
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit, OnDestroy {
  fullText = 'ENEKO REBOLLO HERNÁNDEZ';
  displayText = '';
  private typewriterInterval: any;
  
  constructor(
    public pageService: PageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Delay para asegurar que el componente esté completamente renderizado
    setTimeout(() => {
      this.startTypewriter();
    }, 500);
  }

  ngOnDestroy() {
    if (this.typewriterInterval) {
      clearInterval(this.typewriterInterval);
    }
  }

  private startTypewriter() {
    this.displayText = ''; // Reset text
    let i = 0;
    this.typewriterInterval = setInterval(() => {
      if (i < this.fullText.length) {
        this.displayText += this.fullText.charAt(i);
        this.cdr.markForCheck(); // Forzar detección de cambios
        i++;
      } else {
        clearInterval(this.typewriterInterval);
      }
    }, 80);
  }

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
