// ************** 5. Slot Machine **************
console.log("\n************** DELIVERABLE 05 *********************");
// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
// "Congratulations!!!. You won <número de monedas> coins!!";
// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:
// "Good luck next time!!".

class SlothMachine {
  private coinsCounter: number;

  constructor(){
    this.coinsCounter = 0;
  }
  
  private roulette():boolean{
    return Math.random() < 0.5;
  }
  
  private reset():void{
    this.coinsCounter = 0;
  }
    
  public play():void {
    this.coinsCounter++;
    let message:string;
    if (this.roulette() && this.roulette() && this.roulette()){
      message=`Congratulations!!!. You won ${this.coinsCounter} coins!!`;
      this.reset();
    } else{
      message ="Good luck next time!!";
    }
    console.log(message);
  }
}
  
console.log(`\n----Resultado de SlotMachine ----`);
const machine1 = new SlothMachine();

for (let i = 0; i < 10; i++) {
  machine1.play();
}