/**
 * L'oggetto state contiene le chiavi per accedere ai singoli stati del player
 */
export const state ={
  STANDING_LEFT: 0,
  STANDING_RIGHT: 1,
  SITTING_LEFT: 2,
  SITTING_RIGHT: 3,
  RUNNING_LEFT: 4,
  RUNNING_RIGHT: 5,
}

/**
 * La classe State rappresenta lo stato generico del player
 */
class State {
  constructor(state){
    this.state = state;
  }
}

/**
 * La classe StandingLeft rappresenta lo stato del player quando e' fermo in piedi
 * e si trova a sinistra
 */
export class StandingLeft extends State{
  constructor(player){
    super('StandingLeft');
    this.player = player;
  }
  /**
   * La funzione enter() viene chiamata quando il player entra in questo stato
   */
  enter(){
    this.player.frameY = 1;
    this.player.speed = 0;
  }
  /**
   * La funzione handleInput() gestisce l'input dell'utente e decide se cambiare stato
   * in base all'input ricevuto
   */
  handleInput(input){
    if(input === 'Press right'){
      this.player.setState(state.RUNNING_RIGHT);
    }else if(input === 'Press down'){
      this.player.setState(state.SITTING_LEFT);
    }else if(input === 'Press left'){
      this.player.setState(state.RUNNING_LEFT);
    }
  }
}

/**
 * La classe StandingRight rappresenta lo stato del player quando e' fermo in piedi
 * e si trova a destra
 */
export class StandingRight extends State{
  constructor(player){
    super('StandingRight');
    this.player = player;
  }
  enter(){
    this.player.frameY = 0;
    this.player.speed = 0;
  }
  handleInput(input){
    if(input === 'Press left'){
      this.player.setState(state.RUNNING_LEFT);
    }else if(input === 'Press down'){
      this.player.setState(state.SITTING_RIGHT);
    }else if(input === 'Press right'){
      this.player.setState(state.RUNNING_RIGHT);
    }
  }
}
export class SittingLeft extends State{
  constructor(player){
    super('SittingLeft');
    this.player = player;
  }
  enter(){
    this.player.frameY = 9;
    this.speed = 0;
  }
  handleInput(input){
    if(input === 'Press right'){
      this.player.setState(state.SITTING_RIGHT);
    }else if(input === 'Release down'){
      this.player.setState(state.STANDING_LEFT);
    }
  }
}
export class SittingRight extends State{
  constructor(player){
    super('SittingRight');
    this.player = player;
  }
  enter(){
    this.player.frameY = 8;
    this.speed = 0;
  }
  handleInput(input){
    if(input === 'Press left'){
      this.player.setState(state.SITTING_LEFT);
    }else if(input === 'Release down'){
      this.player.setState(state.STANDING_RIGHT);
    }
  }

}
export class RunningLeft extends State{
  constructor(player){
    super('RunningLeft');
    this.player = player;
  }
  enter(){
    this.player.frameY = 7;
    this.player.speed = - this.player.maxSpeed;
  }
  handleInput(input){
    // se l'utente preme il tasto destra
    if(input === 'Press right'){
      // cambiamo lo stato del player in RUNNING_RIGHT
      this.player.setState(state.RUNNING_RIGHT);
    // se l'utente rilascia il tasto sinistra
    }else if(input === 'Release left'){
      // cambiamo lo stato del player in STANDING_LEFT
      this.player.setState(state.STANDING_LEFT);
    // se l'utente preme il tasto giu
    }else if(input === 'Press down'){
      // cambiamo lo stato del player in SITTING_LEFT
      this.player.setState(state.SITTING_LEFT);
    }
  }
}
export class RunningRight extends State{
  constructor(player){
    super('RunningRight');
    this.player = player;
  }
  enter(){
    this.player.frameY = 6;
    this.player.speed = this.player.maxSpeed;
  }
  handleInput(input){
    if(input === 'Press left'){
      this.player.setState(state.RUNNING_LEFT);
    }else if(input === 'Release right'){
      this.player.setState(state.STANDING_RIGHT);
    }else if(input === 'Press down'){
      this.player.setState(state.SITTING_RIGHT);
    }
  }
}  
