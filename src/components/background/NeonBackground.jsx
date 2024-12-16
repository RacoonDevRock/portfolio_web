import { useEffect } from "react";
import "./NeonBackground.css";

function NeonBackground() {
  useEffect(() => {
    const canvas = document.getElementById("neon-canvas");
    const ctx = canvas.getContext("2d");
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  
    // Inicializa el tamaño del canvas
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const circles = [];
    for (let i = 0; i < 30; i++) {
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 10 + 10,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(30, 30, 30, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      for (const circle of circles) {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        circle.x += circle.dx;
        circle.y += circle.dy;
        if (circle.x < 0 || circle.x > canvas.width) circle.dx *= -1;
        if (circle.y < 0 || circle.y > canvas.height) circle.dy *= -1;
      }

      requestAnimationFrame(draw);
    }

    draw();
  
    // Limpia el evento cuando el componente se desmonta
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      id="neon-canvas"
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
}

export default NeonBackground;
