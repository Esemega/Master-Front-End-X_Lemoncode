console.log("\n************** DELIVERABLE 05 *********************");

// 5. Slot Machine

// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

// "Congratulations!!!. You won <número de monedas> coins!!";

// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

// "Good luck next time!!".


class SlothMachine {
    constructor(){
      this._coinsCounter = 0;
    }
  
    _roulette(){
      return Math.random() < 0.5;
    }
    
    _reset(){
      this._coinsCounter = 0;
    }
    
    play() {
      this._coinsCounter++;
      if (this._roulette() && this._roulette() && this._roulette()){
        console.log(`Congratulations!!!. You won ${this._coinsCounter} coins!!`);
        this._reset();
      } else{
        console.log("Good luck next time!!")
      }
    }
  }
  
  console.log(`\n----Resultado de SlotMachine ----`);
  const machine1 = new SlothMachine();
  
  for (let i = 0; i < 10; i++) {
    machine1.play();
  }