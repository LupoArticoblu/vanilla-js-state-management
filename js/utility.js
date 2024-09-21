export
function drawStatusText(context, input, player) {
  context.fillStyle = 'black';
  context.font = '20px Helvetica';
  context.fillText('Last key: ' + input.lastKey, 20, 50);
  context.fillText('Active state: ' + player.currentState.state, 20, 100);
}