import {print} from '../util.js';

//input variables
const arr : number[]= [1, 2, 3, 4 ];

//type alias
type ArrayFunction = <T>(arr: T[]) => T|T[];

// ************** 1. Array operations **************
console.log("************** DELIVERABLE 01 *********************");

// --------------------- Head ---------------------
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head : ArrayFunction = ([first, ..._]) => first

print(true, head, arr);

// --------------------- Tail ---------------------
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail : ArrayFunction= ([_, ...rest]) => rest;

print(true, tail, arr);

// --------------------- Init ---------------------
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init : ArrayFunction= (arr) => {
    const tempArray = [...arr];
    tempArray.pop();
    return tempArray
}

print(true, init, arr);

// --------------------- Last ---------------------
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last : ArrayFunction= (arr) => [...arr].pop(); // Implementation here.

print(true, last, arr);
 