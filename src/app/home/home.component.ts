import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare, faBriefcase, faEnvelope, faGear, faPen, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Experience } from '../../models/experience';
import { CommonModule } from '@angular/common';
import { Titles } from '../../models/Titles';
import { Project } from '../../models/Project';

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
  faLink = faArrowUpRightFromSquare

  experiencias = [
    new Experience("Originpath","2022",[".NET","Python","Angular","Java","SpringBoot"],"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3_OMiz8nP0c14NvTZ-rPSYfgIDtOVW6sNQ&s"),
    new Experience("Inypsa Airtificial","2022-Actualidad",[".NET","Python","Angular","Blazor"],"https://pcbolsa.com/Logos/M_ES0152768612.jpg")
  ]

  titulos = [
    new Titles("Desarrollo de aplicaciones multiplataforma","","/certificados/dam.png"),
    new Titles("EFSET C2","https://github.com/enekor/MisCertificados/blob/almacenamiento/certificados/EF%20SET%20Certificate.pdf","/certificados/efset.png"),
    new Titles("Certificados android","https://github.com/enekor/MisCertificados/tree/almacenamiento/certificados/Android","/certificados/android.png"),
    new Titles("Certificados API","https://github.com/enekor/MisCertificados/tree/almacenamiento/certificados/Api","/certificados/api.png"),
    new Titles("Certificados Java/Kotlin","https://github.com/enekor/MisCertificados/tree/almacenamiento/certificados/JavaKotlin","/certificados/jdk.png"),
    new Titles("Certificados Git","https://github.com/enekor/MisCertificados/tree/almacenamiento/certificados/Git","/certificados/git.png"),
    new Titles("Certificados Javascript","https://github.com/enekor/MisCertificados/tree/almacenamiento/certificados/JS","/certificados/js.png"),
  ]

  lenguajes = [
    "c%23-%23239120",
    "dart-%230175C2",
    "html5-%23E34F26",
    "kotlin-%237F52FF",
    "markdown-%23000000",
    "python-3670A0",
    "firebase-%23039BE5",
    ".NET-5C2D91",
    "blazor-%235C2D91",
    "bootstrap-%238511FA",
    "Flutter-%2302569B",
    "mysql-%2300000f",
    "Firebase-039BE5",
    "MariaDB-003545",
    "sqlite-%2307405e",
    "postgres-%23316192",
    "docker-%230db7ed",
    "sonarqube-4E9BCD",
    "Gradle-02303A",
    "Postman-FF6C37",
    "SonarQube-black",
    "java-%23ED8B00"
  ]
}
