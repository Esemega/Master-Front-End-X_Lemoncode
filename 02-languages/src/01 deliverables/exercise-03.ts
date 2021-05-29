import {print} from '../util.js';

//types
interface MyObject {
  id: number, 
  description: string, 
  price:number,
}
interface Person {
  name: string, 
  surname?: string, 
  country?: string,
  age?: number, 
  married?: boolean
}
type ObjectFunction = (source: Object, target?:Object) => Object;


//input variables
const obj:MyObject= {id: 387, description: "lampara", price:20};
const a:Person = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b:Person = { name: "Luisa", age: 31, married: true };


// ************** 3. Clone Merge **************
console.log("\n************** DELIVERABLE 03 *********************");
// --------------------- Clone ---------------------
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

const clone:ObjectFunction = (...source) => {
  let result = {};
  source.forEach( element => result ={...element});
  return result;
};

print(false, clone, obj);
console.log('clone(obj) === obj', clone(obj) === obj)

// --------------------- Merge ---------------------
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
  
const merge:ObjectFunction = (source, target) =>  {
  return {...clone(target), ...clone(source)}
}

print(false, merge,a, b);