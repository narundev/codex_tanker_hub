import { playCoconutThud } from './audio';

export interface CoconutParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  gravity: number;
  radius: number;
  rotation: number;
  vRot: number;
  bounces: number;
  maxBounces: number;
  color: string;
}

// ==========================================================================
// COCONUT PHYSICS SIMULATOR (HTML5 Canvas + Gravity + Bounce Mechanics)
// ==========================================================================
export class CoconutPhysics {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private coconuts: CoconutParticle[] = [];
  private animationFrameId: number | null = null;
  private isDestroyed: boolean = false;

  constructor(canvasOrId: string | HTMLCanvasElement) {
    if (typeof canvasOrId === 'string') {
      this.canvas = document.getElementById(canvasOrId) as HTMLCanvasElement;
    } else {
      this.canvas = canvasOrId;
    }

    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    
    this.handleResize = this.handleResize.bind(this);
    window.addEventListener('resize', this.handleResize);
    
    this.animate = this.animate.bind(this);
    this.animationFrameId = requestAnimationFrame(this.animate);
  }

  private handleResize() {
    this.resize();
  }

  public resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  public spawn(x: number | null = null, y: number = -40) {
    if (!this.canvas) return;
    const startX = x !== null ? x : Math.random() * (this.canvas.width - 60) + 30;
    
    this.coconuts.push({
      x: startX,
      y: y,
      vx: (Math.random() - 0.5) * 8,       // Horizontal drift velocity
      vy: Math.random() * 3 + 2,          // Initial downward velocity
      gravity: 0.55,                      // Gravity acceleration
      radius: Math.floor(Math.random() * 6) + 20, // 20-25px radius
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.25, // Spin velocity
      bounces: 0,
      maxBounces: 5,
      color: '#653a1d'
    });
  }

  public spawnBurst(x: number | null = null, count: number = 3) {
    for (let i = 0; i < count; i++) {
      const offsetX = x !== null ? x + (Math.random() - 0.5) * 60 : null;
      const offsetY = -40 - (i * 35);
      this.spawn(offsetX, offsetY);
    }
  }

  public animate() {
    if (this.isDestroyed || !this.canvas || !this.ctx) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.coconuts.length - 1; i >= 0; i--) {
      const c = this.coconuts[i];
      c.vy += c.gravity;
      c.x += c.vx;
      c.y += c.vy;
      c.rotation += c.vRot;

      // Floor bounce with elasticity decay
      if (c.y + c.radius >= this.canvas.height) {
        c.y = this.canvas.height - c.radius;
        c.vy = -c.vy * 0.58;
        c.vx *= 0.85;
        c.bounces++;
        playCoconutThud(); // Plays coconut impact sound
        
        if (c.bounces >= c.maxBounces) {
          this.coconuts.splice(i, 1);
          continue;
        }
      }

      // Left and right wall bounce
      if (c.x - c.radius <= 0 || c.x + c.radius >= this.canvas.width) {
        c.vx = -c.vx * 0.8;
      }

      // Draw realistic cartoon coconut with husk and 3 face dots
      this.ctx.save();
      this.ctx.translate(c.x, c.y);
      this.ctx.rotate(c.rotation);

      // Outer brown husk
      this.ctx.fillStyle = '#5c3116';
      this.ctx.beginPath();
      this.ctx.ellipse(0, 0, c.radius, c.radius * 1.15, 0, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.lineWidth = 2.5;
      this.ctx.strokeStyle = '#2b1407';
      this.ctx.stroke();

      // Coconut 3 face indentations
      this.ctx.fillStyle = '#2b1407';
      this.ctx.beginPath();
      this.ctx.arc(-5, -6, 3, 0, Math.PI * 2);
      this.ctx.arc(5, -6, 3, 0, Math.PI * 2);
      this.ctx.arc(0, 3, 3, 0, Math.PI * 2);
      this.ctx.fill();

      // Fiber texture marks
      this.ctx.strokeStyle = '#854d24';
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(-10, 10);
      this.ctx.lineTo(-6, 16);
      this.ctx.moveTo(8, 8);
      this.ctx.lineTo(12, 14);
      this.ctx.stroke();

      this.ctx.restore();
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  }

  public destroy() {
    this.isDestroyed = true;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.handleResize);
    this.coconuts = [];
  }
}

// Singleton reference for global event dispatch
let globalPhysicsInstance: CoconutPhysics | null = null;

export function setGlobalCoconutPhysics(instance: CoconutPhysics | null) {
  globalPhysicsInstance = instance;
}

export function getGlobalCoconutPhysics(): CoconutPhysics | null {
  return globalPhysicsInstance;
}

export function triggerGlobalCoconutDrop(clientX?: number, burstCount: number = 4) {
  if (globalPhysicsInstance) {
    const x = typeof clientX === 'number' ? clientX : window.innerWidth / 2;
    globalPhysicsInstance.spawnBurst(x, burstCount);
  }
}
