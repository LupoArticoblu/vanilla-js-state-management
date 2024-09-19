import Player from './player.js';
import InputHandler from './input.js';


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
});