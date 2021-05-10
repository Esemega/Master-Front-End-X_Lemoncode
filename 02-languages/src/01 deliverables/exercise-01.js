import {print} from '../util.js';

//input variables
const arr = [1, 2, 3, 4 ];
const str = 'hello';


//Implementación
console.log("************** DELIVERABLE 01 *********************");
// 1. Array operations

// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = ([first, ..._]) => first

print(true, head, arr);
console.log(`También funciona con otros iterables como los strings. Dado el string "${str}" el resultado es`, head(str));
console.log(`La función es inmutable ya que el string inicial sigue siendo`, str);


// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([_, ...rest]) => rest;

print(true, tail, arr);
console.log(`También funciona con otros iterables como los strings. Dado el string "${str}" el resultado es`, tail(str));
console.log(`La función es inmutable ya que el string inicial sigue siendo`, str);


// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (arr) => {
    const tempArray = [...arr];
    tempArray.pop();
    return tempArray
}

print(true, init, arr);

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (arr) => [...arr].pop(); // Implementation here.

print(true, last, arr);
 