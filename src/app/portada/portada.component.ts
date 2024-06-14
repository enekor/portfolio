import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css'
})
export class PortadaComponent {
  goToAboutMe() {
    window.location.href = '/about-me';
  }
}
