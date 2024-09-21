export default 
class InputHandler{
  constructor(){
    this.lastKey = '';
    window.addEventListener('keydown', e => {
      switch(e.key){
        case 'ArrowLeft':
          this.lastKey = 'Press left';
          break
        case 'ArrowRight':
          this.lastKey = 'Press right'; 
          break 
      }
    })
    window.addEventListener('keyup', e =>{
      switch(e.key){
        case 'ArrowLeft':
          this.lastKey = 'Release left';
          break
        case 'ArrowRight':
          this.lastKey = 'Release right';  
          break
      }
    })
  }
}