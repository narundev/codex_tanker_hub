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
// Renders emoji 🥥 coconuts with real gravity, wall & floor bouncing
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

  public spawn(x: number | null = null, y: number = -50) {
    if (!this.canvas) return;
    const startX = x !== null ? x : Math.random() * (this.canvas.width - 60) + 30;

    this.coconuts.push({
      x: startX,
      y: y,
      vx: (Math.random() - 0.5) * 4,       // Soft horizontal drift
      vy: Math.random() * 1.2 + 0.6,        // Very slow initial downward velocity
      gravity: 0.18,                        // Very low gravity for floaty slow fall
      radius: Math.floor(Math.random() * 10) + 24, // 24-34px radius
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.12,  // Gentle lazy spin
      bounces: 0,
      maxBounces: 7,                        // More bounces for longer visible time
      color: '#653a1d'
    });
  }

  public spawnBurst(x: number | null = null, count: number = 14) {
    // Spread coconuts across a very wide horizontal area with staggered y offsets
    for (let i = 0; i < count; i++) {
      const spreadWidth = 340; // wider spread across the screen
      const offsetX = x !== null
        ? x + (Math.random() - 0.5) * spreadWidth
        : null;
      const offsetY = -40 - (i * 22); // stagger vertically
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
        c.vy = -c.vy * 0.6;
        c.vx *= 0.88;
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
        // Keep within bounds
        if (c.x - c.radius <= 0) c.x = c.radius;
        if (c.x + c.radius >= this.canvas.width) c.x = this.canvas.width - c.radius;
      }

      // Draw 🥥 emoji coconut with rotation
      this.ctx.save();
      this.ctx.translate(c.x, c.y);
      this.ctx.rotate(c.rotation);

      const fontSize = c.radius * 2;
      this.ctx.font = `${fontSize}px serif`;
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText('🥥', 0, 0);

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

// Default burst spawns 14 coconuts per click
export function triggerGlobalCoconutDrop(clientX?: number, burstCount: number = 14) {
  if (globalPhysicsInstance) {
    const x = typeof clientX === 'number' ? clientX : window.innerWidth / 2;
    globalPhysicsInstance.spawnBurst(x, burstCount);
  }
}
