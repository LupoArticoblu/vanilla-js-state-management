import{ StandingLeft, StandingRight, SittingLeft, SittingRight, RunningLeft, RunningRight, JumpingLeft, JumpingRight } from './state.js';
export default
class Player{
  constructor(gameWidth, gameHeight){
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.states = [new StandingLeft(this), new StandingRight(this), new SittingLeft(this), new SittingRight(this), new RunningLeft(this), new RunningRight(this), new JumpingLeft(this), new JumpingRight(this)];
    this.currentState = this.states[1];
    this.image = document.getElementById('dog');
    this.width = 200;
    this.height = 181.83;
    //posizioniamo il player al centro in basso
    this.x = this.gameWidth/2 - this.width/2;
    this.y = this.gameHeight - this.height;
    this.vy = 0;
    this.weight = 0.8;
    this.frameX = 0;
    this.frameY = 0;
    this.speed = 0;
    this.maxSpeed = 10;
    this.fps = 20;
    this.frameTimer = 0;
    this.frameInterval = 1000/this.fps;
  }
  draw(context){
    //ricordimo gli argomenti da passare in drawImage sono: immagine, sorgente asse X, sorgente asse Y, apice asse X, apice asse Y e destinazione immagine su tela con this.x, this.y, this.width e this.height
    context.drawImage(this.image, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height)
  }
  update(input){
    this.currentState.handleInput(input);
    this.x += this.speed;
    //gestione orizzontale
    if(this.x <= 0) this.x = 0;
    if(this.x >= this.gameWidth - this.width) this.x = this.gameWidth - this.width;
    //gestione verticale
    this.y += this.vy;
    if(!this.onGround()){
      this.vy += this.weight;
    }else{
      this.vy = 0;
    }
    
  }
  setState(state){
    this.currentState = this.states[state];
    this.currentState.enter();
  }
  onGround(){
    return this.y >= this.gameHeight - this.height;
  }
}