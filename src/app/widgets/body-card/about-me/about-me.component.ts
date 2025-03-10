import { Component } from '@angular/core';
import { SkillCardComponent } from "../../skill-card/skill-card.component";
import { MobileComponent } from "../../icons/mobile/mobile.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [SkillCardComponent, MobileComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
