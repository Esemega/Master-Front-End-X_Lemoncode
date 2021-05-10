import {print} from '../util.js';

////input variables
const obj = {id: 387, description: "lampara", price:20};
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log("\n************** DELIVERABLE 03 *********************");
// 3. Clone Merge
// Clone

// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

function clone(...source) {
    let result = {};
    source.forEach( element => result ={...element});
    return result;
  };
  
  print(false, clone, obj);
  console.log('clone(obj) === obj', clone(obj) === obj)
  
  // Merge
  
  // Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
  
  function merge(source, target) {
    return {...clone(target), ...clone(source)}
  }
  
  print(false, merge,a, b);
  