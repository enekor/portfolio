import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

/** Añade la clase `is-visible` cuando el elemento entra en pantalla (animación de aparición). */
@Directive({ selector: '[appReveal]', standalone: true })
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay = 0;
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    const node = this.el.nativeElement;
    node.classList.add('reveal');
    node.style.setProperty('--reveal-delay', `${this.revealDelay}ms`);

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          node.classList.add('is-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
