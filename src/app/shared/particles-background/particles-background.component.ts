import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  update(canvasWidth: number, canvasHeight: number): void;
  draw(ctx: CanvasRenderingContext2D): void;
}

class ParticleImpl implements Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
    if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'rgba(155, 98, 255, 0.6)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

@Component({
  selector: 'app-particles-background',
  standalone: true,
  template: `
    <canvas #particlesCanvas class="particles-canvas"></canvas>
  `,
  styles: [`
    .particles-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
    }
  `]
})
export class ParticlesBackgroundComponent implements OnInit, OnDestroy {
  @ViewChild('particlesCanvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId!: number;

  ngOnInit() {
    this.initCanvas();
    this.createParticles();
    this.animate();
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private initCanvas() {
    const canvas = this.canvas.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  }

  private createParticles() {
    const particleCount = window.innerWidth < 768 ? 30 : 50;
    
    for (let i = 0; i < particleCount; i++) {
      this.particles.push(new ParticleImpl(
        Math.random() * this.canvas.nativeElement.width,
        Math.random() * this.canvas.nativeElement.height
      ));
    }
  }

  private animate() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    
    this.particles.forEach(particle => {
      particle.update(this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      particle.draw(this.ctx);
    });

    this.connectParticles();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  private connectParticles() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const distance = Math.sqrt(
          Math.pow(this.particles[i].x - this.particles[j].x, 2) +
          Math.pow(this.particles[i].y - this.particles[j].y, 2)
        );

        if (distance < 100) {
          this.ctx.strokeStyle = `rgba(155, 98, 255, ${0.3 * (1 - distance / 100)})`;
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }
}
