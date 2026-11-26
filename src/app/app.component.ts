import { Component, HostListener, computed, signal } from '@angular/core';
import { IconComponent } from './shared/icon.component';
import { RevealDirective } from './shared/reveal.directive';
import {
  ABOUT, EDUCATION, EXPERIENCE, LANGUAGES, MORE_PROJECTS, PROFILE, PROJECTS, SKILLS, SOFT_SKILLS, STATS,
  ProjectCategory,
} from './data/portfolio.data';

type Filter = 'todos' | ProjectCategory;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly profile = PROFILE;
  readonly about = ABOUT;
  readonly stats = STATS;
  readonly skills = SKILLS;
  readonly experience = EXPERIENCE;
  readonly education = EDUCATION;
  readonly languages = LANGUAGES;
  readonly softSkills = SOFT_SKILLS;
  readonly moreProjects = MORE_PROJECTS;
  readonly year = new Date().getFullYear();

  readonly nav = [
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'cv', label: 'CV' },
    { id: 'contacto', label: 'Contacto' },
  ];

  readonly filters: { id: Filter; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'movil', label: 'Móvil' },
    { id: 'escritorio', label: 'Escritorio' },
    { id: 'web', label: 'Web' },
  ];

  readonly filter = signal<Filter>('todos');
  readonly projects = computed(() => {
    const f = this.filter();
    return f === 'todos' ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(f));
  });

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly active = signal('');

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 24);
    // Sección activa: la última cuyo inicio ya ha pasado el tercio superior de la pantalla.
    const marker = window.innerHeight / 3;
    let current = '';
    for (const item of this.nav) {
      const el = document.getElementById(item.id);
      if (el && el.getBoundingClientRect().top <= marker) current = item.id;
    }
    this.active.set(current);
  }

  go(id: string, event?: Event) {
    event?.preventDefault();
    this.menuOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
