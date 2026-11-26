import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export type IconName =
  | 'github' | 'linkedin' | 'mail' | 'download' | 'external' | 'play' | 'web'
  | 'arrow-right' | 'arrow-up-right' | 'pin' | 'server' | 'phone' | 'globe' | 'spark'
  | 'eye' | 'terminal' | 'puzzle' | 'menu' | 'close' | 'file' | 'briefcase' | 'cap' | 'chat';

// Trazos estilo "lucide" (24x24, stroke). Los logos de marca van con fill.
const STROKE: Partial<Record<IconName, string>> = {
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  download: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
  external: '<path d="M14 4h6v6"/><path d="M10 14 20 4"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>',
  web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  'arrow-up-right': '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
  pin: '<path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  phone: '<rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M11 18h2"/>',
  spark: '<path d="M12 3l1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9z"/><path d="M19 17l.7 1.8L21.5 19.5l-1.8.7L19 22l-.7-1.8-1.8-.7 1.8-.7z"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/><path d="M3 3v3M3 3h3M21 3v3M21 3h-3M3 21v-3M3 21h3M21 21v-3M21 21h-3"/>',
  terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3"/><path d="M13 15h4"/>',
  puzzle: '<path d="M10 3h4v2.5a1.5 1.5 0 0 0 3 0V3h2a2 2 0 0 1 2 2v4h-2.5a1.5 1.5 0 0 0 0 3H21v5a2 2 0 0 1-2 2h-5v-2.5a1.5 1.5 0 0 0-3 0V19H5a2 2 0 0 1-2-2v-5h2.5a1.5 1.5 0 0 0 0-3H3V5a2 2 0 0 1 2-2z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>',
  cap: '<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
};

const FILL: Partial<Record<IconName, string>> = {
  github:
    '<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/>',
  linkedin:
    '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>',
  play:
    '<path d="M3.6 1.8a1.5 1.5 0 0 0-.6 1.2v18a1.5 1.5 0 0 0 .6 1.2L13.4 12zM14.8 13.4l2.6 2.6-11.7 6.7zM14.8 10.6 5.7 1.3l11.7 6.7zM18.7 8.8l3 1.7a1.7 1.7 0 0 1 0 3l-3 1.7-2.9-3.2z"/>',
};

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (fill) {
      <svg viewBox="0 0 24 24" [attr.width]="size" [attr.height]="size" fill="currentColor" aria-hidden="true" [innerHTML]="fill"></svg>
    } @else {
      <svg viewBox="0 0 24 24" [attr.width]="size" [attr.height]="size" fill="none" stroke="currentColor"
        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" [innerHTML]="stroke"></svg>
    }
  `,
  styles: [':host{display:inline-flex;line-height:0;flex-shrink:0}'],
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;
  @Input() size = 20;

  constructor(private sanitizer: DomSanitizer) {}

  // Las rutas son constantes de este archivo (no entrada de usuario), así que es seguro saltarse el sanitizador.
  get fill(): SafeHtml | null {
    const svg = FILL[this.name];
    return svg ? this.trust(svg) : null;
  }
  get stroke(): SafeHtml {
    return this.trust(STROKE[this.name] ?? '');
  }

  private trust(svg: string): SafeHtml {
    let cached = CACHE.get(svg);
    if (!cached) {
      cached = this.sanitizer.bypassSecurityTrustHtml(svg);
      CACHE.set(svg, cached);
    }
    return cached;
  }
}

const CACHE = new Map<string, SafeHtml>();
