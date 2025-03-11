import { Component } from '@angular/core';
import { SkillCardComponent } from "../../skill-card/skill-card.component";
import { MobileComponent } from "../../icons/mobile/mobile.component";
import { BackendComponent } from "../../icons/backend/backend.component";
import { WebComponent } from "../../icons/web/web.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [SkillCardComponent, MobileComponent, BackendComponent, WebComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
