import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faEnvelope, faGear, faPen, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Experience } from '../../models/experience';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faEmail = faEnvelope
  faPhone = faPhone
  faWork = faBriefcase
  faBrain = faGear
  faTitulitis = faPen

  experiencias = [
    new Experience("Originpath","2022",[".NET","Python","Angular","Java","SpringBoot"],"https://media.licdn.com/dms/image/C4D0BAQFSjv71UB9YDA/company-logo_200_200/0/1630493257646/originpath_logo?e=2147483647&v=beta&t=GSYMxaDibGbpgqB25AcDOrLuwDxVyLo1eMQm0O9Tct4"),
    new Experience("Inypsa Airtificial","2022-Actualidad",[".NET","Python","Angular","Blazor"],"https://pcbolsa.com/Logos/M_ES0152768612.jpg")
  ]
}
