import Player from './player.js';
import InputHandler from './input.js';
import {drawStatusText} from './utility.js';


window.addEventListener('load', function() {
  const load = document.getElementById('loading');
  load.style.display = 'none';
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const player = new Player(canvas.width, canvas.height);
  const input = new InputHandler();
  console.log(player);
  player.draw(ctx);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
    player.update(input.lastKey);
    drawStatusText(ctx, input);
    requestAnimationFrame(animate);
  };
  animate();
});