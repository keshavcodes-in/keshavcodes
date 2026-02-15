/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

const useCanvasCursor = () => {
  // Detect if device has touch screen - exit early for mobile
  const isTouchDevice = () => {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      (navigator as any).msMaxTouchPoints > 0
    );
  };

  useEffect(() => {
    // Don't run on touch devices
    if (isTouchDevice()) {
      return;
    }

    let ctx: any;
    const pos: any = {};
    let lines: any[] = [];
    const E = {
      debug: false,
      friction: 0.5,
      trails: 10,
      size: 12,
      dampening: 0.25,
      tension: 0.98,
    };

    function Oscillator(this: any, e?: any) {
      this.init(e || {});
    }

    Oscillator.prototype = {
      init: function (e: any) {
        this.phase = e.phase || 0;
        this.offset = e.offset || 0;
        this.frequency = e.frequency || 0.001;
        this.amplitude = e.amplitude || 1;
      },
      update: function () {
        this.phase += this.frequency;
        return this.offset + Math.sin(this.phase) * this.amplitude;
      },
      value: function () {
        return this.offset + Math.sin(this.phase) * this.amplitude;
      },
    };

    function Node(this: any) {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
    }

    function Line(this: any, e?: any) {
      this.init(e || {});
    }

    Line.prototype = {
      init: function (e: any) {
        this.spring = e.spring + 0.1 * Math.random() - 0.02;
        this.friction = E.friction + 0.01 * Math.random() - 0.002;
        this.nodes = [];
        for (let n = 0; n < E.size; n++) {
          const t = new (Node as any)();
          t.x = pos.x;
          t.y = pos.y;
          this.nodes.push(t);
        }
      },
      update: function () {
        let e = this.spring;
        let t = this.nodes[0];
        t.vx += (pos.x - t.x) * e;
        t.vy += (pos.y - t.y) * e;
        for (let i = 0, a = this.nodes.length; i < a; i++) {
          t = this.nodes[i];
          if (0 < i) {
            const n = this.nodes[i - 1];
            t.vx += (n.x - t.x) * e;
            t.vy += (n.y - t.y) * e;
            t.vx += n.vx * E.dampening;
            t.vy += n.vy * E.dampening;
          }
          t.vx *= this.friction;
          t.vy *= this.friction;
          t.x += t.vx;
          t.y += t.vy;
          e *= E.tension;
        }
      },
      draw: function () {
        let e, t;
        let n = this.nodes[0].x;
        let i = this.nodes[0].y;
        ctx.beginPath();
        ctx.moveTo(n, i);
        const o = this.nodes.length - 2;
        for (let a = 1; a < o; a++) {
          e = this.nodes[a];
          t = this.nodes[a + 1];
          n = 0.5 * (e.x + t.x);
          i = 0.5 * (e.y + t.y);
          ctx.quadraticCurveTo(e.x, e.y, n, i);
        }
        e = this.nodes[o];
        t = this.nodes[o + 1];
        ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
        ctx.stroke();
        ctx.closePath();
      },
    };

    function onMousemove(e: any) {
      function o() {
        lines = [];
        for (let e = 0; e < E.trails; e++) {
          lines.push(
            new (Line as any)({ spring: 0.4 + (e / E.trails) * 0.025 }),
          );
        }
      }
      function c(e: any) {
        if (e.touches) {
          pos.x = e.touches[0].pageX;
          pos.y = e.touches[0].pageY;
        } else {
          pos.x = e.clientX;
          pos.y = e.clientY;
        }
        e.preventDefault();
      }
      function l(e: any) {
        if (e.touches.length === 1) {
          pos.x = e.touches[0].pageX;
          pos.y = e.touches[0].pageY;
        }
      }
      document.removeEventListener('mousemove', onMousemove);
      document.removeEventListener('touchstart', onMousemove);
      document.addEventListener('mousemove', c);
      document.addEventListener('touchmove', c);
      document.addEventListener('touchstart', l);
      c(e);
      o();
      render();
    }

    function render() {
      if (ctx.running) {
        ctx.globalCompositeOperation = 'source-over';
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalCompositeOperation = 'lighter';
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.18)';
        ctx.lineWidth = 1;
        for (let t = 0; t < E.trails; t++) {
          const e = lines[t];
          e.update();
          e.draw();
        }
        ctx.frame++;
        window.requestAnimationFrame(render);
      }
    }

    function resizeCanvas() {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
    }

    const renderCanvas = function () {
      const canvas = document.getElementById('canvas') as HTMLCanvasElement;
      if (!canvas) return;

      ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.running = true;
      ctx.frame = 1;

      new (Oscillator as any)({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
      });

      document.addEventListener('mousemove', onMousemove);
      document.addEventListener('touchstart', onMousemove);
      document.body.addEventListener('orientationchange', resizeCanvas);
      window.addEventListener('resize', resizeCanvas);
      window.addEventListener('focus', () => {
        if (!ctx.running) {
          ctx.running = true;
          render();
        }
      });
      window.addEventListener('blur', () => {
        ctx.running = true;
      });
      resizeCanvas();
    };

    renderCanvas();

    return () => {
      if (ctx) {
        ctx.running = false;
      }
      document.removeEventListener('mousemove', onMousemove);
      document.removeEventListener('touchstart', onMousemove);
      document.body.removeEventListener('orientationchange', resizeCanvas);
      window.removeEventListener('resize', resizeCanvas);
    };
   
  }, []);
};

export default useCanvasCursor;
