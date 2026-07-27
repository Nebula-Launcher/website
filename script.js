const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener('resize', resize);

const stars = [];
const STAR_COUNT = 200;

for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.0005 + 0.0002,
        phase: Math.random() * Math.PI * 2,
    });
}

function draw(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const star of stars) {
        const twinkle = Math.sin(time * star.speed + star.phase) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 190, 255, ${star.alpha * twinkle})`;
        ctx.fill();
    }

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
