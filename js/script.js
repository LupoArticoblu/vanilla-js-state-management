import Player from './player.js';
import InputHandler from './input.js';
import {drawStatusText} from './utility.js';


window.addEventListener('load', function() {
  // nascondiamo il testo loading
  const load = document.getElementById('loading');
  load.style.display = 'none';
  // prendiamo il canvas e il suo contesto
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  // impostiamo la grandezza del canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // creiamo l'oggetto player e input
  const player = new Player(canvas.width, canvas.height);
  const input = new InputHandler();
  console.log(player);
  // disegnamo il player
  player.draw(ctx);

  // creiamo la funzione per l'animazione
  function animate() {
    // cancelliamo il canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // disegnamo il player
    player.draw(ctx);
    // aggiorniamo lo stato del player
    // la funzione update dell'oggetto player aggiorna il suo stato a seconda dell'input ricevuto. Il suo argomento una stringa che indica l'ultima azione dell'utente (es. 'Press left' o 'Release right'), la funzione update dell'oggetto player utilizza l'argomento per cambiare il suo stato ad esempio se l'argomento 'Press left' allora il player si sposta a sinistra
    player.update(input.lastKey);
    // disegnamo il testo delle info
    drawStatusText(ctx, input, player);
    // chiamiamo la funzione per l'animazione
    requestAnimationFrame(animate);
  };
  // chiamiamo la funzione per l'animazione
  animate();
});