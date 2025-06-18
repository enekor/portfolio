import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-container">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
      <p class="loading-text">Cargando...</p>
    </div>
  `,
  styles: [`
    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      min-height: 200px;
    }

    .spinner {
      width: 60px;
      height: 60px;
      position: relative;
    }

    .double-bounce1, .double-bounce2 {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: var(--gradient-primary);
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      animation: sk-bounce 2.0s infinite ease-in-out;
    }

    .double-bounce2 {
      animation-delay: -1.0s;
    }

    @keyframes sk-bounce {
      0%, 100% {
        transform: scale(0);
      } 50% {
        transform: scale(1);
      }
    }

    .loading-text {
      margin-top: 20px;
      color: var(--text-color);
      font-size: 0.9rem;
      opacity: 0.7;
    }
  `]
})
export class LoadingSpinnerComponent {}
