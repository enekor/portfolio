import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tooltip-container" 
         (mouseenter)="showTooltip = true" 
         (mouseleave)="showTooltip = false">
      <ng-content></ng-content>
      <div class="tooltip" [class.visible]="showTooltip" [attr.data-position]="position">
        {{ text }}
      </div>
    </div>
  `,
  styles: [`
    .tooltip-container {
      position: relative;
      display: inline-block;
    }

    .tooltip {
      position: absolute;
      background: rgba(30, 30, 31, 0.95);
      color: var(--text-color);
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 0.8rem;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 1000;
      backdrop-filter: blur(4px);
      border: 1px solid rgba(155, 98, 255, 0.3);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .tooltip.visible {
      opacity: 1;
      visibility: visible;
    }

    .tooltip[data-position="top"] {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(-5px);
      margin-bottom: 5px;
    }

    .tooltip[data-position="bottom"] {
      top: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(5px);
      margin-top: 5px;
    }

    .tooltip[data-position="left"] {
      right: 100%;
      top: 50%;
      transform: translateY(-50%) translateX(-5px);
      margin-right: 5px;
    }

    .tooltip[data-position="right"] {
      left: 100%;
      top: 50%;
      transform: translateY(-50%) translateX(5px);
      margin-left: 5px;
    }

    .tooltip::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border: 5px solid transparent;
    }

    .tooltip[data-position="top"]::after {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-top-color: rgba(30, 30, 31, 0.95);
    }

    .tooltip[data-position="bottom"]::after {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-bottom-color: rgba(30, 30, 31, 0.95);
    }

    .tooltip[data-position="left"]::after {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-left-color: rgba(30, 30, 31, 0.95);
    }

    .tooltip[data-position="right"]::after {
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-right-color: rgba(30, 30, 31, 0.95);
    }
  `]
})
export class TooltipComponent {
  @Input() text: string = '';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  showTooltip = false;
}
