import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-chip',
  standalone: true,
  imports: [],
  templateUrl: './info-chip.component.html',
  styleUrl: './info-chip.component.css'
})
export class InfoChipComponent {
  @Input() textToShow: string = '';
}
