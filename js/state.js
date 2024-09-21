export const state ={
  STANDING_LEFT: 0,
  STANDING_RIGHT: 1,
}

class State {
  constructor(state){
    this.state = state;
  }
}

export class StandingLeft extends State{
  constructor(player){
    super('StandingLeft');
    this.player = player;
  }
  enter(){
    this.player.frameY = 1;
  }
  handleInput(input){
    if(input === 'ArrowRight'){
      this.player.setState(state.STANDING_RIGHT);
    }
  }
}

export class StandingRight extends State{
  constructor(player){
    super('StandingRight');
    this.player = player;
  }
  enter(){
    this.player.frameY = 0;
  }
  handleInput(input){
    if(input === 'ArrowLeft'){
      this.player.setState(state.STANDING_LEFT);
    }
  }
}