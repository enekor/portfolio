import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Experience } from '../../models/experience';
import { CommonModule } from '@angular/common';
import { Titles } from '../../models/Titles';
import { Info } from '../../models/Info';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tituloSel:Titles | undefined = undefined;
  expSel:Experience | undefined = undefined;
  info:Info = new Info('Eneko Rebollo Hernandez','+34 639914542','enekorebollo@gmail.com','','https://media.licdn.com/dms/image/D4D03AQHfX3RwGHGQfQ/profile-displayphoto-shrink_200_200/0/1676305223208?e=2147483647&v=beta&t=WpwhjKdlAEcX---HS-4OK8w11dBboTnqTnWwSbUah8Q','https://github.com/enekor','https://www.linkedin.com/in/enekorebollo/')

  experiencias = [
    new Experience("Originpath","2022",["dotnet","python","angular","java","spring"],"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3_OMiz8nP0c14NvTZ-rPSYfgIDtOVW6sNQ&s"),
    new Experience("Inypsa Airtificial","2022-Actualidad",["dotnet","python","angular","blazor"],"https://pcbolsa.com/Logos/M_ES0152768612.jpg")
  ]

  titulos = [
    new Titles("Desarrollo de aplicaciones multiplataforma","","assets/certificados/dam.png"),
    new Titles("EFSET C2","https://github.com/enekor/MisCertificados/blob/almacenamiento/certificados/EF%20SET%20Certificate.pdf","assets/certificados/efset.png"),
    new Titles("Certificados android","https://github.com/enekor/MisCertificados/tree/almacenamiento/certificados/Android","assets/certificados/android.png"),
    new Titles("Certificados API","https://github.com/enekor/MisCertificados/tree/almacenamiento/certificados/Api","assets/certificados/api.png"),
    new Titles("Certificados Java/Kotlin","https://github.com/enekor/MisCertificados/tree/almacenamiento/certificados/JavaKotlin","assets/certificados/jdk.png"),
    new Titles("Certificados Git","https://github.com/enekor/MisCertificados/tree/almacenamiento/certificados/Git","assets/certificados/git.png"),
    new Titles("Certificados Javascript","https://github.com/enekor/MisCertificados/tree/almacenamiento/certificados/JS","assets/certificados/js.png"),
  ]

  lenguajes = ["dotnet", "python", "angular", "java", "spring", "blazor", "javascript", "typescript",
   "html", "css", "oraclesql","sqlite","postgresql","mysql", "kotlin","flutter","dart","csharp"
  ]

  onCv() {
    window.open(this.info.UrlCv, '_blank');
  }

  onTitulo(){
    window.open(this.tituloSel?.Url,"_blank");
  }

  selectTitulo(titulo:Titles){
    this.tituloSel = titulo;
  }

  selectExp(exp:Experience | undefined){
    this.expSel = exp; 
  }
}
