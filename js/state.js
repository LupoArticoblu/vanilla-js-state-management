/**
 * L'oggetto state contiene le chiavi per accedere ai singoli stati del player
 */
export const state ={
  STANDING_LEFT: 0,
  STANDING_RIGHT: 1,
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
  }
  /**
   * La funzione handleInput() gestisce l'input dell'utente e decide se cambiare stato
   * in base all'input ricevuto
   */
  handleInput(input){
    if(input === 'Press right'){
      this.player.setState(state.STANDING_RIGHT);
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
  }
  handleInput(input){
    if(input === 'Press left'){
      this.player.setState(state.STANDING_LEFT);
    }
  }
}
