import { Component } from '@angular/core';
import { SkillCardComponent } from "../../skill-card/skill-card.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [SkillCardComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
