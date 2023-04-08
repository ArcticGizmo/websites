let canvas;
document.addEventListener("DOMContentLoaded", () => {
  canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // makePacmanSpin();


  document.addEventListener("mousemove", (e) => {
    // makeCircleFollow();
    makePacmanFaceMouse(e, "pacman");
    // makePacmanFaceMouse(e, 'pacman--body');
    // drawLine({ x: 20, y: 20 }, { x: e.clientX, y: e.clientY });
  });
});

let data = 0;

// ================== definitions ===================

const getOffset = (value, max, unit) => (value / max) * 100 + unit;

const makeCircleFollow = (e) => {
  const circle = document.getElementById("circle");

  data += 1;
  const display = document.getElementById("display");
  display.innerText = `Count: ${data}`;

  if (circle == null) {
    return;
  }

  circle.animate(
    {
      top: getOffset(e.clientY, window.innerHeight, "vh"),
      left: getOffset(e.clientX, window.innerWidth, "vw"),
    },
    { duration: 2000, fill: "forwards" }
  );
};

const makePacmanSpin = () => {
  const pacman = document.getElementById("pacman");

  pacman.animate(
    { transform: "rotate(360deg)" },
    {
      duration: 5000,
      fill: "forwards",
      iterations: Infinity,
    }
  );
};

const prevAngles = {};

const makePacmanFaceMouse = (event, id) => {
  const element = document.getElementById(id);

  const position = element.getBoundingClientRect();

  const x = event.x - (position.x + position.width / 2);
  const y = position.y + position.height / 2 - event.y;
  const degrees = Math.atan(x / y) * (180 / Math.PI) + (y < 0 ? 180 : 0);

  // we cannot animate this as it causes spinning issues
  element.style.transform = `rotate(${degrees.toFixed(1)}deg)`;
};

const setData = (value) => {
  data = value;
  document.getElementById("display").innerText = value;
};

const drawLine = (p1, p2) => {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(p2.x, p2.y);
  const a = -50;
  const b = 50;
  ctx.bezierCurveTo(p2.x + a, p2.y + a, p1.x + b, p1.y + b, p1.x, p1.y);
  // ctx.lineTo(p2.x, p2.y);
  ctx.strokeStyle = "red";
  ctx.stroke();
};
