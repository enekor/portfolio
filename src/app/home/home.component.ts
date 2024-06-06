import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faEnvelope, faGear, faPen, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faEmail = faEnvelope
  faPhone = faPhone
  faWork = faBriefcase
  faBrain = faGear
  faTitulitis = faPen
}
