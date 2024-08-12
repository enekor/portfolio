import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArrowDownComponent } from "../globalComponents/arrow-down/arrow-down.component";

@Component({
    selector: 'app-portada',
    standalone: true,
    templateUrl: './portada.component.html',
    styleUrl: './portada.component.css',
    imports: [FontAwesomeModule, CommonModule, ArrowDownComponent]
})
export class PortadaComponent {



  goToAboutMe() {
    window.location.href = '/about-me'
  }

  goToMyProjects(){
    window.location.href = '/my-projects'
  }
}
