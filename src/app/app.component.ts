import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './widgets/head/head.component';
import { BodyCardComponent } from './widgets/body-card/body-card.component';
import { PageService } from './services/page.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeadComponent, BodyCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private pageService: PageService) {}
  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      offset: 50,
      delay: 100,
      disable: false,
      startEvent: 'DOMContentLoaded',
      disableMutationObserver: false,
      throttleDelay: 99,
      debounceDelay: 50,
      useClassNames: false,
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate'
    });

    // Re-initialize AOS after navigation or dynamic content changes
    this.pageService.currentPage$.subscribe(() => {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    });
  }
}
