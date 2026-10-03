import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };

export function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const pointer = { x: -1000, y: -1000 };
    let nodes: Node[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(
        76,
        Math.max(28, Math.floor((width * height) / 26000)),
      );
      nodes = Array.from({ length: count }, (_, index) => ({
        x: (index * 137.5) % width,
        y: (index * 83.3) % height,
        vx: ((index % 5) - 2) * 0.045,
        vy: ((index % 7) - 3) * 0.035,
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      nodes.forEach((node, index) => {
        if (!reduceMotion) {
          const dx = node.x - pointer.x;
          const dy = node.y - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 150 && distance > 0) {
            node.x += (dx / distance) * 0.22;
            node.y += (dy / distance) * 0.22;
          }
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }
        for (
          let otherIndex = index + 1;
          otherIndex < nodes.length;
          otherIndex += 1
        ) {
          const other = nodes[otherIndex];
          if (!other) continue;
          const distance = Math.hypot(node.x - other.x, node.y - other.y);
          if (distance < 145) {
            context.beginPath();
            context.strokeStyle = `rgba(45, 212, 168, ${0.14 * (1 - distance / 145)})`;
            context.lineWidth = 0.7;
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
        context.beginPath();
        context.fillStyle =
          index % 4 === 0
            ? "rgba(115, 255, 184, .5)"
            : "rgba(45, 212, 168, .44)";
        context.arc(
          node.x,
          node.y,
          index % 5 === 0 ? 1.8 : 1.1,
          0,
          Math.PI * 2,
        );
        context.fill();
      });
      if (!reduceMotion) frame = window.requestAnimationFrame(draw);
    };

    const move = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };
    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
      aria-hidden="true"
    />
  );
}
