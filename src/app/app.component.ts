import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from "./widgets/head/head.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
