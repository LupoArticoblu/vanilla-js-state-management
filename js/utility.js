export
function drawStatusText(context, input) {
  context.fillStyle = 'black';
  context.font = '20px Helvetica';
  context.fillText('Last key: ' + input.lastKey, 20, 50);
}