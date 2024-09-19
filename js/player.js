export default
class Player{
  constructor(gameWidth, gameHeight){
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.state = [];
    this.currentState = this.state[0];
    this.image = document.getElementById('dog');
    this.width = 200;
    this.height = 181;
    //posizioniamo il player al centro in basso
    this.x = this.gameWidth/2 - this.width/2;
    this.y = this.gameHeight - this.height;
    this.frameX = 0;
    this.frameY = 0;
  }
  draw(context){
    //ricordimo gli argomenti da passare in drawImage sono: immagine, sorgente asse X, sorgente asse Y, apice asse X, apice asse Y e destinazione immagine su tela con this.x, this.y, this.width e this.height
    context.drawImage(this.image, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height)
  }
}