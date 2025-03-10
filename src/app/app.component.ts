import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from "./widgets/head/head.component";
import { BodyCardComponent } from "./widgets/body-card/body-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadComponent, BodyCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() { }

  title = 'portfolio';

}
